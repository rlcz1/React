import { useEffect, useState } from "react";

const useScroll = () => {
    const [state, setState] = useState({ x:0, y:0}); //좌표 상태를 저장할 state
    const ref = useRef(null) //어떤 element의 좌표를 추적할지
    
    useEffect(() => {
        const element = ref.current; //element를 가져옴
        if (!element) return;
        const handleScroll = () => {
            setState({
                x: ref.current.scrollLeft,
                y: ref.current.scrollTop
            })
        }

        element.addEventListener('scroll', handleScroll); //scroll event listener 등록
        return () => element.removeEventListener('scroll', handleScroll); //componentWillUnmount 시 listener 해제
    }, [ref])

    return [ref, state];
}

export default useScroll;