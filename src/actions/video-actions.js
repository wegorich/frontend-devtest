'use strict';

import Dispatcher from '../dispatcher/app-dispatcher';
import VideoApi from '../api/video-api';
import ActionTypes from '../constants/action-types';

export class VideoActions {
    createVideo(video) {
        var newVideo = VideoApi.saveVideo(video);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_VIDEO,
            video: newVideo
        });
    }

    updateVideo(video) {
        var updatedVideo = VideoApi.saveVideo(video);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_VIDEO,
            video: updatedVideo
        });
    }

    deleteVideo(id) {
        VideoApi.deleteVideo(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_VIDEO,
            id: id
        });
    }
}

export default new VideoActions()