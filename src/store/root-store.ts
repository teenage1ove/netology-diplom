import authStore from './auth-store'
import dateStore from './date-store'
import filmsStore from './films-store'
import seanceStore from './seance-store'

class RootStore {
    authStore = authStore
    filmsStore = filmsStore
    dateStore = dateStore
    seanceStore = seanceStore
}

export default RootStore