import React, { useState } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { IoRestaurantOutline, IoBedOutline, IoFastFoodOutline  } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { BsCart3, BsBank  } from "react-icons/bs";

const Home = () => {

  const [searchValue, setSearchValue] = useState('')
  const [selectCategory, setSelectCategory] = useState(null)
  return (
    <div className='bg-white w-full'>
      <div className='bg-[#4C4454] min-h-[100vh] flex justify-center items-center'>
        <div className='w-[70%] px-4 bg-transparent'>
          <h1 className='text-white text-[44px] font-semibold text-center'>Find the Best Places to Be</h1>
          <p className='text-[#DBDADD] text-[18px] font-semibold text-center'>All the top locations – from restaurants and clubs, to galleries, famous places and more..</p>
          <div className='bg-white w-full my-10 py-5 px-3 flex flex-wrap gap-2 justify-center items-center'>
            <input className='shadow appearance-none border rounded w-full md:w-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='What are you looking for? ' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <div className='w-full md:w-[200px]'>
              <Select size='md' value={selectCategory} onChange={(value) => {
                setSelectCategory(value)
              }} label="Select Category">
                <Option value='restaurants'>Restaurants</Option>
                <Option value='places'>Places</Option>
                <Option value='shopping'>Shopping</Option>
                <Option value='hotels'>Hotels</Option>
              </Select>
            </div>
            <div className='w-full md:w-[200px]'>
              <Select size='md' label="Select Location">
                <Option value='chakwal'>Chakwal</Option>
                <Option value='talagang'>Talagang</Option>
                <Option value='kallarkahar'>Kallar Kahar</Option>
              </Select>
            </div>
            <Button ripple={true} variant='gradient' color='orange' size='md' className='rounded-md'>Search</Button>
          </div>
        </div>
      </div>
      <br />
      <div className='w-full my-[50px]'>
        <div className='w-[90%] md:w-[80%] mx-auto'>
          <h2 className='font-semibold md:font-bold text-center text-black text-[28px] md:text-[32px]'>What Kind of Activity do you Want to try?</h2>
          <p className='my-5 mx-auto w-[85%] text-center leading-normal text-[18px] text-[#7a82a6]'>Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories.</p>
          <div className='mt-6 w-full flex justify-start items-center gap-6 content-start flex-wrap'>
            <div style={{ '--image-var': `url(${require('../assests/images/restaurant.jpg')})` }} className='cursor-pointer relative rounded-lg w-[300px] md:w-[30%]  container bg-cover bg-center h-[250px]  bg-[image:var(--image-var)]' >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className='z-10 absolute text-center pt-10 w-full  min-h-full'>
              <IoRestaurantOutline color='white' size={25} className='mx-auto mb-4' />
              <p className=' text-white font-semibold text-[22px] leading-tight mb-3'>Restaurant</p>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">4 Listings</span>
              </div>
            </div>

            <div style={{ '--image-var': `url(${require('../assests/images/restaurant.jpg')})` }} className='cursor-pointer relative rounded-lg w-[300px] md:w-[30%]  container bg-cover bg-center h-[250px]  bg-[image:var(--image-var)]' >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className='z-10 absolute text-center pt-10 w-full  min-h-full'>
              <MdOutlinePlace color='white' size={26} className='mx-auto mb-4' />
              <p className=' text-white font-semibold text-[22px] leading-tight mb-3'>Places & Destination</p>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">4 Listings</span>
              </div>
            </div>

            <div style={{ '--image-var': `url(${require('../assests/images/restaurant.jpg')})` }} className='cursor-pointer relative rounded-lg w-[300px] md:w-[30%]  container bg-cover bg-center h-[250px]  bg-[image:var(--image-var)]' >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className='z-10 absolute text-center pt-10 w-full  min-h-full'>
              <BsCart3 color='white' size={25} className='mx-auto mb-4' />
              <p className=' text-white font-semibold text-[22px] leading-tight mb-3'>Shopping & Stores</p>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">4 Listings</span>
              </div>
            </div>
            <div style={{ '--image-var': `url(${require('../assests/images/restaurant.jpg')})` }} className='cursor-pointer relative rounded-lg w-[300px] md:w-[30%]  container bg-cover bg-center h-[250px]  bg-[image:var(--image-var)]' >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className='z-10 absolute text-center pt-10 w-full  min-h-full'>
              <BsBank  color='white' size={25} className='mx-auto mb-4' />
              <p className=' text-white font-semibold text-[22px] leading-tight mb-3'>Art & History</p>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">4 Listings</span>
              </div>
            </div>
            <div style={{ '--image-var': `url(${require('../assests/images/restaurant.jpg')})` }} className='cursor-pointer relative rounded-lg w-[300px] md:w-[30%]  container bg-cover bg-center h-[250px]  bg-[image:var(--image-var)]' >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className='z-10 absolute text-center pt-10 w-full  min-h-full'>
              <IoBedOutline color='white' size={25} className='mx-auto mb-4' />
              <p className=' text-white font-semibold text-[22px] leading-tight mb-3'>Hotel & Travel</p>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">4 Listings</span>
              </div>
            </div>
            <div style={{ '--image-var': `url(${require('../assests/images/restaurant.jpg')})` }} className='cursor-pointer relative rounded-lg w-[300px] md:w-[30%]  container bg-cover bg-center h-[250px]  bg-[image:var(--image-var)]' >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className='z-10 absolute text-center pt-10 w-full  min-h-full'>
              <IoFastFoodOutline  color='white' size={25} className='mx-auto mb-4' />
              <p className=' text-white font-semibold text-[22px] leading-tight mb-3'>FOOD & Drink</p>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">4 Listings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='w-full py-[50px] bg-[#F5F7FC]'>
              <div className='w-[85%] lg:w-[1080px] mx-auto'>
                <h2 className='font-semibold md:font-bold text-center text-black text-[28px] md:text-[32px]'>Best Listings around YOU</h2>
                <p className='my-5 mx-auto w-[85%] text-center leading-normal text-[18px] text-[#7a82a6]'>Explore the popular listings around the Chakwal</p>
                <div className='flex justify-start flex-wrap items-center content-center '>
                  
                </div>
              </div>
      </div>
    </div>
  )
}

export default Home