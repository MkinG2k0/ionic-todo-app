import { GalleryPhoto } from '@capacitor/camera'
import { save } from 'Helper/Data'
import { autorun, makeAutoObservable, makeObservable, observable } from 'mobx'
import { ICreateTodo, Todo } from 'Store/Todo'

export interface IPhoto {
	webPath: string
}

export class Photos {
	data: IPhoto[] = []

	constructor() {
		makeObservable(
			this,
			{
				data: observable
			},
			{deep: true}
		)
	}

	add(data: IPhoto[]) {
		this.data = [...this.data, ...data]
		return this.data
	}

	clear() {
		this.data = []
	}
}

export const photo = new Photos()
