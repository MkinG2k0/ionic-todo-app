import { IonContent } from '@ionic/react'
import { FC } from 'react'

interface MenuProps {}

export const Menu: FC<MenuProps> = ({}) => {
	return (
		<IonContent className="ion-padding">This is the menu content.</IonContent>
	)
}
