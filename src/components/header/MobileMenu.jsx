import React, { useState } from 'react'

import {BsChevronDown} from 'react-icons/bs'
import { Link } from 'react-router-dom'




const MobileMenu = ({ setMobileMenu }) => {
    const [data,setData] = useState([
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Listing", url: "/listing" },
        { id: 3, name: "Categories", subMenu: true ,submenuData:[
            { id: 1, name: "Restaurants", doc_count: 11 , url:'/category/restaurants'},
            { id: 2, name: "Places", doc_count: 8, url:'/category/places' },
            { id: 3, name: "Shopping", doc_count: 64 , url:'/category/shopping' },
            { id: 4, name: "Hotels", doc_count: 107 , url:'/category/hotels' },
        ]},
        { id: 4, name: "Pages", subMenu:true , submenuData:[
            { id: 1, name: "Dashboard", url:'/pages/Dashboard'},
            { id: 2, name: "FAQ",  url:'/pages/faq' },
            { id: 3, name: "About", url:'/pages/about' },
            { id: 4, name: "Contact us", url:'/pages/contact' },
        ]},
    ])
    const [subMenuData,setSubMenuData] = useState([
        { id: 1, name: "JORDAN", doc_count: 11 , url:'/category/JORDAN'},
        { id: 2, name: "SNEAKERS", doc_count: 8, url:'/category/SNEAKERS' },
        { id: 3, name: "RUNNING", doc_count: 64 , url:'/category/RUNNING' },
        { id: 4, name: "FOOTBALL", doc_count: 107 , url:'/category/FOOTBALL' },
    ])
    const [showCatMenu,setShowCatMenu] = useState(null)
    return (    
    <ul className='md:hidden flex flex-col font-bold bg-white text-black border-t absolute top-[50px] left-0 w-full h-[calc(100vh-30vh)]'>
        {
            data.map(item=>(
                <React.Fragment key={item.id}>
                    {
                        !!item.subMenu? 
                            <li className='cursor-pointer relative flex flex-col border-b py-4 px-5' 
                                onClick={()=> setShowCatMenu(item.id)}
                            >
                            <div className='flex justify-center items-center'>
                            {item.name}
                            <BsChevronDown className='ml-3' size={16} />
                            </div>

                            {
                                showCatMenu===item.id && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                    {
                                        item.submenuData.map(item=>( 
                                            <Link key={item.id} to={item.url} onClick={
                                                ()=> {
                                                    setShowCatMenu(null)
                                                    setMobileMenu(false)
                                                }} >
                                                <li className='border-t flex justify-between 
                                                items-center px-8 py-4 '>
                                                    {
                                                        item.name
                                                    }
                                                    <span className='opacity-40'>{!!item.doc_count?(item.doc_count):''}</span>
                                                </li>
                                             </Link>
                                        ))    
                                    }
                                    </ul>
                                )
                            }
                    </li> :
                            <li className='py-4 px-5 border-b'>
                                <Link to={item?.url+''} onClick={()=>setMobileMenu(false)} >
                                     {item.name}
                                      </Link>
                            </li>
                    }
                </React.Fragment>
            ))
        }
    </ul>
  )
}

export default MobileMenu;