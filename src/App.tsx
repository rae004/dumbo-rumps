import React from 'react';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import rump1 from './rumpHeroSmall.webp';
import { FiArrowDown } from 'react-icons/fi';
function App() {
    return (
        <div className="App">
            <header className={'scroll-container'}>
                <div className={'hero-row'}>
                    <FiArrowDown className={'hero-down-arrows'} />
                    <span>SCROLL DOWN</span>
                    <FiArrowDown className={'hero-down-arrows'} />
                </div>
            </header>
            <div className={'scroll-container'}>
                <ScrollAnimation
                    animateIn={'animate__backInRight'}
                    animateOut={'animate__backOutLeft'}
                >
                    <img src={rump1} />
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn={'animate__backInRight'}
                    animateOut={'animate__backOutLeft'}
                    className={'animated-text'}
                >
                    You encounter a lotta RUMPS!
                </ScrollAnimation>
            </div>
            <div className={'scroll-container'}>
                <ScrollAnimation
                    className={'animated-text'}
                    animateIn="animate__bounceIn"
                >
                    Some Text
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default App;
