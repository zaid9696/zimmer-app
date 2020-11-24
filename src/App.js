import {Switch, Route} from 'react-router-dom';

// import demoAudio from './assets/audio/Interstellar.mp3';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

import Nav from './components/nav/nav';
import Home from './pages/home/home';
import About from './pages/about/about';


import './main.scss';

function App() {

  return (
    <div className="main">
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>

    </div>
  );
}

export default App;
