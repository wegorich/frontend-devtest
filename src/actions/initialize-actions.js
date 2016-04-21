'use strict';

import Dispatcher from '../dispatcher/app-dispatcher';
import VideoApi from '../api/video-api';
import ActionTypes from '../constants/action-types';

export default {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                videos: VideoApi.getAllVideos()
            }
        });
    }
};
