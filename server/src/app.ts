import Koa, {Context, Next} from 'koa'
import Router from 'koa-router'
import morgan from 'koa-morgan'
import bodyParser from 'koa-bodyparser'
import cors, {Options} from '@koa/cors'
import {createServer, Server} from 'http'

import {CLIENT_BASE_URL} from '@/config'
import {ApiRouter, createDBConnection} from '@/loader'

class App {
    public app: Koa

    public server: Server

    public router: Router

    constructor() {
        this.app = new Koa()
        this.server = createServer(this.app.callback())
        this.router = new Router()

        this.setDatabase()
        this.setMiddleware()
        this.setRouter()
    }

    private async setDatabase() {
        await createDBConnection()
    }

    private setMiddleware() {
        const corsOptions: Options = {
            origin: CLIENT_BASE_URL,
            credentials: true,
        }

        this.app.use(cors(corsOptions))
        this.app.use(async (ctx: Context, next: Next) => {
            try {
                await next()
            } catch (err) {
                ctx.status = err.status ? err.status : 400
                ctx.body = `message: ${err.message}`
                // eslint-disable-next-line no-console
                console.log('Error :', err.message)
            }
        })
        this.app.use(morgan('dev'))
        this.app.use(bodyParser())
    }

    private setRouter() {
        const apiRouter = new ApiRouter()

        this.router.use('/api', apiRouter.routes())

        this.app.use(this.router.routes())
        this.app.use(this.router.allowedMethods())
    }
}

export default App
