import React from 'react';
import './App.css';
import 'animate.css/animate.min.css';
import SlideOne from './components/slideOne/SlideOne';
import SlideTwo from './components/slideTwo/SlideTwo';
import SlideThree from './components/slideThree/SlideThree';
import SlideFour from './components/slideFour/SlideFour';
import SlideFive from './components/slideFive/SlideFive';
import SlideSix from './components/slideSix/SlideSix';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className={'container'}>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
                <SlideFour />
                <SlideFive />
                <SlideSix />
            </div>
        </BrowserRouter>
    );
}

export default App;
