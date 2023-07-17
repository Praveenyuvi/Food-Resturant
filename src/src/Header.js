import React from 'react'
import { BiSolidOffer, BiSearchAlt, BiHelpCircle, BiCart } from "react-icons/bi"
import { IoFastFoodOutline } from 'react-icons/io5'
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Cart from './Cart'
import Serach from './Serach'
import Help from './Help'
import Offers from './Offers'
import Home from './Home/Home'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from  'react-redux';
import ViewRestaurant from './view-resturant/ViewRestaurant'
import AddRestaurant from './AddResturant/AddRestaurant'

function Header() {
  const {totalItemLength} = useSelector((state)=>state.cart);

  return (
    <>
      <header className="header">
        <div className="app-name">
          <IoFastFoodOutline className='food-icon' />
          <span className='app-label'>
            Food Court
          </span>
        </div>
        <nav className="side-nav">
          <li>
            <BiSearchAlt className='icon' />
            <Link to="/search" >search </Link>
          </li>
          <li>
            <BiSolidOffer className='icon' />
            <Link to="/offer">Offer</Link>
          </li>
          <li>
            <BiHelpCircle className='icon' />
            <Link to="/help" >Help </Link>
          </li>
          <li>
            <Badge badgeContent={0}  color="info" showZero>
              <ShoppingCartIcon color="action" />
            </Badge>
            <Link className="icon-name" to="cart" >Cart </Link>
          </li>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/search' element={<Serach />} ></Route>
        <Route path='/offer' element={<Offers />} ></Route>
        <Route path='/help' element={<Help />} ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
        <Route path="/view-restaurant" element={<ViewRestaurant />}></Route>
        <Route path="/add-restaurant" element={<AddRestaurant />}></Route>
        <Route path="/add-restaurant/:id" element={<AddRestaurant />}></Route>
      </Routes>
    </>
  )
}

export default Header