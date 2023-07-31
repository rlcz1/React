import logo from './logo.svg';

function Logo(props) {
    return (
        <img 
            src={logo} 
            className="App-logo" 
            alt="logo" 
            style={{width: props.size, height: props.size}}
        />
    );
}

Logo.defaultProps = {
    size: 100
}
export default Logo;