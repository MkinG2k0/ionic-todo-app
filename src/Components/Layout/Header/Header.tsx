import {
	IonHeader,
	IonProgressBar,
	IonSearchbar,
	IonToolbar
} from '@ionic/react'
import { observer } from 'mobx-react'
import { FC } from 'react'
import { app } from 'Store/App'
import { todos } from 'Store/Todos'

interface HeaderProps {}

export const Header: FC<HeaderProps> = observer(({}) => {
	const load = app.load

	const onChange = (e) => {
		const { value } = e.detail
		todos.filter(value)
	}

	return (
		<IonHeader>
			{/*<IonToolbar>*/}
			{/*	/!*<IonTitle>Menu Content</IonTitle>*!/*/}
			{/*	<IonSegment value="all">*/}
			{/*		<IonSegmentButton value="all">All</IonSegmentButton>*/}
			{/*		<IonSegmentButton value="favorites">Favorites</IonSegmentButton>*/}
			{/*	</IonSegment>*/}
			{/*</IonToolbar>*/}
			<IonToolbar>
				<IonSearchbar onIonChange={onChange}></IonSearchbar>
				{!load && <IonProgressBar type="indeterminate"></IonProgressBar>}
			</IonToolbar>
		</IonHeader>
	)
})
