'use strict';

import videos from '../sources/video-source';

var _generateId = function (video) {
    return video.title.toLowerCase();
};

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item));
};

var VideoApi = {
    getAllVideos() {
        return _clone(videos);
    },

    getVideoById(id) {
        var video = videos.find( e=> e.id === id);
        return _clone(video);
    },

    saveVideo(video) {
        if (video.id) {
            var existingVideoIndex = videos.indexOf(videos.find(e => e.id === video.id));
            videos.splice(existingVideoIndex, 1, video);
        } else {
            video.id = _generateId(video);
            videos.push(video);
        }

        return _clone(video);
    },

    deleteVideo(id) {
        var existingVideoIndex = videos.indexOf(videos.find(e => e.id === id));
        videos.splice(existingVideoIndex, 1);
    }
};

export default VideoApi;