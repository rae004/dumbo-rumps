import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import rump1 from '../../images/rumpHeroSmall.webp';
import './slideTwo.css';

const SlideTwo = () => {
    return (
        <div className={'scroll-container'}>
            <ScrollAnimation
                animateOnce={true}
                animateIn={'animate__backInRight'}
            >
                <div className={'slideTwoText'}>
                    In the Kruger National Park...
                </div>
            </ScrollAnimation>

            <ScrollAnimation
                delay={1000}
                animateOnce={true}
                animateIn={'animate__backInRight'}
                className={'slideTwoImgTextContainer'}
            >
                <img src={rump1} alt={'first rump image'} />
                <div className={'slideTwoText'}>
                    You encounter a lotta RUMPS!
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default SlideTwo;
