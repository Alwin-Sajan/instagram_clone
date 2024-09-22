import React from 'react'
import MenuBar from '../components/MenuBar'

const HomePage = () => {

  const postsData = {
    1: { id: 1, image: "https://via.placeholder.com/150" },
    2: { id: 2, image: "https://via.placeholder.com/150" },
  };

  const storyData = {
    1: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    2: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    3: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    4: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    5: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    6: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    7: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    8: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    9: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    10: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    11: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    12: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    13: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    14: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    15: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    16: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    17: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    18: { id: "solom_rider", image: "https://via.placeholder.com/150" },
  }

  return (
    <div className='w-full relative h-full flex '>
      {/* right side */}
      <div className='w-[18%] fixed left-0 h-screen  py-4 px-6 border-r-4 border-opacity-40 border-slate-500'>
        <div className='flex items-center gap-1'>
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" className='h-6 ' alt="" />
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" className='w-24 mt-2' alt="" />
        </div>

        <MenuBar />
      </div>

      {/* Center side*/}
      <div className='w-[52%] ml-[18%] h-[300%] '>

        {/* STORIES */}
        <div className='h-28 w-full  p-4 px-12'>
          <ul className=' w-[100%] overflow-x-scroll scr flex gap-6'>
            {Object.values(storyData).map((std) =>
              <li className='grid w-16 items-center'>
                <img src={std.image} className='bg-white rounded-full h-16' alt="" />
                <p className='text-sm text-center'>{std.id.slice(0, 10)}..</p>
              </li>
            )}

          </ul>



        </div>
        <div className='py-4 px-28'>



          {/* POSTS */}

          <ul>
            {Object.values(postsData).map((pop) => (
              <li key={pop.id} className='w-fill h-[45vw] mb-8 bg-orange-400'>
                <div className='w-full h-16 flex items-center p-4'>
                  <img src={pop.image} className='rounded-full h-8' alt="" />
                </div>
                <img src={pop.image} alt={`Post ${pop.id}`} className='bg-slate-400 h-[80%]' />
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* //left side*/}
      <div className='w-[30%] fixed right-0 h-screen bg-blue-400 py-6 px-12'>
        right
      </div>
    </div>
  )
}

export default HomePage