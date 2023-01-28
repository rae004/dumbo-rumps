import React from 'react';
import './App.css';
import 'animate.css/animate.min.css';
import SlideOne from './components/slideOne/SlideOne';
import SlideTwo from './components/slideTwo/SlideTwo';
import SlideThree from './components/slideThree/SlideThree';
import SlideFour from './components/SlideFour';
import SlideFive from './components/SlideFive';

function App() {
    return (
        <>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
            <SlideFour />
            <SlideFive />
        </>
    );
}

export default App;
