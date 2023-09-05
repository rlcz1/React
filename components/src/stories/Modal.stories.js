import Modal from "../components/Modal";
import { useState } from "react";

export default {
    title: 'Modal',
    component: Modal
}

export const Default = () => {
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setVisible(true)}>Show Modal</button>
            <Modal visible={visible} >
                Hi
            <button onClick={() => setVisible(false)} >close</button>
            </Modal>
        </div>
    )
}