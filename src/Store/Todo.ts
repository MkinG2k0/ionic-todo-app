import { makeAutoObservable } from 'mobx'
import { IPhoto } from 'Store/Photos'

export interface ICreateTodo {
	title: string
	body: string
	type: string
	subTitle: string
	images: IPhoto[]
}

export interface ITodo extends ICreateTodo {
	createAt: string
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
	images: IPhoto[] = []

	constructor({ subTitle, title, type, body, images }: ICreateTodo) {
		makeAutoObservable(this, {})
		this.title = title
		this.body = body
		this.type = type
		this.subTitle = subTitle
		this.images = images
	}

	toggle() {
		this.finished = !this.finished
		return this.finished
	}
}
