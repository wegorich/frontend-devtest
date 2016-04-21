'use strict';

import React from 'react';
import TInput from './t-input';
import {Link} from 'react-router';

export default class TVideoForm extends React.Component {
    static propTypes = {
        video: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    };

    render() {
        return (
            <form className='t-video-form animated fadeIn'>
                <h4 className='text-center'>Manage Video</h4>
                <div className='m-b-md'>
                    <TInput
                        name="title"
                        label="Title"
                        placeholder="Title"
                        value={this.props.video.title}
                        onChange={this.props.onChange}
                        error={this.props.errors.title}/>

                    <TInput
                        name="description"
                        label="Description"
                        placeholder="..."
                        value={this.props.video.description}
                        onChange={this.props.onChange}
                        error={this.props.errors.title}/>

                    <TInput
                        name="snapshotUrl"
                        label="Snapshot URL"
                        placeholder="http://[large]"
                        value={this.props.video.snapshotUrl}
                        onChange={this.props.onChange}
                        error={this.props.errors.snapshotUrl}/>

                    <TInput
                        name="snapshotUrlThumb" label="Snapshot URL thumb"
                        placeholder="http://[small]"
                        value={this.props.video.snapshotUrlThumb}
                        onChange={this.props.onChange}
                        error={this.props.errors.snapshotUrlThumb}/>
                </div>

                <div className='text-center m-b-md'>
                    <Link className='btn btn-default' to={'/'}>Cancel</Link><input type='submit' value='Save form' className='btn m-l-md btn-primary' onClick={this.props.onSave}/>
                </div>
            </form>
        );
    }
}