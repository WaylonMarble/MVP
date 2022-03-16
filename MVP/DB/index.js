import { Pool } from 'pg'
import config from '../config.js'

const pool = new Pool({
  host: config.host,
  user: config.user,
  password: config.pass,
  database: config.database,
})



export default pool;