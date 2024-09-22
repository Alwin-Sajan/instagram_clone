import React from 'react';
import { home_ic, search_ic, menu, msg_ic, profile, reel_ic, explore_ic, heart, create_ic } from '../assets/index.js';

const MenuBar = () => {
    const menu_content = {
        1: { id: "Home", image: home_ic },
        2: { id: "Search", image: search_ic },
        3: { id:"Explore" , image:explore_ic},
        4: { id: "Reels" , image:reel_ic},
        5: { id: "Message", image: msg_ic },
        6: { id: "Notification" ,image:heart},
        7: { id: "Create",image:create_ic},
        8: { id: "Profile", image: profile },
        9:{ id: "Menu" , image:menu },
   }
    return (
        <ul className='mt-8 gap-8 grid grid-cols-1'> 
            {Object.values(menu_content).map((content) =>
                <li key={content.id}>
                    <a href="" aria-label="Home" className='flex items-center'>
                        <img src={content.image} className='h-6 pr-4 inline-block' alt="Home" />
                        {content.id}
                    </a>
                </li>
            )}
        </ul>
    );
}

export default MenuBar;
