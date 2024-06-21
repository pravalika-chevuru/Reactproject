import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
 const getData = () => {
    fetch("https://panorbit.in/api/users.json")
      .then(response => response.json())
      .then(res => setUsers(res.users));
  };
  const navigate = useNavigate();

  return (

    
    <div className="profile">
      <div className='page'>
        <div className='text'>
          <b> Select an account </b>
        </div>
        <div className='header'>

          {users.length > 0 && users.map((obj, index)=>{
            return(
              <div key={obj.id}>
              <div className='field' >
                <button onClick={()=>navigate('/Displaypage')} style={{width:"50PX",height:"40px",marginTop:"20px"}}>
                  <img src={obj.profilepicture} className='bar1' style={{ borderRadius: '40px' }}></img>
                  <h4 style={{ marginLeft:"50px",paddingLeft:"50px",marginTop:"0px"}}>{obj && obj.name}</h4>
                </button>
           
              </div>
              <hr style={{color:"black",marginTop:"30px",width:"280px"}}></hr>
              </div>
            )

          })}

          
          
          
        </div>

      </div>
    </div>

  );
}

export default Home;
