import {
	IonButton,
	IonContent,
	IonDatetime,
	IonNavLink,
	useIonToast
} from '@ionic/react'
import { ActionBtn } from 'Components/ActionBtn/ActionBtn'
import { CreateTodoModal } from 'Components/CreateTodoModal/CreateTodoModal'
import { Fab } from 'Components/Fab/Fab'
import { Recorder } from 'Components/Recorder/Recorder'
import { Segment } from 'Components/Segment/Segment'
import { Select } from 'Components/Select/Select'
import { Todo } from 'Components/Todo/Todo'
import { AnimatePresence, motion, Reorder, useMotionValue } from 'framer-motion'
import { filterTodos } from 'Helper/Helper'
import { useRaisedShadow } from 'Hook/use-raised-shadow'
import { globe, trashOutline } from 'ionicons/icons'
import { observer } from 'mobx-react'
import AnyPage from 'Pages/AnyPage/AnyPage'
import React, { FC, useEffect, useState } from 'react'
import { app } from 'Store/App'
import { ITodo } from 'Store/Todo'
import { todos } from 'Store/Todos'

const Main = observer(() => {
	useEffect(() => {
		app.toggleLoad(true)
	}, [])

	return (
		<IonContent>
			<Wrap />
			<CreateTodoModal />
			<Fab />
		</IonContent>
	)
})

const Wrap = observer(() => {
	const [arrTodos, setArrTodos] = useState<ITodo[]>([...todos.data])

	useEffect(() => {
		const filtered = filterTodos([...todos.data], todos.textFilter)

		setArrTodos(filtered)
	}, [todos.data, todos.textFilter])

	const onReorder = (data) => {
		console.log(data)
		todos.setData(data)
		setArrTodos(data)
	}

	return (
		<AnimatePresence>
			<Reorder.Group axis="y" values={arrTodos} onReorder={onReorder}>
				{arrTodos.map((todo) => (
					<ReorderTodo todo={todo} key={todo.id} />
				))}
			</Reorder.Group>
		</AnimatePresence>
	)

	// return <Map Comp={Todo} data={todos.data} />
})

const ReorderTodo = observer(({ todo }) => {
	const [double, setDouble] = useState(false)

	const onDoubleClick = () => {
		setDouble((prevState) => !prevState)
	}

	useEffect(() => {
		// if (double) {
		// 	todos.setDrag('x')
		// } else {
		// 	todos.setDrag('none')
		// }
	}, [double])

	if (todos.drag === 'x') {
		return (
			<DragTodoX todo={todo}>
				<motion.div onDoubleClick={onDoubleClick}>
					<Todo {...todo} />
				</motion.div>
			</DragTodoX>
		)
	}

	if (todos.drag === 'y') {
		return (
			<DragTodoY todo={todo}>
				<motion.div onDoubleClick={onDoubleClick}>
					<Todo {...todo} />
				</motion.div>
			</DragTodoY>
		)
	}

	return (
		<motion.div onDoubleClick={onDoubleClick}>
			<Todo {...todo} />
		</motion.div>
	)
})

const DragTodoY: FC<DragTodoX> = ({ todo, children }) => {
	const y = useMotionValue(0)
	const boxShadow = useRaisedShadow(y)

	const onDrag = (e) => {
		e.target.style.zIndex = 10000
	}

	return (
		<Reorder.Item
			key={todo.id}
			value={todo}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{ boxShadow, y }}
			onDrag={onDrag}
		>
			{children}
			{/*{double && <Remove/>}*/}
		</Reorder.Item>
	)
}

interface DragTodoX {
	todo: ITodo
}

const DragTodoX: FC<DragTodoX> = ({ children, todo }) => {
	const [present] = useIonToast()

	const onRemove = (e) => {
		if (e.x < 400) {
			present({
				message: `Deleted ${todo.title}`,
				duration: 2500,
				position: 'top',
				icon: trashOutline
			})
			todos.remove(todo.id)
		}
	}

	return (
		<motion.div
			drag="x"
			dragConstraints={{ left: -160, right: 0 }}
			dragElastic={0.2}
			onDragEnd={onRemove}
			dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
		>
			{children}
		</motion.div>
	)
}

export default Main
