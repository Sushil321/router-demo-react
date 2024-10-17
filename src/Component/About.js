import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{height:"400px",backgroundColor:"red"}}>
        <h1 style={{textAlign:"center",paddingTop:"100px"}}>This is About page</h1>
        <div style={{textAlign:"center"}}>
          <Link to="/about/user1" style={{fontSize:"20px",width:"100%",textAlign:'center'}}>User1 Page</Link><br/>
          <Link to="/about/user2" style={{fontSize:"20px",width:"100%",textAlign:'center'}}>User2 Page</Link>

        </div>
        
        
    </div>
  )
}

export default About; 