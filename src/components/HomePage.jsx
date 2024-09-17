import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full relative h-full flex'>
      {/* right side */}
      <div className='w-[18%] fixed left-0 h-screen bg-green-200 py-4 px-6'>
        <div className='flex items-center gap-1'>
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" className='h-6 ' alt="" />
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" className='w-24 mt-2' alt="" />
        </div>
        <div>

        </div>
      </div>

      {/* Center side*/}
      <div className='w-[52%] ml-[18%] h-[300%] bg-slate-500'>
        <div className='h-28 w-full bg-slate-200 p-4'>

        </div>
        <div className='py-4 px-28'>

          <div className='w-fill h-[45vw] bg-orange-400'>
            heyy
          </div>

        </div>
      </div>

      {/* //left side*/}
      <div className='w-[30%] fixed right-0 h-screen bg-blue-400'>
        f
      </div>
    </div>
  )
}

export default HomePage