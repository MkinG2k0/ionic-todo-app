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
import { Map } from 'Components/Map/Map'
import { Recorder } from 'Components/Recorder/Recorder'
import { Segment } from 'Components/Segment/Segment'
import { Select } from 'Components/Select/Select'
import { Todo } from 'Components/Todo/Todo'
import { globe } from 'ionicons/icons'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import AnyPage from 'Pages/AnyPage/AnyPage'
import React, { useEffect } from 'react'
import { app } from 'Store/App'
import { todos } from 'Store/Todos'

const Main = observer(() => {
	useEffect(() => {
		app.toggleLoad(true)
	}, [])
	return (
		<IonContent>
			<Wrap /> <CreateTodoModal />
			<Fab />
		</IonContent>
	)
})

const Wrap = observer(() => {
	return <Map Comp={Todo} data={todos.data} />
})

autorun(() => {
	// console.log(todos.data, 'autorun')
})

const A = () => {
	const [present] = useIonToast()

	const presentToast = (position: 'top' | 'middle' | 'bottom') => {
		present({
			message: 'Hello World!',
			duration: 1500,
			position: position,
			icon: globe
		})
	}

	const openScanner = async () => {
		// const data = await BarcodeScanner.scan()
		// console.log(`Barcode data: ${data.text}`)
	}

	return (
		<>
			<h1>Page One</h1>
			<Segment />
			<Select />
			<Recorder />
			<IonButton onClick={openScanner}>Scan barcode</IonButton>
			<IonButton expand="block" onClick={() => presentToast('top')}>
				Present Toast At the Top
			</IonButton>
			<IonNavLink routerDirection="forward" component={() => <AnyPage />}>
				<IonButton>Go to Page Three</IonButton>
			</IonNavLink>
			<ActionBtn>Ok</ActionBtn>
			<IonDatetime></IonDatetime>
		</>
	)
}

export default Main
