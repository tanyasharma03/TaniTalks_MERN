import React,{useEffect,useState} from 'react'

const Message = () => {

    const [userData, setuserData] = useState({name:"",email:"",phone:"",message:""});

    const callContact = async ()=>{
        try {
            const res = await fetch("/getData", {
                 method:"GET",
                 headers:{
                     "Content-Type":"application/json"
                 }, 
            });
            const data= await res.json();
            setuserData({...data, name:data.name, email:data.email, phone:data.phone});         //to make data entry dynamic directly from the user
            

            if(!res.status === 200){
                const err = new Error(res.err);
                throw err;
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    

    useEffect(() => {

        callContact();

    }, []);

    const handleInput= (event) =>{
        const name= event.target.name;
        const value = event.target.value;

        setuserData({...userData, [name]:value})
    }

    //-----sending data to the server----//

    const sendMessage= async (event) =>{
      event.preventDefault();

      const {name,phone,email,message}=userData;

      const res = await fetch("/contact",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              name,email,phone,message
          })
      });

      const data= await res.json();

      if(!data){
          console.log("Message not send");
      }else{
          window.alert("Message sent successfully");
          setuserData({...userData,message:""})
      }
    }
   
    const editButton =(event) =>{
        event.preventDefault();
        window.alert("Please login first")
    }

    return (
        <div>
            <div className="contact-form">
                    <div className="container-fluid" >
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-form-container py-4">
                                     <div className="contact-form-title">
                                         <h1>Get in Touch</h1>
                                     </div>
                                     <form id="contact-form" method="POST">
                                         <div className="contact-input">
                                              <input type="text" id="contact-name" className="contact-form-name input_field" 
                                             name="name" placeholder="Your name" required="true" onChange={handleInput} onClick={editButton} readOnly="true" value={userData.name} autoComplete="off" />

                                              <input type="text" id="contact-email" className="contact-form-email input_field" 
                                             name="email" placeholder="Your Email" required="true" onChange={handleInput} onClick={editButton} readOnly="true" value={userData.email} autoComplete="off" />

                                              <input type="text" id="contact-phone" className="contact-form-phone input_field" 
                                             name="phone" placeholder="Your number" required="true" onChange={handleInput} onClick={editButton} readOnly="true" value={userData.phone} autoComplete="off" maxLength="10" />
                                         </div>

                                         <div className="contact-form-text mt-4">
                                             <textarea className="text-field contact-message" id="contact-message-text"
                                             name="message" placeholder="Drop a message ..." onChange={handleInput} value={userData.message} />
                                         </div>

                                         
                                         <div className="form-group form-button" style={{border:"none"}}>
                                              <input type="submit" onClick={sendMessage} name="message-submit" id="message" className="form-submit" value="Send Message"></input>
                                         </div>
                                     </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Message
