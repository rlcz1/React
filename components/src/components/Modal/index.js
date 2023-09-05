import styled from "@emotion/styled";
import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    box-sizing: border-box;
`;

const Modal = ({ 
        children,
        width = 500, 
        height, 
        visible = false, 
        onClose, 
        ...props 
    }) => {
    // const ref = useClickAway(() => {
    //     onClose && onClose();
    // });

    const containerStyle = useMemo(() => ({
        width,
        height
    }) [width, height])

    const el = useMemo(() => document.createElement("div"), []);
    useEffect(() => {
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
        }
    });



    return ReactDOM.createPortal(
        <Background style={{display: visible ? "block" : "none"}}>
            <ModalContainer style={{...props.style, ...containerStyle}}>
                {children}
            </ModalContainer>
        </Background>,
        el
    )
}

export default Modal;