import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {
  IoRestaurantOutline,
  IoBedOutline,
  IoFastFoodOutline,
} from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { BsCart3, BsBank } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
// import styles from "./assets/css/style.css"
const Listing = () => {
  return (
    // <section class="listing-details-wrapper bgimage">
    //   <div
    //     class="bg_image_holder"
    //     style="background-image: url(assets/images/details-img.jpg); opacity: 1;"
    //   >
    //     <img
    //       src="assets/images/details-img.jpg"
    //       alt="assets/images/details-img.jpg"
    //     />
    //   </div>
    //   <div class="mainmenu-wrapper">
    //     <div class="menu-area menu1 menu--light">
    //       <div class="top-menu-area">
    //         <div class="container-fluid">
    //           <div class="row">
    //             <div class="col-lg-12">
    //               <div class="menu-fullwidth">
    //                 <div class="logo-wrapper order-lg-0 order-sm-1">
    //                   <div class="logo logo-top">
    //                     <a href="http://localhost/gofindit/index.php">
    //                       <img
    //                         src="assets/images/logo-white.png"
    //                         alt="logo image"
    //                         class="img-fluid"
    //                       />
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div class="menu-container order-lg-1 order-sm-0">
    //                   <div class="d_menu">
    //                     <nav class="navbar navbar-expand-lg mainmenu__menu">
    //                       <button
    //                         class="navbar-toggler"
    //                         type="button"
    //                         data-toggle="collapse"
    //                         data-target="#direo-navbar-collapse"
    //                         aria-controls="direo-navbar-collapse"
    //                         aria-expanded="true"
    //                         aria-label="Toggle navigation"
    //                       >
    //                         <span class="navbar-toggler-icon icon-menu">
    //                           <i class="la la-reorder"></i>
    //                         </span>
    //                       </button>
    //                       <div
    //                         class="navbar-collapse collapse show"
    //                         id="direo-navbar-collapse"
    //                         style=""
    //                       >
    //                         <ul class="navbar-nav">
    //                           <li>
    //                             <a href="http://localhost/gofindit/index.php">
    //                               Home
    //                             </a>
    //                           </li>
    //                           <li class="dropdown has_dropdown">
    //                             <a
    //                               href="http://localhost/gofindit/listing-details.php#"
    //                               class="dropdown-toggle"
    //                               id="drop3"
    //                               role="button"
    //                               data-toggle="dropdown"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                             >
    //                               Listings
    //                             </a>
    //                             <ul
    //                               class="dropdown-menu"
    //                               aria-labelledby="drop3"
    //                             >
    //                               <li>
    //                                 <a href="http://localhost/gofindit/all-listings-grid.php">
    //                                   Listing Grid
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/all-listings-list.php">
    //                                   Listing List
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/listing-details.php">
    //                                   Listing Details
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/general_info_listing.php">
    //                                   Add Listing
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li class="dropdown has_dropdown">
    //                             <a
    //                               href="http://localhost/gofindit/listing-details.php#"
    //                               class="dropdown-toggle"
    //                               id="drop4"
    //                               role="button"
    //                               data-toggle="dropdown"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                             >
    //                               Categories
    //                             </a>
    //                             <ul
    //                               class="dropdown-menu"
    //                               aria-labelledby="drop4"
    //                             >
    //                               <li>
    //                                 <a href="http://localhost/gofindit/all-categories.php">
    //                                   All Categories
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/all-locations.php">
    //                                   All Locations
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li class="dropdown has_dropdown">
    //                             <a
    //                               class="dropdown-toggle"
    //                               href="http://localhost/gofindit/listing-details.php#"
    //                               id="drop2"
    //                               role="button"
    //                               data-toggle="dropdown"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                             >
    //                               Pages
    //                             </a>
    //                             <ul
    //                               class="dropdown-menu"
    //                               aria-labelledby="drop2"
    //                             >
    //                               <li>
    //                                 <a href="http://localhost/gofindit/author-profile.php">
    //                                   Author Profile
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/dashboard-listings.php">
    //                                   Author Dashboard
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/pricing-plans.php">
    //                                   Pricing Plans
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/checkout.php">
    //                                   Checkout
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/invoice.php">
    //                                   Invoice
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/faqs.php">
    //                                   FAQ
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/about.php">
    //                                   About
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/contact.php">
    //                                   Contact
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/cards.php">
    //                                   Products Cards
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/headers.html">
    //                                   Header Styles
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li class="dropdown has_dropdown">
    //                             <a
    //                               class="dropdown-toggle"
    //                               href="http://localhost/gofindit/listing-details.php#"
    //                               id="drop1"
    //                               role="button"
    //                               data-toggle="dropdown"
    //                               aria-haspopup="true"
    //                               aria-expanded="false"
    //                             >
    //                               Blog
    //                             </a>
    //                             <ul
    //                               class="dropdown-menu"
    //                               aria-labelledby="drop1"
    //                             >
    //                               <li>
    //                                 <a href="http://localhost/gofindit/blog-right-sidebar.php">
    //                                   Blog Right Sidebar
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/blog-grid.php">
    //                                   Blog Grid Layout
    //                                 </a>
    //                               </li>
    //                               <li>
    //                                 <a href="http://localhost/gofindit/blog-details-standard.php">
    //                                   Blog Details
    //                                 </a>
    //                               </li>
    //                               <li class="dropdown-menu--inner">
    //                                 <a href="http://localhost/gofindit/listing-details.php#">
    //                                   Dropdown Levels
    //                                 </a>
    //                                 <ul class="list-unstyled">
    //                                   <li>
    //                                     <a href="http://localhost/gofindit/listing-details.php">
    //                                       Places
    //                                     </a>
    //                                   </li>
    //                                   <li>
    //                                     <a href="http://localhost/gofindit/listing-details.php">
    //                                       Shop
    //                                     </a>
    //                                   </li>
    //                                   <li>
    //                                     <a href="http://localhost/gofindit/listing-details.php">
    //                                       Business
    //                                     </a>
    //                                   </li>
    //                                 </ul>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                         </ul>
    //                       </div>
    //                     </nav>
    //                   </div>
    //                 </div>
    //                 <div class="menu-right order-lg-2 order-sm-2">
    //                   <div class="search-wrapper">
    //                     <div class="nav_right_module search_module">
    //                       <span class="icon-left" id="basic-addon9">
    //                         <i class="la la-search"></i>
    //                       </span>
    //                       <div class="search_area">
    //                         <form action="http://localhost/">
    //                           <div class="input-group input-group-light">
    //                             <input
    //                               type="text"
    //                               class="form-control search_field top-search-field"
    //                               placeholder="What are you looking for?"
    //                               autocomplete="off"
    //                             />
    //                           </div>
    //                         </form>
    //                       </div>
    //                     </div>
    //                     <div class="search-categories">
    //                       <ul class="list-unstyled">
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             <span class="la la-glass bg-danger"></span> Food
    //                             &amp; Drinks
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             <span class="la la-cutlery bg-primary"></span>{" "}
    //                             Restaurants
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             <span class="la la-map-marker bg-success"></span>{" "}
    //                             Places
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             <span class="la la-shopping-cart bg-secondary"></span>{" "}
    //                             Shopping &amp; Store
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             <span class="la la-bed bg-info"></span> Hotels
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             <span class="la la-bank bg-warning"></span> Art
    //                             &amp; History
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div class="author-area">
    //                     <div class="author__access_area">
    //                       <ul class="d-flex list-unstyled align-items-center">
    //                         <li>
    //                           <a
    //                             href="http://localhost/gofindit/general_info_listing.php"
    //                             class="btn btn-xs btn-gradient btn-gradient-two"
    //                           >
    //                             <span class="la la-plus"></span> Add Listing
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a
    //                             href="http://localhost/gofindit/listing-details.php"
    //                             class="access-link"
    //                             data-toggle="modal"
    //                             data-target="#login_modal"
    //                           >
    //                             Login
    //                           </a>
    //                           <span>or</span>
    //                           <a
    //                             href="http://localhost/gofindit/listing-details.php"
    //                             class="access-link"
    //                             data-toggle="modal"
    //                             data-target="#signup_modal"
    //                           >
    //                             Register
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div class="offcanvas-menu d-none">
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       class="offcanvas-menu__user"
    //                     >
    //                       <i class="la la-user"></i>
    //                     </a>
    //                     <div class="offcanvas-menu__contents">
    //                       <a
    //                         href="http://localhost/gofindit/listing-details.php"
    //                         class="offcanvas-menu__close"
    //                       >
    //                         <i class="la la-times-circle"></i>
    //                       </a>
    //                       <div class="author-avatar">
    //                         <img
    //                           src="assets/images/author-avatar.png"
    //                           alt=""
    //                           class="rounded-circle"
    //                         />
    //                       </div>
    //                       <ul class="list-unstyled">
    //                         <li>
    //                           <a href="http://localhost/gofindit/dashboard-listings.html">
    //                             My Profile
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/dashboard-listings.html">
    //                             My Listing
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/dashboard-listings.html">
    //                             Favorite Listing
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/general_info_listing.php">
    //                             Add Listing
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="http://localhost/gofindit/listing-details.php">
    //                             Logout
    //                           </a>
    //                         </li>
    //                       </ul>
    //                       <div class="search_area">
    //                         <form action="http://localhost/">
    //                           <div class="input-group input-group-light">
    //                             <input
    //                               type="text"
    //                               class="form-control search_field"
    //                               placeholder="Search here..."
    //                               autocomplete="off"
    //                             />
    //                           </div>
    //                           <button
    //                             type="submit"
    //                             class="btn btn-sm btn-secondary"
    //                           >
    //                             Search
    //                           </button>
    //                         </form>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="listing-info content_above">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-lg-8 col-md-7">
    //           <ul class="list-unstyled listing-info--badges">
    //             <li>
    //               <span class="atbd_badge atbd_badge_featured">Featured</span>
    //             </li>
    //             <li>
    //               <span class="atbd_badge atbd_badge_popular">Popular</span>
    //             </li>
    //           </ul>
    //           <ul class="list-unstyled listing-info--meta">
    //             <li>
    //               <span
    //                 class="atbd_meta atbd_listing_average_pricing"
    //                 data-toggle="tooltip"
    //                 data-placement="top"
    //                 title=""
    //                 data-original-title="Average"
    //               >
    //                 <span class="atbd_active">
    //                   {/* <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     xmlns:xlink="http://www.w3.org/1999/xlink"
    //                     version="1.1"
    //                     id="Capa_1"
    //                     x="0px"
    //                     y="0px"
    //                     width="31.371px"
    //                     height="31.371px"
    //                     viewBox="0 0 31.371 31.371"
    //                     style="enable-background:new 0 0 31.371 31.371;"
    //                     xml:space="preserve"
    //                     class="svg replaced-svg"
    //                   >
    //                     <g>
    //                       <path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5   c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348   c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268   l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307   C22.416,14.762,24.26,16.877,24.26,20.34z"></path>
    //                     </g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                   </svg> */}
    //                 </span>
    //                 <span class="atbd_active">
    //                   {/* <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     xmlns:xlink="http://www.w3.org/1999/xlink"
    //                     version="1.1"
    //                     id="Capa_1"
    //                     x="0px"
    //                     y="0px"
    //                     width="31.371px"
    //                     height="31.371px"
    //                     viewBox="0 0 31.371 31.371"
    //                     style="enable-background:new 0 0 31.371 31.371;"
    //                     xml:space="preserve"
    //                     class="svg replaced-svg"
    //                   >
    //                     <g>
    //                       <path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5   c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348   c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268   l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307   C22.416,14.762,24.26,16.877,24.26,20.34z"></path>
    //                     </g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                   </svg> */}
    //                 </span>
    //                 <span>
    //                   {/* <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     xmlns:xlink="http://www.w3.org/1999/xlink"
    //                     version="1.1"
    //                     id="Capa_1"
    //                     x="0px"
    //                     y="0px"
    //                     width="31.371px"
    //                     height="31.371px"
    //                     viewBox="0 0 31.371 31.371"
    //                     style="enable-background:new 0 0 31.371 31.371;"
    //                     xml:space="preserve"
    //                     class="svg replaced-svg"
    //                   >
    //                     <g>
    //                       <path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5   c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348   c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268   l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307   C22.416,14.762,24.26,16.877,24.26,20.34z"></path>
    //                     </g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                   </svg> */}
    //                 </span>
    //                 <span>
    //                   {/* <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     xmlns:xlink="http://www.w3.org/1999/xlink"
    //                     version="1.1"
    //                     id="Capa_1"
    //                     x="0px"
    //                     y="0px"
    //                     width="31.371px"
    //                     height="31.371px"
    //                     viewBox="0 0 31.371 31.371"
    //                     style="enable-background:new 0 0 31.371 31.371;"
    //                     xml:space="preserve"
    //                     class="svg replaced-svg"
    //                   >
    //                     <g>
    //                       <path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5   c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348   c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268   l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307   C22.416,14.762,24.26,16.877,24.26,20.34z"></path>
    //                     </g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                     <g></g>
    //                   </svg> */}
    //                 </span>
    //               </span>
    //             </li>
    //             <li>
    //               <div class="average-ratings">
    //                 <span class="atbd_meta atbd_listing_rating">
    //                   4.5<i class="la la-star"></i>
    //                 </span>
    //                 <span>
    //                   <strong>26</strong> Reviews
    //                 </span>
    //               </div>
    //             </li>
    //             <li>
    //               <div class="atbd_listing_category">
    //                 <a href="http://localhost/gofindit/listing-details.php">
    //                   <span class="la la-glass"></span>Restaurant
    //                 </a>
    //               </div>
    //             </li>
    //           </ul>

    //           <h1>KFC Sargodha</h1>
    //           <p class="subtitle">Best place for delicious foods</p>
    //         </div>
    //         <div class="col-lg-4 col-md-5 d-flex align-items-end justify-content-start justify-content-md-end">
    //           <div class="atbd_listing_action_area">
    //             <div class="atbd_action atbd_save">
    //               <div class="action_button">
    //                 <a
    //                   href="http://localhost/gofindit/listing-details.php"
    //                   class="atbdp-favourites"
    //                 >
    //                   <span class="la la-heart-o"></span> Save
    //                 </a>
    //               </div>
    //             </div>
    //             <div class="atbd_action atbd_share dropdown">
    //               <span
    //                 class="dropdown-toggle"
    //                 id="social-links"
    //                 data-toggle="dropdown"
    //                 aria-haspopup="true"
    //                 aria-expanded="false"
    //                 role="menu"
    //               >
    //                 <span class="la la-share"></span>Share
    //               </span>
    //               <div
    //                 class="atbd_director_social_wrap dropdown-menu"
    //                 aria-labelledby="social-links"
    //               >
    //                 <ul class="list-unstyled">
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-facebook-f color-facebook"></span>
    //                       Facebook
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-twitter color-twitter"></span>
    //                       Twitter
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-pinterest-p color-pinterest"></span>
    //                       Pinterest
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-google-plus-g color-gplus"></span>
    //                       Google Plus
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-linkedin-in color-linkedin"></span>
    //                       LinkedIn
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-tumblr color-tumblr"></span>Tumblr
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="http://localhost/gofindit/listing-details.php"
    //                       target="_blank"
    //                     >
    //                       <span class="fab fa-vk color-vk"></span>VKontakte
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>

    //             <div class="atbd_action atbd_report">
    //               <div class="action_button">
    //                 <a
    //                   href="http://localhost/gofindit/listing-details.php"
    //                   data-toggle="modal"
    //                   data-target="#atbdp-report-abuse-modal"
    //                 >
    //                   <span class="la la-flag-o"></span> Report
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       class="modal fade"
    //       id="atbdp-report-abuse-modal"
    //       tabindex="-1"
    //       role="dialog"
    //       aria-hidden="true"
    //       aria-labelledby="atbdp-report-abuse-modal-label"
    //     >
    //       <div class="modal-dialog modal-dialog-centered" role="document">
    //         <div class="modal-content">
    //           <form
    //             action="http://localhost/"
    //             id="atbdp-report-abuse-form"
    //             class="form-vertical"
    //           >
    //             <div class="modal-header">
    //               <h3 class="modal-title" id="atbdp-report-abuse-modal-label">
    //                 Report Abuse
    //               </h3>
    //               <button type="button" class="close" data-dismiss="modal">
    //                 <span aria-hidden="true">×</span>
    //               </button>
    //             </div>
    //             <div class="modal-body">
    //               <div class="form-group">
    //                 <label for="atbdp-report-abuse-message" class="not_empty">
    //                   Your Complaint<span class="atbdp-star">*</span>
    //                 </label>
    //                 <textarea
    //                   class="form-control"
    //                   id="atbdp-report-abuse-message"
    //                   rows="4"
    //                   placeholder="Message..."
    //                   required=""
    //                 ></textarea>
    //               </div>
    //             </div>
    //             <div class="modal-footer">
    //               <button
    //                 type="button"
    //                 class="btn btn-danger btn-sm"
    //                 data-dismiss="modal"
    //               >
    //                 Close
    //               </button>
    //               <button type="submit" class="btn btn-secondary btn-sm">
    //                 Submit
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       class="modal fade"
    //       id="moda_claim_listing"
    //       tabindex="-1"
    //       role="dialog"
    //       aria-labelledby="claim_listing_label"
    //       aria-hidden="true"
    //     >
    //       <div
    //         class="modal-dialog modal-lg modal-dialog-centered"
    //         role="document"
    //       >
    //         <div class="modal-content">
    //           <div class="modal-header">
    //             <h5 class="modal-title" id="claim_listing_label">
    //               <i class="la la-check-square"></i> Claim This Listing
    //             </h5>
    //             <button
    //               type="button"
    //               class="close"
    //               data-dismiss="modal"
    //               aria-label="Close"
    //             >
    //               <span aria-hidden="true">×</span>
    //             </button>
    //           </div>
    //           <div class="modal-body">
    //             <form action="http://localhost/">
    //               <div class="form-group">
    //                 <div class="row">
    //                   <div class="col-md-6">
    //                     <input
    //                       type="text"
    //                       placeholder="Your Name"
    //                       class="form-control"
    //                       required=""
    //                     />
    //                   </div>
    //                   <div class="col-md-6">
    //                     <input
    //                       type="email"
    //                       class="form-control"
    //                       placeholder="Email Address"
    //                       required=""
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div class="form-group">
    //                 <div class="row">
    //                   <div class="col-md-6">
    //                     <input
    //                       type="text"
    //                       class="form-control"
    //                       placeholder="Phone Number"
    //                       required=""
    //                     />
    //                   </div>
    //                   <div class="col-md-6">
    //                     <input
    //                       type="url"
    //                       class="form-control"
    //                       placeholder="Listing URL"
    //                       required=""
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div class="form-group">
    //                 <div class="row">
    //                   <div class="col-lg-12">
    //                     <textarea
    //                       class="form-control"
    //                       rows="6"
    //                       placeholder="Provie Listing Information"
    //                       required=""
    //                     ></textarea>
    //                     <button type="submit" class="btn btn-secondary">
    //                       Submit Query
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <></>
  );
};

export default Listing;

// <div className="bg-[#f5f7fc] w-full h-full flex flex-row justify-between">
//   <div className="">
//     <div className="bg-[#FFF] ">
//       <div className="flex flex-row">
//         <GrDocumentText color="#9299b8" size={25} />
//         <h4>Listing Details</h4>
//       </div>
//       <div class="border-b border-gray-500"></div>
//         <p>
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa
//           kequi officia deserunt mollit anim id est laborum. Sed ut
//           perspiciatis unde omnis iste natus error sit voluptatem accusan
//           tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae
//           abillo was inventore veritatis keret quasi aperiam architecto
//           beatae vitae dicta sunt explicabo. Nemo ucxqui officia voluptatem
//           accu santium doloremque laudantium, totam rem ape dicta sunt
//           explicabo. Nemo enim ipsam voluptatem quia voluptas.
//         </p>
//     </div>
//   </div>
//   <div className=""></div>
// </div>
