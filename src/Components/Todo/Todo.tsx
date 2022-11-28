import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonChip
} from '@ionic/react'
import { FC, useEffect, useState } from 'react'
import { ITodo } from 'Store/Todo'

import style from './Todo.module.scss'

export const Todo: FC<ITodo> = ({
	title,
	body,
	img,
	id,
	createAt,
	finished,
	type,
	subTitle
}) => {
	const [subTitles, setSubTitles] = useState(subTitle.split(','))

	useEffect(() => {
		setSubTitles(subTitle.split(','))
	}, [id])

	const CustomClick = () => {}

	return (
		<IonCard>
			<div className={style.wrapImg}>
				<img
					alt="Silhouette of mountains"
					src="https://ionicframework.com/docs/img/demos/card-media.png"
					className={style.img}
				/>
			</div>
			<IonCardHeader>
				<IonCardTitle>{title}</IonCardTitle>
				<IonCardSubtitle>{type}</IonCardSubtitle>
				<IonCardSubtitle>
					{subTitles.map((item) => (
						<IonChip key={item} color={dataChip[item] || 'primary'}>
							{item}
						</IonChip>
					))}
				</IonCardSubtitle>
			</IonCardHeader>

			<IonCardContent>{body}</IonCardContent>
		</IonCard>
	)
}

const dataChip = {
	bananas: 'warning',
	apples: 'success',
	oranges: 'secondary'
}

Todo.defaultProps = {}
