import authStore from './auth-store'
import dateStore from './date-store'
import filmsStore from './films-store'

class RootStore {
    authStore = authStore
    filmsStore = filmsStore
    dateStore = dateStore
}

export default RootStore