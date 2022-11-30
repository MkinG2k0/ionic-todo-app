import { save } from 'Helper/Data'
import { autorun, makeAutoObservable, makeObservable, observable } from 'mobx'
import { ICreateTodo, Todo } from 'Store/Todo'

export type Drag = 'x' | 'y' | 'none'

export class Todos {
	// data: Todo[] = observable.array([], { deep: true })
	data: Todo[] = []
	textFilter: string = ''
	drag: Drag = 'none'

	constructor() {
		makeObservable(
			this,
			{
				data: observable,
				drag: observable,
				textFilter: observable
			},
			{ deep: true }
		)
	}

	setData(data) {
		this.data = data
	}

	create(data: ICreateTodo) {
		const todos = new Todo(data)
		this.data = [...this.data, todos]
		return todos
	}

	remove(id: number) {
		this.data = this.data.filter((todo) => todo.id !== id)
		return this.data
	}

	setDrag(text: Drag) {
		this.drag = text
	}

	filter(text: string) {
		this.textFilter = text
	}
}

export const todos = save(Todos)
