import { AppRouter } from './app.routes'
import './infrastructure/config/config-loader'
import { NodeFactory } from './NodeFactory'

function bootstrap() {
	const app = NodeFactory.CreateServer()
	app.use('/api/v1', AppRouter)
	app.build()
}

bootstrap()
