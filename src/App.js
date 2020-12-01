import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ringtone from './assets/audio/ringtone.mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';


import './main.scss';

function App() {



  return (
    <div className="main">
    <div className="ringtone"><AudioPlayer src={ringtone}  autoPlay={true} /></div>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
