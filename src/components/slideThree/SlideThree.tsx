import React from 'react';
import './slideThree.css';
import ScrollAnimation from 'react-animate-on-scroll';
import rump1 from '../../images/giraffe-rump-240-320.jpg';

const SlideThree = () => {
    return (
        <div className={'scroll-container'}>
            <ScrollAnimation
                animateOnce={true}
                animateIn={'animate__backInLeft'}
            >
                <div className={'slideTwoText'}>Some rumps...</div>
            </ScrollAnimation>

            <ScrollAnimation
                delay={500}
                animateOnce={true}
                animateIn={'animate__backInLeft'}
                className={'slideThreeImgTextContainer'}
            >
                <img src={rump1} alt={'second rump image'} />
                <div className={'slideTwoText'}>Are spotted!</div>
            </ScrollAnimation>
        </div>
    );
};

export default SlideThree;
