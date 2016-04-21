'use strict';

import React from 'react';
import {Router, Link} from 'react-router';
import VideoStore from '../stores/video-store';

export default class Video extends React.Component {
    static mixins = [
        Router.Navigation
    ];

    constructor(props) {
        super(props);

        this.state = {
            video: {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''}
        };
    }

    componentWillMount() {
        var videoId = this.props.params.id;

        if (videoId) {
            this.setState({video: VideoStore.getVideoById(videoId)});
        }
    }

    render() {
        return (
            <div className="video t-container animated fadeIn">
            	<div className='video__content'>
	                <h1>{this.state.video.title}</h1>
	                <p className='text'>{this.state.video.description}</p>
                </div>

                <div className='t-video-item__img' style={{backgroundImage: `url(${this.state.video.snapshotUrlThumb})`}} />
                <div className="video__footer video__content">
                	<Link className='btn btn-sm btn-info t-f-1 m-b-sm' to={`/video/${this.state.video.id}`}>Edit</Link>
                </div>
            </div>
        );
    }
}