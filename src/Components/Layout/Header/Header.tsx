import {
	IonHeader,
	IonProgressBar,
	IonSearchbar,
	IonToolbar
} from '@ionic/react'
import { observer } from 'mobx-react'
import { FC } from 'react'
import { app } from 'Store/App'

interface HeaderProps {}

export const Header: FC<HeaderProps> = observer(({}) => {
	const load = app.load

	const onChange = () => {}
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
				<IonSearchbar onChange={onChange}></IonSearchbar>
				{!load && <IonProgressBar type="indeterminate"></IonProgressBar>}
			</IonToolbar>
		</IonHeader>
	)
})
