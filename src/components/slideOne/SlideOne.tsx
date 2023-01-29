import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import './slideOne.css';

const SlideOne = () => {
    return (
        <div className={'scroll-container'}>
            <div className={'hero-row'}>
                <FiArrowDown className={'hero-down-arrows swing-image'} />
                <span
                    className={
                        'animate__animated animate__swing animate__faster animate__repeat-2'
                    }
                >
                    SCROLL DOWN
                </span>
                <FiArrowDown className={'hero-down-arrows swing-image'} />
            </div>
        </div>
    );
};

export default SlideOne;
