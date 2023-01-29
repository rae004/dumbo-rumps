import React from 'react';
import './App.css';
import 'animate.css/animate.min.css';
import SlideOne from './components/slideOne/SlideOne';
import SlideTwo from './components/slideTwo/SlideTwo';
import SlideThree from './components/slideThree/SlideThree';
import SlideFour from './components/slideFour/SlideFour';
import SlideFive from './components/slideFive/SlideFive';
import SlideSix from './components/slideSix/SlideSix';

function App() {
    return (
        <>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
            <SlideFour />
            <SlideFive />
            <SlideSix />
        </>
    );
}

export default App;
