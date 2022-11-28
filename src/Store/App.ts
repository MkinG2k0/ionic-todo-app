import { makeAutoObservable } from 'mobx'

export class App {
	load = false
	createTodoModal = false

	constructor() {
		makeAutoObservable(this, {})
	}

	toggleLoad(value?: boolean) {
		this.load = value || !this.load
	}

	toggleCreateModalTodo(value?: boolean) {
		this.createTodoModal = value || !this.createTodoModal
	}
}

export const app = new App()
