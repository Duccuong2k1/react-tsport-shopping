import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Input from '../components/Input';
import Button from '../components/Button';

const clientId = "878135738952-an47jlvufbfhf928g3q7k4gc6e9ui3re.apps.googleusercontent.com";
const Login = () => {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [dataLogin,setDataLogin] = useState({ email:'', name:''});
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setDataLogin({email : res.profileObj.email})
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className="login">
            <p>{dataLogin.email}</p>
            <div className="login-left">
                <h3>TSport</h3>
                <p>TSport nền tảng thương mại  điện tử yêu thích nhất đông nam á</p>
            </div>
            <form action="" className="login-form">
                <h3>Đăng nhập TSport</h3>
                <div className="login-form__input">
                    <Input 
                        id="username"
                        label="tên đăng nhập"
                        type="text"
                        placeholder="nhập tên đăng nhập"
                        className="username"
                    />
                </div>
                <div className="login-form__input">
                    <Input 
                        id="email"
                        label="email"
                        type="email"
                        placeholder="nhập email"
                        className="email"
                    />
                </div>
                <div className="login-form__input">
                    <Input 
                        id="phone"
                        label="phone"
                        type="text"
                        placeholder="nhập số điện thoại"
                        className="phoneNumber"
                    />
                </div>
                <div className="login-form__input">
                    <Input 
                        id="password"
                        label="mật khẩu"
                        type="password"
                        placeholder="nhập mật khẩu "
                        className="password"
                    />
                </div>

                <div className="login-form__btn">
                    { showloginButton ?
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign In with google"
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        /> : null}

                    { showlogoutButton ?
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out"
                            onLogoutSuccess={onSignoutSuccess}
                        >
                        </GoogleLogout> : null
                    }
                </div>
                <div className="login-form__submit">
                    <Button size="sm">Sing In</Button>
                </div>
            </form>

        </div>
    );
}

export default Login
