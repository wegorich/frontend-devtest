import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'


import App from './app';
import Videos from './vm/videos';
import VideoEdit from './vm/video-edit';
import Video from './vm/video';

ReactDOM.render(<Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Videos}/>
            <Route path='video' component={VideoEdit}/>
            <Route path='video/:id' component={VideoEdit}/>
            <Route path='video/:id/show' component={Video}/>
        </Route>
    </Router>,
    document.getElementById('app'));