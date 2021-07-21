import React,{useEffect,useState} from 'react'

const Home = () => {

    const [userData, setuserData] = useState('');

    const [show,setShow]= useState(false);

    const callHome = async ()=>{
        try {
            const res = await fetch("/getData", {
                 method:"GET",
                 headers:{
                     "Content-Type":"application/json"
                 }, 
            });
            const data= await res.json();
            setuserData(data);         //to make data entry dynamic directly from the user
            setShow(true);

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => 
    {

        callHome();

    }, []);


    return (
        <div>
            <div className="home-page">
            <p classname="pt-5">Welcome</p>
            <h1>{userData.name}</h1>
            <h2>{show ? "Happy to see you, glad you visited !" :"I am The mern Developer"}</h2>
            </div>
        </div>
    )
}

export default Home
