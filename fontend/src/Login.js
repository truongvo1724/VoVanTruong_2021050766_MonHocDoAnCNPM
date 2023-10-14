import React, { useEffect, useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import Axios from "axios"
import './index.css'

function Login() { 
    const [loginusername, setloginusername]= useState('')
    const [loginpassword, setloginpassword]= useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setloginstatus] = useState('')
    const [statusHolder, setstatusholder] = useState('message')

    const loginUser = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:8080/login', {
            loginUsername: loginusername,
            loginPassword: loginpassword,
        }).then((response)=>{
            console.log()
            if(response.data.message||loginusername==''||loginpassword==''){
                navigateTo('/')
                setloginstatus('Tai khoan hoac mat khau sai')
            }
            else{
                navigateTo('/home')
            }
        })
    }
    useEffect(()=>{
        if(loginStatus !==''){
            setstatusholder('showMessage')
            setTimeout(()=>{
                setstatusholder('message')
            },4000)
        }
    },[loginStatus])
  return (
    <div className="d-flex justify-content-center align-item-center vh-100">
        <div class="home shadow-lg">
        <div className="bg-white p-3 rounded">
        <div className="text-center">
            <span id="title">Đăng nhập</span>
            <span id="x">X</span>
        </div>
        <form action="" class="text-center" id="form">
            <div className="mb-3">
                <label htmlFor="username" id="label">Tên đăng nhập</label>
                <input id="input"type="string" placeholder="truong" className="form-control rounded-0" name="username" onChange={(event)=>{
                    setloginusername(event.target.value)
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" id="label">Mật khẩu</label><span id="forgot"><Link to="/forgot" className="text-decoration-none">Quên mật khẩu?</Link></span>
                <input id="input" type="string" placeholder="truong123" className="form-control rounded-0" name="password" onChange={(event)=>{
                    setloginpassword(event.target.value)
                }}/>
            </div>
            <span className={statusHolder}>{loginStatus}</span>
            <button type='submit' className="btn btn-success" id="send" onClick={loginUser}>Đăng nhập</button>
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
