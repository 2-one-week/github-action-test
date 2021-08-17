import {createConnection, Connection} from 'typeorm'
import {ORM_CONFIG} from '@/config'

const createDBConnection = async (): Promise<Connection> => {
    const connection = await createConnection(ORM_CONFIG)
    // eslint-disable-next-line no-console
    console.log('Database Connected')
    return connection
}

export default createDBConnection
