import { save } from 'Helper/Data'
import { makeObservable, observable } from 'mobx'
import { ICreateTodo, Todo } from 'Store/Todo'

export class Todos {
	// data: Todo[] = observable.array([], { deep: true })
	data: Todo[] = []

	constructor() {
		makeObservable(
			this,
			{
				data: observable
			},
			{ deep: true }
		)
	}

	create(data: ICreateTodo) {
		const todos = new Todo(data)
		this.data = [...this.data, todos]
		return todos
	}

	remove(id: number) {
		this.data.filter((todo) => todo.id !== id)
		return this.data
	}
}

export const todos = save(Todos, ['data'])
