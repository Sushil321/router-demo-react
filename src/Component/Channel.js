import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Channel() {
  return (
    <div style={{height:"400px",backgroundColor:"gray"}}>
        <h1 style={{textAlign:"center",paddingTop:"100px"}}>This ic channel Componennt (Below is nested routing)</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",lineHeight:"40px",fontSize:"20px"}}>
            <Link to="workshops">Workshops</Link>
            <Link to="programs">Live Programs</Link>
            <Link to="online">Online Lectures</Link>
            <Outlet/>

        </div>
        
    </div>
  )
}

export default Channel;