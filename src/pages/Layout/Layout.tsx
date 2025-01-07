import { useEffect, useState } from 'react'
import './Layout.scss'

export function Layout({ children }: { children: React.ReactNode }) {
	const [isPageAdmin, setIsPageAdmin] = useState(false)

	useEffect(() => {
		const currentRoute = window.location.pathname 
		setIsPageAdmin(currentRoute.includes('/admin')) 
	}, []) 

	const handleRouteChange = () => {
		const currentRoute = window.location.pathname
		setIsPageAdmin(currentRoute.includes('/admin'))
	}
    
	useEffect(() => {
		window.addEventListener('popstate', handleRouteChange)
		return () => window.removeEventListener('popstate', handleRouteChange)
	}, [])

	return (
		<div className={isPageAdmin ? 'admin-layout' : 'user-layout'}>
			<div className='container'>{children}</div>
		</div>
	)
}
