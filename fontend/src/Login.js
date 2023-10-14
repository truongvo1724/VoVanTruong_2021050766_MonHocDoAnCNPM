import React, { useState } from "react"
import {Link} from 'react-router-dom'
import Validation from "./LoginValidation";
import './index.css'

function Login() {
    const [values, setValues] = useState({
        username:'',
        password:''
    })
    const[errors, setErrors] = useState({})
    const handleInput=(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }
    
  return (
    <div className="d-flex justify-content-center align-item-center vh-100">
        <div class="home shadow-lg">
        <div className="bg-white p-3 rounded">
        <div className="text-center">
            <span id="title">Đăng nhập</span>
            <span id="x">X</span>
        </div>
        <form action="" onSubmit={handleSubmit} class="text-center" id="form">
            <div className="mb-3">
                <label htmlFor="username" id="label">Tên đăng nhập</label>
                <input id="input"type="string" placeholder="truong" onChange={handleInput} className="form-control rounded-0" name="username"/>
                {errors.username && <span className="text-danger">{errors.username}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" id="label">Mật khẩu</label><span id="forgot"><Link to="/forgot" className="text-decoration-none">Quên mật khẩu?</Link></span>
                <input id="input" type="string" placeholder="truong123" onChange={handleInput} className="form-control rounded-0" name="password"/>
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type='submit' className="btn btn-success" id="send">Đăng nhập</button>
        </form>
        <p className="text-center" id="text">Hoặc đăng nhập bằng</p>
            <div className="text-center">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <span id="other-way1"><i class="fa fa-brands fa-facebook"></i> Facebook</span>
                <span id="other-way2"><i class="fa fa-brands fa-google"></i> Google</span>
            </div>
            <div className="text-center" id="another">
                <span>Bạn chưa có tài khoản?</span>
                <span><Link to="/signup" className="text-decoration-none"> Đăng ký ngay</Link></span>
            </div>
        </div>
        </div>
    </div>
  );
}
export default Login;
