import { GalleryPhoto } from '@capacitor/camera'
import { OverlayEventDetail } from '@ionic/core/components'
import {
	IonButton,
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonModal,
	IonRow,
	IonSelect,
	IonSelectOption,
	IonTextarea,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { SwiperMap } from 'Components/SwiperMap/SwiperMap'
import { takePictures } from 'Helper/Camera'
import { addOutline, apertureOutline } from 'ionicons/icons'
import { observer } from 'mobx-react'
import React, { FC, useEffect, useRef, useState } from 'react'
import { app } from 'Store/App'
import { IPhoto, photo, Photos } from 'Store/Photos'
import { ICreateTodo } from 'Store/Todo'
import { todos } from 'Store/Todos'

import style from './CreateTodoModal.module.scss'

export const CreateTodoModal = observer(() => {
	const modal = useRef<HTMLIonModalElement>(null)
	const input = useRef<HTMLIonInputElement>(null)

	function confirm() {
		modal.current?.dismiss(input.current?.value, 'confirm')
	}

	function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
		if (ev.detail.role === 'confirm') {
			// app.toggleCreateModalTodo(false)
		}
		app.toggleCreateModalTodo(false)
		photo.clear()
	}

	const onSubmit = (e) => {
		e.preventDefault()

		// @ts-ignore
		const data = Object.fromEntries([...new FormData(e.target)]) as ICreateTodo
		data.images = photo.data
		todos.create(data)
		app.toggleCreateModalTodo(false)
		photo.clear()
	}

	return (
		<>
			<IonModal
				ref={modal}
				trigger="open-modal"
				isOpen={app.createTodoModal}
				onWillDismiss={(ev) => onWillDismiss(ev)}
			>
				<form onSubmit={onSubmit} className={style.wrap}>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start">
								<IonButton onClick={() => modal.current?.dismiss()}>
									Cancel
								</IonButton>
							</IonButtons>
							<IonTitle>Create Todo</IonTitle>
							<IonButtons slot="end">
								<IonButton strong={true} type={'submit'}>
									Confirm
								</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent>
						<IonGrid>
							<IonRow>
								<IonCol>
									<PhotoSlider />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<IonItem>
										<IonLabel position="stacked">Enter your title</IonLabel>
										<IonInput
											type="text"
											ref={input}
											name={'title'}
											placeholder="Your title"
										/>
									</IonItem>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<IonItem>
										<IonLabel position="stacked">Enter your body</IonLabel>
										<IonTextarea
											name={'body'}
											placeholder="Type something here"
											autoGrow={true}
										/>
									</IonItem>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<IonItem>
										<IonSelect
											placeholder="Keywords Todo"
											multiple={true}
											name={'subTitle'}
										>
											<IonSelectOption value="apples">Apples</IonSelectOption>
											<IonSelectOption value="oranges">Oranges</IonSelectOption>
											<IonSelectOption value="bananas">Bananas</IonSelectOption>
										</IonSelect>
									</IonItem>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<IonItem>
										<IonSelect
											placeholder="Type Todo"
											interface="action-sheet"
											name={'type'}
										>
											<IonSelectOption value="apples">Apples</IonSelectOption>
											<IonSelectOption value="oranges">Oranges</IonSelectOption>
											<IonSelectOption value="bananas">Bananas</IonSelectOption>
										</IonSelect>
									</IonItem>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonContent>
				</form>
			</IonModal>
		</>
	)
})

const PhotoSlider = observer(({}) => {
	return (
		<div className={style.wrapSwiper}>
			<SwiperMap data={[...photo.data, {}]} Component={Photo} />
		</div>
	)
})

const Photo: FC<IPhoto> = ({ webPath }) => {
	if (webPath) {
		return <img alt={'img'} src={webPath} className={style.wrapImg} />
	}

	return <AddPhoto />
}

const AddPhoto = ({}) => {
	const onClick = () => {
		takePictures().then((data) => {
			photo.add(data)
		})
	}

	return (
		<div className={style.wrapAddImg} onClick={onClick}>
			<div className={style.center}>
				<div className={style.col}>
					<IonIcon icon={addOutline} className={style.icon}></IonIcon>
					<div>Add photo</div>
				</div>
			</div>
		</div>
	)
}
