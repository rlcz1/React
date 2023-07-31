import propTypes from 'prop-types';

function Paragraph({ children, size=16, color}) {
    return(
        <p style={{fontSize:size, color}}>{children}</p>
    );
}

Paragraph.propTypes = {
    children: propTypes.node,
    size: propTypes.number
}

export default Paragraph;