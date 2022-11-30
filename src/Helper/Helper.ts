import { ITodo } from 'Store/Todo'

export {}

export const filterTodos = (data: ITodo[], text: string) => {
	if (!text) return data

	return data.filter(({ body, type, subTitle, title }) => {
		const dataFilter = [body, type, subTitle, title]

		for (const dataFilterKey of dataFilter) {
			if (dataFilterKey.includes(text)) {
				console.log(dataFilterKey)
				return true
			}
		}

		return false
	})
}
