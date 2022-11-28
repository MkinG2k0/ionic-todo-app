import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'Routes/App'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)

serviceWorkerRegistration.unregister()
