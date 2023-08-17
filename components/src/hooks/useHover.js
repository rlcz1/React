import { useState, useEffect, useRef, useCallback } from 'react';

const useHover = () => {
    const [state, setState] = useState(false); //true or false if hovering
    const ref = useRef(null); //element

    const handleMouseOver = useCallback(() => setState(true), []); //memorization
    const handleMouseOut = useCallback(() => setState(false), []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mousedown', handleMouseOut);
        }
    }, [ref, handleMouseOver, handleMouseOut]);

    return [ref, state];
}

export default useHover;