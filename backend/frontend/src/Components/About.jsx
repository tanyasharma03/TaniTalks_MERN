import React,{useEffect} from 'react'
import tanyapic from "../Images/Profile.jpg";
import "bootstrap/dist/js/bootstrap.bundle"
import { useHistory } from 'react-router-dom';

const About = () => {

    // const [userData, setuserData] = useState('');
   
    const history = useHistory();

    const callAbout = async ()=>{
        try {
            const res = await fetch("/about", {
                 method:"GET",
                 headers:{
                     Accept:"application/json",
                     "Content-Type":"application/json"
                 },
                 credentials:"include"  //to make sure cookies are sent to backend 
            });

            const data= await res.json();
            // setuserData(data);         //to make data entry dynamic directly from the user
            

            if(!res.status === 200){
                const err = new Error(res.err);
                throw err;
            }
        } catch (error) {
            history.push("/signin")
            console.log(error);
        }
    }

    

    useEffect(() => {

        callAbout();

    }, []);


    const editbutton = (event) =>{
        event.preventDefault();
       window.alert("Changes cannot be made")
    }

    return (
        <div>
           <div className="container about-form mt-5 py-5 px-5">
               <form method="GET">
                  <div className="row">
                      <div className="col-md-4">
                          <div className="profile-img">
                              <img src={tanyapic} alt="thapa" />
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="profile-head">
                              <h4 style={{fontWeight:"600"}}>Tanya Sharma</h4>
                              <h6>Web Developer</h6>
                              <p className="profile-rating mt-3 mb-5">MERN Stack</p>

                              <ul className="nav nav-tabs" id="myTab" role="tablist">
                                  <li className="nav-item" role="presentation">
                                      <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-md-2">
                          <input type="submit" className="profile-edit-btn" name="addMore" onClick={editbutton} value="Edit Profile" />
                      </div>
                  </div>
                     


                  <div className="row">
                      <div className="col-md-4">
                          <div className="profile-work py-3">
                              <p>WORK LINK</p>
                              <a href="https://www.instagram.com/tanyasharma03_/" target="_blank" rel="noreferrer">Instagram</a>
                              <a href="https://www.facebook.com/profile.php?id=100045546662365" target="_blank" rel="noreferrer">Facebook</a>
                              <a href="https://www.linkedin.com/in/tanya-sharma-724465216" target="_blank" rel="noreferrer">LinkedIn</a>
                          </div>
                      </div>

                      <div className="col-md-8 pl-5 about-info">
                          <div className="tab-content" id="myTabContent">

                              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                  <div className="row">
                                      <div className="col-md-6">
                                          <label>User ID</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>78657487586995</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                      <div className="col-md-6">
                                          <label>Name</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>Tanya Sharma</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                      <div className="col-md-6">
                                          <label>Email</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>tasu2612@gmail.com</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                      <div className="col-md-6">
                                          <label>Phone</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>9876543221</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                      <div className="col-md-6">
                                          <label>Profession</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>Web Developer</p>
                                      </div>
                                  </div>
                               </div>


                               <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                  
                                  <div className="row">
                                      <div className="col-md-6">
                                          <label>Experience</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>HTML, CSS, Reactjs</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                      <div className="col-md-6">
                                          <label>Language</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>C, Java, Python</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                      <div className="col-md-6">
                                          <label>Other</label>
                                      </div>
                                      <div className="col-md-6">
                                          <p>MongoDB, MySql</p>
                                      </div>
                                  </div>

                               </div>
                          </div>
                      </div>
                  </div>
               </form>
           </div>
        </div>
    )
}

export default About
