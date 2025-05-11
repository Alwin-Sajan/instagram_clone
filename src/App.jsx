import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import back from './assets/back.png'

const App = () => {
  const[login,setLogin] =  useState(false);
  const[preImage,setpreImage] =useState(false);
  return (
    <div className='w-full h-screen relative bg-white'>

      <button className='absolute left-60 top-5 w-16 bg-red-600 z-50' onClick={()=>{setpreImage(!preImage)}}>Switch</button>
      {preImage?(<img src={back} className='opacity-85 z-10 absolute -mt-24' alt="" />):
      (<h6></h6>)}
      
      {login ? (<HomePage/>) :(
      
      <div className=' flex items-center h-full w-full justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <div className='bg-[#2e2b2b] block h-3/4 w-1/4 rounded-2xl shadow-xl inset-shadow-sm py-12 px-16'>
          <h1 className='text-3xl text-[#FBDB93] font-bold'>Login </h1>
          <div className='mt-12 grid gap-2 text-[#BE5B50]'>
            <label htmlFor="name" className='text-sm'>Username</label>
            <input type="text" id='name' className='p-2 bg-transparent border-b-4 border-[#BE5B50]' />
            <label htmlFor="pword" className='text-sm'>Password</label>
            <input type="password" name="pword" id="pword" className='p-2 bg-transparent border-b-4 border-[#BE5B50]' />
            <button type="submit" onClick={()=>{setLogin(true)}} className='border-[#FBDB93] border-4 text-[#] w-3/4 p-3 text-lg rounded-3xl m-auto mt-8'>Login</button>
          </div>
          <p className='pt-16 m-auto text-[#BE5B50]'>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>)
      
      }
    </div>
  )
}

export default App