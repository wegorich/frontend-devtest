/*eslint-disable strict */
require('styles/app.sass');

import React from 'react';
import THeader from './components/t-header';
import InitializeActions from './actions/initialize-actions';

window.$ = window.jQuery = require('jquery'); // bootsrap require jquery to be globally avail

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        InitializeActions.initApp();
    }

    render() {
        return (
            <div>
                <THeader/>
                <div className='container-fluid'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}