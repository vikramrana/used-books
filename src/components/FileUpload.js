import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

export default class FileUpload extends Component {

  onDrop = (files) => {
    console.log('Received files:', files);
    console.log(files.map(file => file.preview))
  }

  render() {
    return (
      <div>
        <Dropzone className="FileUpload" onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>

      </div>
    );
  }
}
