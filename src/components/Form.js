import "./FormStyle.css"
import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {


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
          console.log(result.text);
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email:</label>
            <input type="text"  name="user_email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows={4} placeholder="Type your message here" name="message"></textarea>
            <button className="btn" value="send" >Submit</button>
        </form>
    </div>
  )
}

export default Form