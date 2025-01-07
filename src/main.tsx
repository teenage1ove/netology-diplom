import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserMain } from './pages/UserMain/UserMain.tsx'
import { RootStoreContext } from './store/root-store-context.ts'
import RootStore from './store/root-store.ts'

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserMain />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootStoreContext.Provider value={new RootStore()}>
			<RouterProvider router={router} />
		</RootStoreContext.Provider>
	</React.StrictMode>
)
