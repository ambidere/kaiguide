import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initStore from './configureReducer';
import App from '../app/App';

export default class ReallyWasuta extends Component {
    render() {
        return (
            <Provider store={initStore}>
                <App></App>
            </Provider>
        );
    }
}