import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import back from './assets/back.png'

const App = () => {
  const[login,setLogin] =  useState(true);
  const[preImage,setpreImage] =useState(false);
  return (
    <div className='w-full h-screen relative bg-white'>

      <button className='absolute left-60 top-5 w-16 bg-red-600 z-50' onClick={()=>{setpreImage(!preImage)}}>Switch</button>
      {preImage?(<img src={back} className='opacity-85 z-10 absolute -mt-24' alt="" />):
      (<h6></h6>)}
      
      {login ? (<HomePage/>) :(
      
      <div className=' flex items-center h-full w-full justify-center '>
        <div className='bg-gray-300 block h-3/4 w-1/3'>
          ghh
        </div>
      </div>)
      
      }
    </div>
  )
}

export default App