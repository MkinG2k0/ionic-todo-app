import { OverlayEventDetail } from '@ionic/core/components'
import {
	IonButton,
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
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
import { observer } from 'mobx-react'
import React, { useRef } from 'react'
import { app } from 'Store/App'
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
			app.toggleCreateModalTodo(false)
		}
	}

	const onSubmit = (e) => {
		e.preventDefault()

		// @ts-ignore
		const data = Object.fromEntries([...new FormData(e.target)]) as ICreateTodo

		todos.create(data)
		app.toggleCreateModalTodo(false)
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
							</IonRow>{' '}
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
