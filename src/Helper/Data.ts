import { get, set } from 'idb-keyval'
import { autorun } from 'mobx'

export const save = <T extends { new () }>(
	Class: T,
	nameData: string[] = []
): InstanceType<T> => {
	const keyName = Class.name
	const instance = new Class()
	let init = true

	autorun(async () => {
		const instanceLink = instance[nameData[0]]

		if (init) {
			const dataGet = await Get(keyName)

			if (dataGet) {
				nameData.map((name) => {
					if (dataGet[name]) {
						instance[name] = dataGet[name]
					}
				})
			}
			init = false
		}

		const data = {}

		nameData.map((name) => {
			data[name] = instance[name]
		})

		Set(keyName, data)
	})

	return instance
}

const Get = async (key) => {
	const data = await get(key)
	if (data) {
		return JSON.parse(data)
	}
	return undefined
}

const Set = (key, val) => set(key, JSON.stringify(val))
