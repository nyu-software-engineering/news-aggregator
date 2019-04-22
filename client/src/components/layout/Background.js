import React from 'react';
import background from '../../img/background.jpg'; // Tell Webpack this JS file uses this image
import Card from '../Card';


console.log(background); // /logo.84287d09.png

var sectionStyle = {
    backgroundImage: `url(${background})`,
    height: '800px',
    width: '100%',
    backgroundSize: 'cover'
}
function Background(){
      return (
        <div>
        <div style={ sectionStyle }>
            <div style={{position: 'absolute', left: '10%', top: '30%'}}>
                <Card />
            </div>
        </div>
        </div>
      );
  }

export default Background;