import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";

import { Link } from "react-router-dom";

const Menu = () => {
  const [data, setData] = useState([
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Listing", url: "/listing" },
    {
      id: 3,
      name: "Categories",
      subMenu: true,
      submenuData: [
        {
          id: 1,
          name: "Restaurants",
          doc_count: 11,
          url: "/category/restaurants",
        },
        { id: 2, name: "Places", doc_count: 8, url: "/category/places" },
        { id: 3, name: "Shopping", doc_count: 64, url: "/category/shopping" },
        { id: 4, name: "Hotels", doc_count: 107, url: "/category/hotels" },
      ],
    },
    {
      id: 4,
      name: "Pages",
      subMenu: true,
      submenuData: [
        { id: 1, name: "Dashboard", url: "/pages/Dashboard" },
        { id: 2, name: "FAQ", url: "/pages/faq" },
        { id: 3, name: "About", url: "/pages/about" },
        { id: 4, name: "Contact us", url: "/pages/contact" },
      ],
    },
    { id: 5, name: "Login", url: "/Login" },
  ]);
  const [showCatMenu, setShowCatMenu] = useState(null);
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {!!item.subMenu ? (
            <li
              className="cursor-pointer relative flex items-center gap-2"
              onMouseEnter={() => setShowCatMenu(item.id)}
              onMouseLeave={() => setShowCatMenu(null)}
            >
              {item.name}
              <BsChevronDown size={16} />
              {showCatMenu === item.id && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] py-1 text-black shadow-lg">
                  {item.submenuData.map((item) => (
                    <Link
                      key={item.id}
                      to={item?.url}
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li
                        className="cursor-pointer h-12 flex justify-between 
                                                items-center px-3 hover:bg-black/[0.03] rounded-md"
                      >
                        {item.name}
                        <span className="opacity-40">
                          {!!item.doc_count ? item.doc_count : ""}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link to={item?.url + ""}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
