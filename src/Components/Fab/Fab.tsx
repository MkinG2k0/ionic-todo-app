import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react'
import {
	addCircleOutline,
	apertureOutline,
	bookmarkOutline,
	bulbOutline
} from 'ionicons/icons'
import { observer } from 'mobx-react'
import { FC } from 'react'
import { app } from 'Store/App'

interface FabProps {}

export const Fab: FC<FabProps> = observer(({}) => {
	const onAdd = () => {
		// todos.create({ title: 'ok', body: 'body' })
		app.toggleCreateModalTodo(true)
	}

	return (
		<IonFab slot="fixed" vertical="bottom" horizontal="end">
			<IonFabButton>
				<IonIcon icon={addCircleOutline}></IonIcon>
			</IonFabButton>
			<IonFabList side="top">
				<IonFabButton onClick={onAdd}>
					<IonIcon icon={apertureOutline}></IonIcon>
				</IonFabButton>
				<IonFabButton onClick={onAdd}>
					<IonIcon icon={bulbOutline}></IonIcon>
				</IonFabButton>
				<IonFabButton onClick={onAdd}>
					<IonIcon icon={bookmarkOutline}></IonIcon>
				</IonFabButton>
			</IonFabList>
		</IonFab>
	)
})
