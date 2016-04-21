'use strict';

import React from 'react';
import {Router} from 'react-router';
import TVideoForm from '../components/t-video-form';
import VideoActions from '../actions/video-actions';
import VideoStore from '../stores/video-store';
import toastr from 'toastr';

export default class VideoEdit extends React.Component {
    static mixins = [
        Router.Navigation
    ];

    static statics = {
        willTransitionFrom(transition, component) {
            if (component.state.dirty && !confirm('Leave w/o saving ?')) {
                transition.abort();
            }
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            video: {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''},
            errors: {},
            dirty: false
        };
    }

    componentWillMount() {
        var videoId = this.props.params.id;

        if (videoId) {
            this.setState({video: VideoStore.getVideoById(videoId)});
        }
    }

    setVideoState(event) {
        this.setState({dirty: true});

        var field = event.target.name;
        var value = event.target.value;

        this.state.video[field] = value;
        this.setState({video: this.state.video});
    }

    videoFormIsValid() {
        var isValid = true;
        this.state.errors = {};

        if (this.state.video.title.length < 3) {
            this.state.errors.title = 'Should be at least 3.';
            isValid = false;
        }

        if (this.state.video.description.length < 3) {
            this.state.errors.description = 'Should be at least 3.';
            isValid = false;
        }

        this.setState({errors: this.state.errors});
        return isValid;
    }

    saveVideo(event) {
        event.preventDefault();

        if (!this.videoFormIsValid()) {
            return;
        }

        if (this.state.video.id) {
            VideoActions.updateVideo(this.state.video);
        } else {
            VideoActions.createVideo(this.state.video);
        }

        this.setState({dirty: false});
        toastr.success('Video saved.');

        history.back();
    }

    render() {
        return (
            <div className="video-edit t-container t-container--small">
                <TVideoForm
                    video={this.state.video}
                    onChange={this.setVideoState.bind(this)}
                    onSave={this.saveVideo.bind(this)}
                    errors={this.state.errors}/>
            </div>
        );
    }
}