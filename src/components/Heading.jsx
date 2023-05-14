import React from 'react';

const Heading = () => {

    var hour = new Date().getHours();
    var greeting = "";
    var customStyle = {
      color: ""
    };
    
    if(hour < 12) {
      greeting = "Good Morning";
      customStyle.color = "red"
    }
    else if(hour < 18) {
      greeting = "Good Afternoon";
      customStyle.color = "green"
    }
    else {
      greeting = "Good Evening";
      customStyle.color = "blue";
    }
  return (
    <>
      <h1 className='heading' style={customStyle}>{greeting}</h1>
    </>
  )
}

export default Heading;