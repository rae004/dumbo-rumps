import React from 'react';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function App() {
    return (
        <div className="App">
            <header className={'scroll-container'}>
                <ScrollAnimation
                    initiallyVisible={true}
                    animatePreScroll={true}
                    className={'animated-text'}
                    animateIn={'animate__wobble'}
                >
                    In the Kruger National Park...
                </ScrollAnimation>
                <ScrollAnimation>{/*<img src={}>*/}</ScrollAnimation>
            </header>

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
