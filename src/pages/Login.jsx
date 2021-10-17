import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Input from '../components/Input';
import Button from '../components/Button';

const clientId = "878135738952-an47jlvufbfhf928g3q7k4gc6e9ui3re.apps.googleusercontent.com";
const Login = () => {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        // console.log('Login Success:', res.profileObj);
        localStorage.setItem('user', JSON.stringify(res.profileObj.name));
        localStorage.setItem('imageUrl', JSON.stringify(res.profileObj.imageUrl));
        setShowloginButton(false);
        setShowlogoutButton(true);

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        localStorage.removeItem('user');
        localStorage.removeItem('imageUrl');
        setShowloginButton(true);
        setShowlogoutButton(false);
        window.location.replace("/login");

    };

    return (
        <div className="login">
            <div className="login-left">
                <h3>TSport</h3>
                <p>TSport nền tảng thương mại  điện tử yêu thích nhất đông nam á</p>
            </div>
            <div className="login-right">

                <form action="" className="login-form">
                    <h3>Đăng nhập</h3>
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

        </div>
    );
}

export default Login
