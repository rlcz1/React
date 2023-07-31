import {useCallback, useState} from "react";
import './Register.css';

const Register = () => {

    const [form, setForm] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        repassword: '',
        select: '',
        checkbox: false,
        radio: ''
    });

    const [validText, setValidText] = useState('');

    const [error, setError] = useState({
        name: true,
        mobile: true,
        email: true,
        password: true,
        repassword: true,
        select: true,
        checkbox: true
    });

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let regName = /[^ㄱ-ㅎ가-힣]/g;
        let regMobile = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        let regEmail = '';
        let regPassword = '';
        let regRepassword = '';
        let regSelect = '';
        let regCheckbox = '';
        let regRadio = '';

        console.log(e.target.name);

        let target = e.target.name;

        switch (target) {
            case 'name':
                if (regName.test(e.target.value)) {
                    setValidText('한글만 입력 가능합니다.');
                    setError({...error, name: false });
                } else {
                    setValidText('');
                    setError({...error, name: true });
                }
                break;
            case 'mobile':
                if (!regMobile.test(e.target.value)) {
                    setValidText('올바른 휴대폰 번호가 아닙니다.');
                    setError({...error, mobile: false });
                } else {
                    setValidText('');
                    setError({...error, mobile: true });
                }
        }

        console.log(error.name, error.mobile);

    }, [error, validText, form]);

    // const onChangeName = (e: { target: { value: any; }; }) => {
    //     let regex = /[^ㄱ-ㅎ가-힣]/g;
    //     if (regex.test(e.target.value)) {
    //             setValidText('한글만 입력 가능합니다.');
    //             setError({  ...error, name: false });
    //         return;
    //     } else {
    //         setValidText('');
    //         setError({  ...error, name: true });
    //     }
    // }

    // const onChangeMobile = (e: { target: { value: any; }; }) => {
    //     let regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    //     if (!regex.test(e.target.value)) {
    //             setValidText('올바른 휴대폰 번호가 아닙니다.');
    //             setError({  ...error, name: false });
    //         return;
    //     } else {
    //         setValidText('');
    //         setError({  ...error, name: true });
    //     }
    // }


    // const handleFormChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    return (
        <form action="" method="post" className="register-form">
            <div className="register-item">
                <label htmlFor="register-name-input">Name</label>
                <input type="text" id="register-name-input" name="name"
                onChange={onChangeHandler}/>
                <span>{!error.name && validText}</span>
            </div>
            <div className="register-item">
                <label htmlFor="register-mobile-input">Mobile</label>
                <input type="text" id="register-mobile-input" name="mobile" 
                onChange={onChangeHandler}/>
                <span>{!error.mobile && validText}</span>
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