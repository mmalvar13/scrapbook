import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import './../App.css';
import Slider from './Slider';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        // Request for images tagged xmas
        axios.get('http://res.cloudinary.com/mmalvar13/image/list/xmas.json')
            .then(res => {
                // console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }


    uploadWidget() {
        const cloudinary = window.cloudinary;

        cloudinary.openUploadWidget({cloud_name: 'mmalvar13', upload_preset: 'scrapbook_preset', tags: ['xmas']},
            function (error, result) {
                // console.log(result);
            });
    }


    render() {

        const buttonStyles = {
            height: '200px',
            width: '400px',
            fontSize: '30px',
            fontFamily: 'Oswald',
            backgroundColor: '#D25C63',
            border: '3px solid #D25C63'
        };


        return (
            <div className="main">
                <h1 className="App-title">The Scrapbook</h1>
                <div className="explanation well">
                    <p>Remember that time when I really wanted to make a scrapbook and everyone said that I was just
                        collecting trash and that I would never do it?</p>
                    <div className="uhem">WELL</div>
                    <p>Welcome to my scrapbook.</p>
                    <p>So glad you could join me</p>
                    <h3>I'm going to make a SICK scrapbook, but I need your help!</h3>
                    <h4>I need you all to upload your best photos from this year!</h4>
                </div>
                <div className="how-upload">
                    <div className="how-to well">
                        <h2>What Kind of Photos Should You Upload?</h2>
                        <p>Upload your best photos from the year! I'm sure you all have some good stuff that has never been posted to Facebook or Instagram. They deserve a chance to shine.</p>
                        <h3>Examples of photos to upload:</h3>
                        <ul>
                            <li>Trips you took. Lorenzo went to Nebraska for Dental Prom! Me, Sarina, and Mom went to Chicago! Carlos and Amanda went to the hospital and brought back a sweet souvenier!</li>
                            <li>Really great selfies that you think the world (or at least we) should see.</li>
                            <li>Birthday celebrations, holidays, random hikes, the zoo?</li>
                            <li>Literally anything, if you didn't get the hint, I'm making a photo album. Like a real one.</li>
                            <li>OH, and of course, any great pictures of Xander! To be honest, I'm pretty much trying to make XanderBook.com</li>
                        </ul>
                        <h2>How To Upload Photos</h2>
                        <ol>
                            <li>Click the big button that says "Add Photos"</li>
                            <li>A file uploader will appear. Click "Select Files"</li>
                            <li>Choose the pictures you would like to upload from your phone or computer. You can upload multiple photos at the same time. </li>
                        </ol>
                        <p>The photos will automatically upload to a folder I have with a service called Cloudinary. You will not be able to see the photos after they are uploaded, and you will not be able to delete any photos that you didn't mean to send.</p>
                        <strong style={{fontSize: "1.5rem", textAlign: 'center'}}><em>Don't accidentally send me anything weird or scarring, I don't need that in my life</em></strong>
                    </div>

                    <div className="upload">
                        <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                            Add Photos
                        </button>
                    </div>
                </div>


                {/*<h1>Gallery</h1>*/}

                {/*<CloudinaryContext cloudName="mmalvar13">*/}
                {/*{*/}

                {/*this.state.gallery.map(data => {*/}
                {/*return (*/}
                {/*<div className="responsive" key={data.public_id}>*/}
                {/*<div className="img">*/}
                {/*<a target="_blank"*/}
                {/*href={`http://res.cloudinary.com/mmalvar13/image/upload/${data.public_id}.jpg`}>*/}
                {/*<Image publicId={data.public_id}>*/}
                {/*<Transformation*/}
                {/*crop="scale"*/}
                {/*width="300"*/}
                {/*height="200"*/}
                {/*dpr="auto"*/}
                {/*responsive_placeholder="blank"*/}
                {/*/>*/}
                {/*</Image>*/}
                {/*</a>*/}
                {/*<div className="desc">Created at {data.created_at}</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*)*/}
                {/*})*/}
                {/*}*/}

                {/*</CloudinaryContext>*/}
            </div>

        );
    }

    //
    // render() {
    //     return (
    //         <div className="main">
    //             <h1>Galleria</h1>
    //             <div className="upload">
    //                 <button onClick={this.uploadWidget.bind(this)} className="upload-button">
    //                     Add Image
    //                 </button>
    //             </div>
    //             <div className="gallery">
    //                 <CloudinaryContext cloudName="mmalvar13">
    //                     {
    //                         this.state.gallery.map(data => {
    //                             return (
    //                                 <div className="responsive" key={data.public_id}>
    //                                     <div className="img">
    //                                         <a target="_blank"
    //                                            href={`https://res.cloudinary.com/mmalvar13/image/upload/${data.public_id}.jpg`}>
    //                                             <Image publicId={data.public_id}>
    //                                                 <Transformation
    //                                                     crop="scale"
    //                                                     width="300"
    //                                                     height="200"
    //                                                     dpr="auto"
    //                                                     responsive_placeholder="blank"
    //                                                 />
    //                                             </Image>
    //                                         </a>
    //                                         <div className="desc">Created at {data.created_at}</div>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                 </CloudinaryContext>
    //                 <div className="clearfix"></div>
    //             </div>
    //         </div>
    //
    //     );
    // }


}

export default Main;
// render(<Main />, document.getElementById('upload-container'));