import {
	IonFab,
	IonFabButton,
	IonFabList,
	IonIcon,
	useIonToast
} from '@ionic/react'
import {
	addOutline,
	checkmarkOutline,
	codeOutline,
	filterOutline,
	logoBuffer,
	swapHorizontalOutline,
	swapVerticalOutline
} from 'ionicons/icons'
import { observer } from 'mobx-react'
import { FC } from 'react'
import { app } from 'Store/App'
import { todos } from 'Store/Todos'

interface FabProps {}

export const Fab: FC<FabProps> = observer(({}) => {
	const [present] = useIonToast()

	const onAdd = () => {
		app.toggleCreateModalTodo(true)
	}

	const onMoveX = () => {
		todos.setDrag('x')
		present({
			message: `drag todos and horizontal scroll for deleted`,
			position: 'top',
			duration: 4000,
			icon: swapHorizontalOutline
		})
	}
	const onMoveY = () => {
		todos.setDrag('y')
		present({
			message: `drag todos and verticals scroll for sorted`,
			position: 'top',
			duration: 4000,
			icon: swapVerticalOutline
		})
	}

	const onClearDrag = () => {
		todos.setDrag('none')
	}

	return (
		<IonFab slot="fixed" vertical="bottom" horizontal="end">
			{todos.drag !== 'none' ? (
				<IonFabButton>
					<IonIcon icon={checkmarkOutline} onClick={onClearDrag}></IonIcon>
				</IonFabButton>
			) : (
				<IonFabButton>
					<IonIcon icon={logoBuffer} onClick={onClearDrag}></IonIcon>
				</IonFabButton>
			)}

			<IonFabList side="top">
				<IonFabButton onClick={onMoveY}>
					<IonIcon icon={filterOutline}></IonIcon>
				</IonFabButton>
				<IonFabButton onClick={onMoveX}>
					<IonIcon icon={codeOutline}></IonIcon>
				</IonFabButton>
				<IonFabButton onClick={onAdd}>
					<IonIcon icon={addOutline}></IonIcon>
				</IonFabButton>
			</IonFabList>
		</IonFab>
	)
})
