import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Troll = () => {

  const handleTroll = (event) => {
    event.preventDefault()
    window.location ='https://www.youtube.com/watch?v=AwmNY50SUtc'
  }

  return (
    <>
    <Button onClick={(event)=> {handleTroll(event)}}>CLICK ME IF YOU DARE</Button>
    </>
  );
};

export default Troll;