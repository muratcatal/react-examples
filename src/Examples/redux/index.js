import React, {Component} from 'react'
import {createStore} from 'redux'
import { Provider } from "react-redux";
import reducers from './reducers/index'
import testComponent from './containers/testContainer'

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Redux extends Component{
    render(){
        return (
        <Provider store={store}>
            <testComponent />
        </Provider>
        )
    }
}

export default Redux;

