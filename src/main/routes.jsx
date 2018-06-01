import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

// import App from './app'
import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
// import Dashboard from '../dashboard/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'
import Equipamentos from '../equipamentos/equipamento'
import Exemplos     from '../equipamentos/SwitchExample'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={ AuthOrApp }>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
            <Route path='equipamentos' component={Equipamentos} />
            <Route path='exemplos' component={Exemplos} />
        </Route>
        {/* <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} /> */}
        <Redirect from='*' to='/' />
    </Router>
)