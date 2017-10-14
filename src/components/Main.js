import React, { Component } from 'react';
import { render } from 'react-dom';

class Main extends Component {


    uploadWidget() {
        const cloudinary = window.cloudinary;

        cloudinary.openUploadWidget({ cloud_name: 'mmalvar13', upload_preset: 'scrapbook_preset'},
            function(error, result) {
                console.log(result);
            });
    }
    render(){
        return (
            <div className="main">
                <h1>Gallery</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

export default Main;
// render(<Main />, document.getElementById('upload-container'));