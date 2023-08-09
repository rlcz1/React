const Checkbox = ({label = "Label", checked = false, onChange}) => {
    return (
        <label>
            {label}
            <input type="checkbox" checked={checked} onChange={onChange} />
        </label>
    );
}

export default Checkbox;