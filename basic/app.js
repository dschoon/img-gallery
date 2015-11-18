import React from 'react';
import ReactDOM from 'react-dom';
import ImgGallery from '../../lib/index';

const App = React.createClass({
  render() {
    const images = [
      { src: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg', href: 'https://google.com' },
      { src: 'http://www.ricoh-imaging.co.jp/english/r_dc/caplio/r7/img/sample_04.jpg' },
      { src: 'http://images.fonearena.com/blog/wp-content/uploads/2013/11/Lenovo-p780-camera-sample-10.jpg' },
      { src: 'http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample1_l.jpg' },
      { src: 'http://images.fonearena.com/blog/wp-content/uploads/2013/11/Lenovo-p780-camera-sample-10.jpg' },
      { src: 'http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample1_l.jpg' },
      { src: 'http://www.forkingandcountry.com/sites/g/files/g2000004371/f/sample_01.jpg' },
      { src: 'http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_24-85mmf_35-45g_ed_vr/img/sample/sample2_l.jpg' },
      { src: 'http://www.cameraegg.org/wp-content/uploads/2013/03/Canon-EOS-100D-Rebel-SL1-Sample-Image.jpg' },
      { src: 'http://www.forkingandcountry.com/sites/g/files/g2000004371/f/sample_01.jpg' },
      { src: 'http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_24-85mmf_35-45g_ed_vr/img/sample/sample2_l.jpg' },
      { src: 'http://www.cameraegg.org/wp-content/uploads/2013/03/Canon-EOS-100D-Rebel-SL1-Sample-Image.jpg' },
      { src: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg' },
      { src: 'http://www.ricoh-imaging.co.jp/english/r_dc/caplio/r7/img/sample_04.jpg' }
    ];
    return (
      <div className="wrapper">
        <h1>React img-gallery</h1>
        <ImgGallery images={images} columns={5} useLightbox />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
