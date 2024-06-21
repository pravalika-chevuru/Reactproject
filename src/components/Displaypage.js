
import { useEffect,useState } from 'react';
import './Displaypage.css';
const Displaypage =() =>{

    const[user,setUser]=useState([])
    
    const getData = ()=>{
        fetch('https://panorbit.in/api/users.json')
        .then(response => response.json())
        .then(res => setUser (res.users));
    };
    useEffect(() =>{
        getData();
    },[])



    console.log(user)
    return(
        
        <div class='nav-bar' style={{display:'flex'}}>


            <div className='name1'>
                <center>
                    <div className='file1'>
                        Profile
                    </div>
                    <hr color='white'></hr>


                    <div className='file2'>
                        Posts
                    </div>
                    <hr color='white'></hr> 


                    <div className='file3'>
                        Gallary
                    </div>
                    <hr color='white'></hr>


                    <div className='file4'>
                        ToDo
                    </div>
                    <hr color='white'></hr>
                </center>

            </div>


            <div className='name2'>
                <div style={{display:'flex'}}>
                    <div className='style1'>
                        Profile

                    </div>


                    <div className='image1'>
                        <img src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg' style={{height:"30px",width:"30px",borderRadius:"20px",marginTop:"20px",marginLeft:"700px"}}></img>

                
                    
                    </div>
                    <div className='field1'>
                        Leanne Graham
                    </div>
                

                    
                </div>
                <hr style={{width:"940px"}}></hr>




             

                <div className='header' style={{marginLeft:'100px'}}>
                    <img src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg' style={{height:"150px",width:"150px",borderRadius:"50%",marginTop:"40px"}}></img>

                </div>
                <div className='const'>
                    Leanne Graham
                    
                    
    
                    
                </div>
                <hr style={{width:'500px',marginRight:'420px'}}></hr>
                <div className='address'>
                    Company
                    
                    
                    
                </div>
            </div>


            
        </div>
    );

}
export default Displaypage;
