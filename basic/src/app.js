/**
 * Created by mobinni on 06/01/16.
 */
var imgsrc = require('./image.jpg');

var src = document.getElementsByTagName("body")[0];
var img = document.createElement("img");
img.src = imgsrc;
src.appendChild(img);
