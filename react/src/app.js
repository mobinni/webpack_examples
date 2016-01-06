/**
 * Created by mobinni on 06/01/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import imagesrc from './image.jpg';

const SwagPhoto = (props) => (
    <div>
        <img src={imagesrc}/>
    </div>
);

ReactDOM.render(<SwagPhoto />, document.getElementById('root'));