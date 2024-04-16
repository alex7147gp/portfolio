import React from 'react'
import './Contact.scss'
import {useRef, useState} from 'react'

const Contact = () => {
  
   const EmailText = useRef() 
   const MessageText = useRef()
   
   const [Mesagge, setMessage] = useState(false)
   
   const handeSubmit = (e) => {
     e.preventDefault()
     setMessage(true)
   }

   const handeclick = (EmailText, MessageText) => {
   
   const message = Number(MessageText.current.value)

   const email = Number(EmailText.current.value)
   
   console.log(MessageText)
   console.log(message)

    if (message > email){
      return MessageText.current.value
    }
    else if(message == email){
      return 'une de los dos tiene que ser mayor'
    }
    else{
      return  EmailText.current.value
    } 

   

   }

	return(
      <div className='contact' id='contact'>
          <div className='container'>
            <div className='left'>
              <img src='assets/shake.svg' alt=''/>
            </div>
            <div className='right'>
              <h1 className='title'>
                Contact
              </h1>
             <form onSubmit={handeSubmit}>  
              <input className='email' placeholder='Email' ref={EmailText}></input>
              <textarea className='message' placeholder='Message' ref={MessageText}></textarea>
              {Mesagge && <span>Thanks , I'll reply Asap :)</span>}
              <button type='submit'onClick={()=>handeclick(MessageText, EmailText)}>Send</button>             
             </form>
            </div>
          </div>   
      </div>
    )
}

 export default Contact