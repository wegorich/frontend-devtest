'use strict';

import React from 'react';
import {Link} from 'react-router';
import VideoStore from '../stores/video-store';
import TVideoList from '../components/t-video-list';

export default class Videos extends React.Component {

    constructor(props) {
        super(props);
        this.subscr = [];
        this.state = {
            videos: VideoStore.getAllVideos()
        };
    }

    componentWillMount() {
        this.subscr.push(this.onChange.bind(this));
        VideoStore.addChangeListener(this.subscr[0]);
    }

    componentWillUnmount() {
        VideoStore.removeChangeListener(this.subscr[0]);
        this.subscr.length = 0;
    }

    onChange() {
        this.setState({videos: VideoStore.getAllVideos()});
    }

    createVideoRow(video) {
        return (
            <div key={video.id}>
                <span><a href={'/videos/' + video.id}>{video.id}</a></span>
                <span>{video.title}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="videos t-container">
                <div className="t-f t-f-row t-f-col-center m-b-md">
                    <h4 className="t-f-1">Videos</h4>
                    <Link to='video' className='btn btn-default'>Add video</Link>
                </div>
                <TVideoList videos={this.state.videos}/>
            </div>
        );
    }
}