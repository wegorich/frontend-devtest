/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallow-render-helper';

window.$ = window.jQuery = require('jquery');

import THeader from '../../src/components/t-header';
import TInput from '../../src/components/t-input';
import TVideoForm from '../../src/components/t-video-form';
// needs to tune phantom to make the bootstrap works
// import TVideoList from '../../src/components/t-video-list';



describe('All-components', () => {
  let components;
  beforeEach(() => {
  	components = [THeader, TInput, TVideoForm].map(e => createComponent(e, {errors: {title: ''}, video: {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''}, videos: [ {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''},  {id: '', title: '', description: '', 'snapshotUrl': '', 'snapshotUrlThumb': ''}]}))
  });

  it('should have its component name as default className', () => {
  	components.forEach(e => {
  		expect(e.props.className).to.be.ok;
  	});
  });
});
