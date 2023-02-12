import React from 'react';
import './slideSix.css';
import ScrollAnimation from 'react-animate-on-scroll';
import rump1 from '../../images/kruger-road-320-320.webp';

const SlideSix = () => {
    return (
        <div className={'scroll-container'}>
            <ScrollAnimation
                animateOnce={true}
                animateIn={'animate__backInDown'}
            >
                <div className={'slideSixText'}>But please don’t...</div>
            </ScrollAnimation>
            <ScrollAnimation
                animateOnce={true}
                animateIn={'animate__backInDown'}
            >
                <div className={'slideSixText'}>
                    These rumps do need help though.
                </div>
            </ScrollAnimation>

            <ScrollAnimation
                delay={600}
                animateOnce={true}
                animateIn={'animate__flipInY'}
                className={'slideSixImgContainer'}
            >
                <img src={rump1} alt={'six image'} />
                <div className={'slideSixText'}>
                    If you can offer,{' '}
                    <a
                        href={
                            'https://www.sanparks.org/fundraising/payment.php?p_frid=57159'
                        }
                    >
                        follow this link and give anything you can.
                    </a>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default SlideSix;
