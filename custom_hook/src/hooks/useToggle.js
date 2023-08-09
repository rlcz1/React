import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []); //상태를 반대로
    // const toggle = () => setState(state => !state); //상태를 반대로
    return [state, toggle];
}

export default useToggle;