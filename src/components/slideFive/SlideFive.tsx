import React from 'react';
import './slideFive.css';
import ScrollAnimation from 'react-animate-on-scroll';
import rump1 from '../../images/reach-rump-240-320.webp';

const SlideFive = () => {
    return (
        <div className={'scroll-container'}>
            <ScrollAnimation
                animateOnce={true}
                animateIn={'animate__backInDown'}
            >
                <div className={'slideFiveText'}>You may even think...</div>
            </ScrollAnimation>

            <ScrollAnimation
                delay={600}
                animateOnce={true}
                animateIn={'animate__flipInY'}
                className={'slideFiveImgContainer'}
            >
                <img src={rump1} alt={'second rump image'} />
                <div className={'slideFiveText'}>
                    You can reach out and touch the RUMPS!
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default SlideFive;
