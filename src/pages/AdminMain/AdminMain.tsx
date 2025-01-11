import { Navigate } from 'react-router'
import { useStore } from '../../store/root-store-context'
import './AdminMain.scss'

export function AdminMain() {
    const { authStore: {isAuth} } = useStore()
    console.log(isAuth)
    if (!isAuth) {
       return <Navigate to='/auth' />
    }

    return <div className='app'>
        
    </div>
}
