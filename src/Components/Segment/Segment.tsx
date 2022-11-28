import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/react'
import {
	barbell,
	basket,
	call,
	globe,
	heart,
	home,
	person,
	pin,
	star,
	trash
} from 'ionicons/icons'
import { FC } from 'react'

interface SegmentProps {}

export const Segment: FC<SegmentProps> = ({}) => {
	return (
		<IonSegment value="default" scrollable={true}>
			<IonSegmentButton value="home">
				<IonIcon icon={home}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="heart">
				<IonIcon icon={heart}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="pin">
				<IonIcon icon={pin}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="star">
				<IonIcon icon={star}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="call">
				<IonIcon icon={call}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="globe">
				<IonIcon icon={globe}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="basket">
				<IonIcon icon={basket}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="barbell">
				<IonIcon icon={barbell}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="trash">
				<IonIcon icon={trash}></IonIcon>
			</IonSegmentButton>
			<IonSegmentButton value="person">
				<IonIcon icon={person}></IonIcon>
			</IonSegmentButton>
		</IonSegment>
	)
}
