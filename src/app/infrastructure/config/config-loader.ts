import { config } from 'dotenv'
import { startConfigShortPath } from './paths.config'

export const runConfigs = () => {
	config()
	startConfigShortPath()
}
runConfigs()
