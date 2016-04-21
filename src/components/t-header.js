'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class THeader extends React.Component {
    render() {
        return (
            <div className='header'>
                <nav className='navbar navbar-default t-header'>
                    <div className='t-container'>
                        <div className='t-f-1'></div>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><a href='/'>Hola Custom User Loooong Name</a></li>
                        </ul>
                    </div>
                </nav>
                <nav className='t-header__sub t-f'>
                    <div className='t-container t-f-1 t-f t-f-row t-f-col-center'>
                       <Link to={'/'} className='link t-header__sub__item'>Videos</Link>
                       <Link to={'video'} className='link t-header__sub__item'>Add new video</Link>
                    </div>
                </nav>
            </div>
        );
    }
}