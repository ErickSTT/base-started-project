import { Server } from './server'

export class NodeFactory {
	public static CreateServer() {
		return new Server()
	}
}
