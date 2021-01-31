import _ from 'lodash';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VideoSelectScreen extends Component {
    state = {
        hovering: false
    }

    onDrop = (files) => {
        const videos = _.map(files, ({ name, path, size, type }) => {
            return { name, path, size, type };
        });

        if (videos.length) {
            this.props.addVideos(videos);
            if (!this.props.small) {
                this.props.history.push('/convert');
            }
        }
    }

    renderChildren({ isDragActive, isDragReject }) {
        if (isDragActive) {
            return <h4 className="drop-message">Video File Format Accepted</h4>;
        } else if (isDragReject) {
            return <h4 className="drop-message">Video File Format Not Accepted</h4>;
        } else {
            return <h4 className="drop-message">Drag and Drop Some Video Files, or Click to Select.</h4>
        }
    }

    render() {
        return (
            <div className={this.props.small ? "video-select-screen-small" : "video-select-screen"}>
                <Dropzone
                    onDrop={this.onDrop}
                    multiple
                    accept="video/*"
                    className="dropzone"
                    activeClassName="dropzone-active"
                    rejectClassName="dropzone-reject"
                >
                    {this.renderChildren}
                </Dropzone>
            </div>
        );
    }
}

export default connect(null, actions)(VideoSelectScreen);
