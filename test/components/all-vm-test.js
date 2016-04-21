/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallow-render-helper';

import Video from '../../src/vm/video';
// needs to tune the phantomjs to make the bootstrap works
// import Videos from '../../src/vm/videos';
import VideoEdit from '../../src/vm/video-edit';


describe('All-VM', () => {
  let vm;
  beforeEach(() => {
  	vm = [Video, VideoEdit].map(e => createComponent(e, {params: {id: ''}, errors: {title: ''}, video: {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''}, videos: [ {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''},  {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''}]}))
  });

  it('should have its component name as default className', () => {
  	vm.forEach(e => {
  		expect(e.props.className).to.be.ok;
  	});
  });
});
