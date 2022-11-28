import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { Header } from 'Components/Layout/Header/Header'
import { Menu } from 'Components/Layout/Menu/Menu'
import { FC } from 'react'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<IonMenu contentId="main-content">
				<Menu />
			</IonMenu>
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>{children}</IonContent>
			</IonPage>
		</>
	)
}
