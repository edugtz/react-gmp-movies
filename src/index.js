import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Routes from './pages/Routes/Routes'

import './styles/styles.scss'

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
)
