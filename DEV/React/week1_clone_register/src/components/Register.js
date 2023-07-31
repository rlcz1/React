import './Register.css';

const Register = () => {
    return (
        <form action="" method="post" className="register-form">
            <div className="register-item">
                <label htmlFor="register-name-input">Name</label>
                <input type="text" id="register-name-input" name="name" />
            </div>
            <div className="register-item">
                <label htmlFor="register-mobile-input">Mobile</label>
                <input type="text" id="register-mobile-input" name="mobile" />
            </div>
            <div className="register-item">
                <label htmlFor="register-email-input">Email</label>
                <input type="text" id="register-email-input" name="email" />
            </div>
            <div className="register-item">
                <label htmlFor="register-password-input">Password</label>
                <input type="password" id="register-password-input" name="password" />
            </div>
            <div className="register-item">
                <label htmlFor="register-repassword-input">Re-enter Password</label>
                <input type="password" id="register-repassword-input" name="repassword" />
            </div>
            <div className="register-item">
                <label htmlFor="register-select-input">Group Select Fields</label>
                <select name="select" id="register-select-input">
                    <option value="">Option1</option>
                    <option value="">Option2</option>
                    <option value="">Option3</option>
                    <option value="">Option4</option>
                </select>
            </div>
            <div className="register-item">
                <input type="checkbox" name="checkbox" id="register-checkbox" />
                <label htmlFor="register-checkbox">Checkbox</label>
            </div>
            <div className="register-item" id='register-radio-btns'>
                <div className="radio-box">
                    <input type="radio" name="radio" id="register-radio1" />
                    <label htmlFor="register-radio1">Option 1</label>
                </div>
                <div className="radio-box">
                    <input type="radio" name="radio" id="register-radio2" />
                    <label htmlFor="register-radio1">Option 2</label>
                </div>
                <div className="radio-box">
                    <input type="radio" name="radio" id="register-radio3" />
                    <label htmlFor="register-radio1">Option 3</label>
                </div>
            </div>
            <div className="register-item">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Register;