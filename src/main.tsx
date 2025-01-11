import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { AdminMain } from './pages/AdminMain/AdminMain.tsx'
import { Layout } from './pages/Layout/Layout.tsx'
import { UserMain } from './pages/UserMain/UserMain.tsx'
import { RootStoreContext } from './store/root-store-context.ts'
import RootStore from './store/root-store.ts'
import { Auth } from './pages/Auth/Auth.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserMain />,
	},
	{
		path: '/admin',
		element: <AdminMain />,
	},
	{
		path: '/auth',
		element: <Auth />
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootStoreContext.Provider value={new RootStore()}>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</RootStoreContext.Provider>
	</React.StrictMode>
)
