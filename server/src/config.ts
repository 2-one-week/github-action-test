import dotenv from 'dotenv'
import path from 'path'
import {ConnectionOptions} from 'typeorm'

const pathJoin = (targetPath: string) => path.join(__dirname, targetPath)

const envPath = pathJoin('../.env')

dotenv.config({path: envPath})

export const NODE_ENV = process.env.NODE_ENV || 'development'

export const SERVER_PORT = process.env.SERVER_PORT || 3000

export const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL || 'http://localhost:8000'

export const ORM_CONFIG: ConnectionOptions = {
    type: 'sqlite',
    database: pathJoin(`../${process.env.TYPEORM_DATABASE_NAME}`) || pathJoin('../exchange_data.sqlite'),
    entities: ['src/entity/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
}

export const OPEN_API_BASE_URL =
    process.env.OPEN_API_BASE_URL || 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON'

export const OPEN_API_TOKEN = process.env.OPEN_API_TOKEN || 'CBsyWlF6wyTSHwumeCUedDxTJxDHlPSF'
