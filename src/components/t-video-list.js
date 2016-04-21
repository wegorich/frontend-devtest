'use strict';

import React from 'react';
import {Link} from 'react-router';
import VideoActions from '../actions/video-actions';
import toastr from 'toastr';
import 'bootstrap';
import $ from 'jquery';

export default class TVideoList extends React.Component {
    static propTypes = {
        videos: React.PropTypes.array.isRequired
    };

    componentDidMount() {
        $('[data-toggle="popover"]').popover({
            html: true
        });
    }

    createVideoRow(video, index) {
        return (
            <div key={video.id} className={`t-video-item t-f t-f-row t-f-col-center m-b-md ${index == 0 ? 'animated fadeInUp':''}`} >
                <span>
                    <div className='t-video-item__img' style={{backgroundImage: `url(${video.snapshotUrlThumb})`}} data-toggle="popover"
                         data-content={'<img src=' + video.snapshotUrl + ' >'}/>
                </span>
                <div className='t-f-1'>
                    <h3 className='m-t-0 nowrap'><Link to={`/video/${video.id}/show`}>{video.title}</Link></h3>
                    <span className='text'>{video.description}</span>
                </div>
                <span className='t-f t-f-col'><Link className='btn btn-sm btn-info t-f-1 m-b-sm' to={`/video/${video.id}`}>Edit</Link><a className='btn btn-sm btn-danger t-f-1' href="#" onClick={this.deleteVideo.bind(this, video.id)}>Delete</a></span>
            </div>
        );
    }

    deleteVideo(id, event) {
        event.preventDefault();
        VideoActions.deleteVideo(id);
        toastr.success('Video deleted');
    }

    render() {
        var parent = this;

        return (
            <div className='t-video-list'>
                {this.props.videos.length ? this.props.videos.map(parent.createVideoRow, this) : (<div className="text text-center">Nothing found...</div>)}
            </div>
        );
    }
}
