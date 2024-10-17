import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    let useparams = useParams();
    let {name} = useparams;
  return (
    <>
    <div>
        <h1>Welcome to page : {name} 's'</h1>
    </div>

    </>
  );
}

export default User