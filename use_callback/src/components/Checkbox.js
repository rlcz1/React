import React from 'react';

// 부모 컴포넌트가 변경되어도 다시 렌더링되는걸 막기 위해 memo 사용
const Checkbox = React.memo(({ label, on, onChange }) => {
    console.log(label, on);
    return (
        <label>
            {label}
            <input type="checkbox" defaultChecked={on} onChange={onchange}/>
        </label>
    );
});

export default Checkbox;