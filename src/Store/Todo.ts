import { makeAutoObservable } from 'mobx'

export interface ICreateTodo {
	title: string
	body: string
	type: string
	subTitle: string
}

export interface ITodo extends ICreateTodo {
	createAt: string
	img: string
	finished: boolean
	id: number
}

export class Todo {
	id = Math.random()
	title = ''
	subTitle = ''
	type = ''
	body = ''
	createAt = new Date().toDateString()
	finished = false
	img: any[] = []

	constructor({ subTitle, title, type, body }: ICreateTodo) {
		makeAutoObservable(this, {})
		this.title = title
		this.body = body
		this.type = type
		this.subTitle = subTitle
	}

	toggle() {
		this.finished = !this.finished
		return this.finished
	}
}
