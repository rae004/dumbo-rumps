import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface ScrollToTopProps {
    children?: React.ReactNode;
}

const ScrollToTop = (props: ScrollToTopProps) => {
    const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTop;
