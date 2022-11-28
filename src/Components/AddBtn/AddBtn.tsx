import { IonButton, useIonToast } from '@ionic/react'
import { alarm } from 'ionicons/icons'
import { FC } from 'react'

import style from './AddBtn.module.scss'

interface AddBtnProps {}

export const AddBtn: FC<AddBtnProps> = ({}) => {
	const [present] = useIonToast()

	const presentToast = (position: 'top' | 'middle' | 'bottom') => {
		present({
			message: 'Todo added!',
			duration: 1500,
			position: position,
			icon: alarm
		})
	}

	const onAdd = () => {
		presentToast('top')
	}

	return (
		<div className={style.wrap}>
			<IonButton className={style.btn} onClick={onAdd}>
				Add
			</IonButton>
		</div>
	)
}
