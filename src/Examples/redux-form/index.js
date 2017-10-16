import React, {Component} from 'react'
import {createStore, combineReducers} from 'redux'
import {Provider} from "react-redux";
import {reducer as formReducer, Field, reduxForm} from 'redux-form'

//the 'form' name is must in combineReducers
let reducers = combineReducers({form: formReducer});

let store = createStore(reducers);

let ContactForm = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

ContactForm = reduxForm({form: 'contact'})(ContactForm);
// alternative way let contactReduxForm = reduxForm({form:'contact'});
// ContactForm = contactReduxForm(ContactForm);

//
class SimpleReduxForm extends Component {
    handleSubmit = (values) => {
        console.log(values);
    }
    render() {
        return (<ContactForm onSubmit={this.handleSubmit}/>)
    }
}

class SimpleReduxFormPage extends Component {
    handleSubmit = (values) => {
        console.log(values);
    }
    render() {
        return (
            <Provider store={store}>
                <SimpleReduxForm/>
            </Provider>
        )
    }
}

export default SimpleReduxFormPage;