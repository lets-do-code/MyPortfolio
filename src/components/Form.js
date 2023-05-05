import "./FormStyle.css"
import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_umelzxh',
        'template_s7b5ywo',
        form.current,
        'vTpH4seqRwAKZCez2'
        )
        .then((result) => {
          console.log(result.text)
          toast("Email sent successfully")
          setUsername("")
          setEmail("")
          setMessage("")
          
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="form">
    <ToastContainer/>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.username)}} name="user_name"/>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.email)}} name="user_email"/>
            <label>Message</label>
            <textarea rows={4} placeholder="Type your message here" value={message} onChange={(e)=>{setMessage(e.target.message)}} name="message"/>
             <button className="btn" value="send">Submit</button>

        </form>
    </div>
  )
}

export default Form