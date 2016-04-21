'use strict';

import Dispatcher from '../dispatcher/app-dispatcher';
import ActionTypes from '../constants/action-types';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';
let _videos = [];

// VideoStore is only PUBLIC API
let VideoStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllVideos: function () {
        return _videos;
    },

    getVideoById: function (id) {
        return _videos.find(e => e.id === id);
    }
});
// END of PUBLIC API


Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _videos = action.initialData.videos;
            VideoStore.emitChange();
            break;
        case ActionTypes.CREATE_VIDEO:
            _videos.unshift((action.video));
            VideoStore.emitChange();
            break;
        case ActionTypes.UPDATE_VIDEO:
            var existingVideo = _videos.find( e => e.id === action.video.id);
            var existingVideoIdx = _videos.indexOf(existingVideo);
            _videos.splice(existingVideoIdx, 1, action.video);
            VideoStore.emitChange();
            break;
        case ActionTypes.DELETE_VIDEO:
            var existingVideo = _videos.find( e => e.id === action.id);
            var existingVideoIdx = _videos.indexOf(existingVideo);
            _videos.splice(existingVideoIdx, 1);

            VideoStore.emitChange();
            break;
        default:
        // no op
    }
});

export default VideoStore;