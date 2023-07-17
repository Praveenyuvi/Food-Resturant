import React from 'react'
import './Home.css'
import '../App.css'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const navigateViewRestaurant = () =>{
    
    navigate('/view-restaurant')
  }

  return (
    <div className='help-page'>
        <div className='container'>
          <div className='card' onClick={()=>navigateViewRestaurant()}>
          <img  className='food-img' src={require("../assests/order-online.jpg")} alt="order-online" />
        <h1>Order Online </h1>
        <span>Stay home and order to your doorstep</span>
        </div>
        

        <div className='card'>
          <img  className='food-img' src={require("../assests/order-online.jpg")} alt="order-online" />
        <h1>Order Online </h1>
        <span>Stay home and order to your doorstep</span>
        </div>

        <div className='card'>
          <img  className='food-img' src={require("../assests/order-online.jpg")} alt="order-online" />
        <h1>Order Online </h1>
        <span>Stay home and order to your doorstep</span>
        </div>
        </div>
    </div>
  )
}

export default Home