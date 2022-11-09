import * as dotenv from 'dotenv'

dotenv.config()
type EnvVars = {
  SECRET: string
  PORT: number
  NODE_ENV: string
}
export const env = process.env as unknown as Readonly<EnvVars>
