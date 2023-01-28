import React from 'react';
import './slideFour.css';
import ScrollAnimation from 'react-animate-on-scroll';
import rump1 from '../../images/zebra-rump-240-320.webp';

const SlideFour = () => {
    return (
        <div className={'scroll-container'}>
            <ScrollAnimation
                animateOnce={true}
                animateIn={'animate__backInDown'}
            >
                <div className={'slideTwoText'}>Some are even...</div>
            </ScrollAnimation>

            <ScrollAnimation
                delay={600}
                animateOnce={true}
                animateIn={'animate__backInUp'}
                className={'slideThreeImgTextContainer'}
            >
                <img src={rump1} alt={'second rump image'} />
                <div className={'slideTwoText'}>STRIPED RUMPS!!!</div>
            </ScrollAnimation>
        </div>
    );
};

export default SlideFour;
