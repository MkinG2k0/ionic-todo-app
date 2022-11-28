import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { takePicture } from 'Helper/Camera'
import { useEffect } from 'react'

function AnyPage() {
	useEffect(() => {
		takePicture()
	}, [])

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
