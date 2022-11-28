import type { OverlayEventDetail } from '@ionic/core'
import { IonButton, useIonActionSheet } from '@ionic/react'
import { FC } from 'react'

interface ActionProps {
	onDidDismiss?: (data: CustomEvent<OverlayEventDetail<any>>) => void
}

export const ActionBtn: FC<ActionProps> = ({ children, onDidDismiss }) => {
	const [present] = useIonActionSheet()

	const OnAction = () => {
		present({
			header: 'Example header',
			subHeader: 'Example subheader',
			buttons: [
				{
					text: 'Delete',
					role: 'destructive',
					data: {
						action: 'delete'
					}
				},
				{
					text: 'Share',
					data: {
						action: 'share'
					}
				},
				{
					text: 'Cancel',
					role: 'cancel',
					data: {
						action: 'cancel'
					}
				}
			],
			onDidDismiss: (data) => onDidDismiss?.(data)
		})
	}

	return <IonButton onClick={OnAction}>{children}</IonButton>
}
