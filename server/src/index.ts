import App from '@/app'

import {NODE_ENV, SERVER_PORT} from '@/config'

const app = new App()

// eslint-disable-next-line no-console
app.server.listen(SERVER_PORT, () => console.log(`node env ${NODE_ENV}\nListening on port ${SERVER_PORT}`))
