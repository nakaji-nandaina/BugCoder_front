import React, { useState } from 'react';

const Turn = () => {
  const [aspect,setAspect]=useState(false);
  const toggle =()=>{
    setAspect(prevState=>!prevState)
  }

  return (
    <div>
      <button onClick={toggle}>{aspect? "White":"Black"}</button>
    </div>
  );
};

export default Turn;