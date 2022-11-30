import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { takePictures } from 'Helper/Camera'
import { useEffect } from 'react'

function AnyPage() {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton></IonBackButton>
					</IonButtons>
					<IonTitle>Page Two</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent class="ion-padding">
				<h1>Page Two</h1>
			</IonContent>
		</>
	)
}

export default AnyPage
