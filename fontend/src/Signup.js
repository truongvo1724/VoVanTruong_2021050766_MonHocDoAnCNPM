import React, { useState } from "react"
import {Link} from 'react-router-dom'
import Validation from "./SignupValidation"
import Axios from "axios"
import './index.css'

function Signup() {

    const [fullname,setfullname]= useState('')
    const [username,setusername]= useState('')
    const [password,setpassword]= useState('')
    const [repassword,setrepassword]= useState('')
    const [email,setemail]= useState('')

    const createUser =() =>{
        Axios.post('http://localhost:8080/signup', {
            Fullname: fullname,
            Username: username,
            Password: password,
            RePassword: repassword,
            Email: email,
        }).then(()=>{
            console.log("tạo tài khoản thành công")
        })
    }
  return (
    <div className="d-flex justify-content-center align-item-center">
        <div class="home1 shadow-lg">
        <div className="bg-white p-3 rounded">
        <div>
            <p className="text-center" id="title1">Đăng ký tài khoản mới miễn phí</p>
        </div>
        <form action="" id="form" class="text-center">
            <div className="mb-3">
                <label htmlFor="fullname" id="label">Họ và tên</label>
                <input id="input" type="string" placeholder="truong" className="form-control rounded-0" name="fullname" onChange={(event)=>{
                    setfullname(event.target.value)
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" id="label">Tên đăng nhập</label>
                <input id="input" type="string" placeholder="truong" className="form-control rounded-0" name="username" onChange={(event)=>{
                    setusername(event.target.value)
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" id="label">Mật khẩu</label>
                <input id="input" type="password" placeholder="******" className="form-control rounded-0" name="password" onChange={(event)=>{
                    setpassword(event.target.value)
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="repassword" id="label">Nhập lại mật khẩu</label>
                <input id="input" type="password" placeholder="******" className="form-control rounded-0" name="repassword" onChange={(event)=>{
                    setrepassword(event.target.value)
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" id="label">Email</label>
                <input id="input" type="email" placeholder="example@gmail.com" className="form-control rounded-0" name="email" onChange={(event)=>{
                    setemail(event.target.value)
                }}/>
            </div>
            <div class="checkbox-container" id="label">
                <input type="checkbox" id="agreeCheckbox" />
                <label for="agreeCheckbox" class="checkbox-label"><span>Tôi đồng ý với các<span><Link to="/" className="text-decoration-none"> điều kiện và điều khoản</Link></span></span></label>
             </div>
            <button type='submit' className="btn btn-success w-50" id="send" onClick={createUser}>Đăng ký</button>
        </form>
        <p className="text-center" id="text">Hoặc</p>
        <div className="text-center">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <span id="other-way1"><i class="fa fa-brands fa-facebook"></i> Facebook</span>
                <span id="other-way2"><i class="fa fa-brands fa-google"></i> Google</span>
                <span id="other-way3"><i class="fa fa-apple"></i> Icloud</span>
            </div>
            <div className="text-center" id="another">
                <span>Bạn đã có tài khoản rồi?</span>
                <span><Link to="/" className="text-decoration-none"> Đăng nhập</Link></span>
            </div>
        </div>
        </div>
    </div>
  );
}
export default Signup;
