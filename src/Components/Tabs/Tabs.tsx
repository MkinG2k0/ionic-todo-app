import {
	IonBadge,
	IonIcon,
	IonLabel,
	IonTabBar,
	IonTabButton,
	IonTabs
} from '@ionic/react'
import { calendar, informationCircle, map, personCircle } from 'ionicons/icons'
import { FC } from 'react'

interface TabsProps {}

export const Tabs: FC = () => (
	<IonTabs>
		<IonTabBar slot="bottom">
			<IonTabButton tab="schedule">
				<IonIcon icon={calendar} />
				<IonLabel>Schedule</IonLabel>
				<IonBadge>6</IonBadge>
			</IonTabButton>

			<IonTabButton tab="speakers">
				<IonIcon icon={personCircle} />
				<IonLabel>Speakers</IonLabel>
			</IonTabButton>

			<IonTabButton tab="map">
				<IonIcon icon={map} />
				<IonLabel>Map</IonLabel>
			</IonTabButton>

			<IonTabButton tab="about">
				<IonIcon icon={informationCircle} />
				<IonLabel>About</IonLabel>
			</IonTabButton>
		</IonTabBar>
	</IonTabs>
)
