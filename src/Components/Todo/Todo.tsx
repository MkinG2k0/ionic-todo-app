import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonChip
} from '@ionic/react'
import { SwiperMap } from 'Components/SwiperMap/SwiperMap'
import React, { FC, useEffect, useState } from 'react'
import { IPhoto } from 'Store/Photos'
import { ITodo } from 'Store/Todo'

import style from './Todo.module.scss'

export const Todo: FC<ITodo> = ({
	title,
	body,
	images,
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
				<div className={style.wrapSwiper}>
					<SwiperMap data={images} Component={Photo} />
				</div>
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

const Photo: FC<IPhoto> = ({ webPath }) => {
	return <img alt={'img'} src={webPath} className={style.wrapImg} />
}

const dataChip = {
	bananas: 'warning',
	apples: 'success',
	oranges: 'secondary'
}

Todo.defaultProps = {}
