import React,{useEffect, useState} from 'react';

const TextInput = () => {
  const [content,setText]=useState(0)
  const handleName = (event)=>{
    setText(event.target.value)
  }
  useEffect(()=>{
    console.log(content)
  },[content])
  return (
    <input onChange={(event)=>handleName(event)}
      type="text"
      value={content}
    />
  );
};

export default TextInput;