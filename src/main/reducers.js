import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import EquipamentoReducer from '../equipamentos/equipamentoReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    // dashboard: () => ({summary: {credit: 100, debt: 50}})
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    equipamento: EquipamentoReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer    
})

export default rootReducer