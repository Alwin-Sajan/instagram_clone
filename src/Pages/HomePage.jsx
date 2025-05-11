import React from 'react'
import MenuBar from '../components/MenuBar'
import { comd, heart, menu2, msg_ic, profile, rheart } from '../assets/index.js';

const HomePage = () => {

  const postsData = {
    1: { id: "solom_rider", image: "https://i.pinimg.com/236x/49/cd/4d/49cd4dd30a5e3f0c76240855b3fdb3bf.jpg", time: "5d" },
    2: { id: "Amazing_Dreamer", image: "https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_nature-2.jpg", time: "1w" },
    3: { id: "solom_rider", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-C_YSWcI7ISBSkNFm72feHjP3ohN-eYILMz8z1xo88c2XU6fY_DI9CQqw16Vub63rDJk&usqp=CAU", time: "5d" },

  };

  const otherUserData = {
    1: { id: "solom_rider", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUOggTIUocZJcFyki1aDdl2aUDbRzR6hnnA&s" },
    2: { id: "The_Abhi", image: "https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_nature-2.jpg" },
    3: { id: "Hail_Queen", image: "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg" },
    4: { id: "MaxVesss", image: "https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?resize=560%2C560&ssl=1" },
    5: { id: "Anarkalie_09", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NKQmSLEJmAUJzpfCdJ89Xl3zcNMwQt7krw&s" },
    6: { id: "Blue_sky54", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMz8sVYhhfkXbCxEkES1u9Cm_YWW7fEg_Lw&s" },
    7: { id: "Present_legend0", image: "https://pbs.twimg.com/profile_images/1850932002142494720/CWXir-a__400x400.jpg" },
    8: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    9: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    10: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    11: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    12: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    13: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    14: { id: "solom_rider", image: "https://via.placeholder.com/150" },
    15: { id: "telly_gen", image: "https://img.freepik.com/free-vector/simple-shadow-profile-picture-template_742173-8847.jpg" },
    16: { id: "g_force", image: "https://pbs.twimg.com/profile_images/1769741269327294464/bwPqFyxG_400x400.jpg" },
    17: { id: "the_gang", image: "https://pbs.twimg.com/profile_images/1802661921847402496/s6-d_s2o_400x400.jpg" },
    18: { id: "the_cook", image: "https://img.freepik.com/free-photo/beautiful-woman-dreaming-cyber-monday-sales_23-2148313194.jpg?w=360" },
  }

  const profileData = {
    nickname: "present",
    username: "Alvie_25",
    image:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2024_33/3659067/square_profile.jpg"
  }

  return (
    <div className='w-full relative h-full flex '>
      {/* right side */}
      <div className='w-[18%]  bg-indigo-500  fixed left-0 h-screen  py-4 px-6 border-r-2 border-opacity-40 border-slate-300'>
        <a href='/' className='flex items-center gap-1'>
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" className='h-6 ' alt="" />
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" className='w-24 mt-2' alt="" />
        </a>

        <MenuBar />
      </div>

      {/* Center side*/}
      <div className='w-[52%] ml-[18%] h-[300%] bg-indigo-400 '>

        {/* STORIES */}
        <div className='h-28 w-full  p-4 px-12'>
          <ul className=' w-[100%] overflow-x-scroll scr flex gap-6'>
            {Object.values(otherUserData).map((std) =>
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
              <li key={pop.id} className='w-fill h-[45vw] mb-8 border-b-2'>

                <div className='w-full h-16 flex items-center justify-between p-4'>
                  <span className='flex items-center'>
                    <img src={pop.image} className='rounded-full h-8' alt="" />
                    <p className='text-sm font-semibold ml-2'>{pop.id} </p>
                    <p className='text-sm' >_ • {pop.time}</p>
                  </span>
                  <img src={menu2} className='h-6' alt="" />

                </div>
                <img src={pop.image} alt={`Post ${pop.id}`} className='bg-slate-400 w-full h-[80%]' />
                <div className='flex py-2 gap-2'>
                  <img src={pop.Liked?rheart:heart} className='p-1 h-8 w-8' alt="" />
                  <img src={comd} className='h-8 w-8 p-1' alt="" />
                  <img src={msg_ic} className='h-8 w-8 p-1' alt="" />
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* //left side*/}
      <div className='w-[30%] right-0 h-screen py-6 px-12 bg-indigo-500'>

        <div className='flex items-center'>
          <img src={profileData.image} className='h-12 rounded-full' alt="profile pic" />
          <span className='ml-2 w-full'>
            <h1 className='text-sm font-semibold'>{profileData.username}</h1>
            <h2 className='text-xs w-32'>{profileData.nickname}</h2>
          </span>
          <a href="" className='text-sm text-blue-400 '>Switch</a>
        </div>


        <p className='text-sm inline-block text-gray-700 mt-6'>Suggested for you</p>
        <a href="" className=' text-sm inline-block ml-28 mb-6'>See all</a>

        <ul className='grid gap-4'>
          {Object.values(otherUserData).slice(14, 18).map((user) =>
            <li key={user.id} className='flex items-center w-full'>
              <img src={user.image} className='h-12 rounded-full' alt="profile pic" />
              <span className='ml-2 w-48'>
                <h1 className='text-sm m-0 p-0 font-semibold'>{user.id}</h1>
                <h2 className='text-xs -mt-1 w-48'>Suggested for you</h2>
              </span>
              <a href="" className='text-sm text-blue-400 '>Follow</a>
            </li>
          )}
        </ul>


      </div>
    </div>
  )
}

export default HomePage