import { useState,useEffect } from 'react'
import api from '../axios/dataURL.js'
import '../App.css'
import './ViewRestaurant.css'
import AddButton from '../UI/Button.js'
import { useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import styled  from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const RattingIcon = styled(StarIcon)`
      color:#ff4e4e;
      margin:10px 0;
`;


function ViewRestaurant() {
  const [restaurantDetails,setRestaurantDetails] = useState([]);

  useEffect(() =>{
     const getRestaurantDetails = async()=>{
      try{
        const response = await api.get('/restaurantName');
      setRestaurantDetails(response.data)
      }
      catch(err){
      if(err.response){
        console.log(err.response.status)
      }
    }
    }

    getRestaurantDetails();
  },[])  

  const navigate = useNavigate()

  const navigateAddRestaurant = () => navigate('/add-restaurant')

  const navigateViewRestaurant = (id) => navigate(`/add-restaurant/${id}`)

  return (
    <div className='help-page'>
      <div className='add-restaurant-view'>
      <AddButton onClick={navigateAddRestaurant}> Add restaurant </AddButton>
      </div>
        <div className='container'>
          {
            restaurantDetails.length>0 ? 
              restaurantDetails.map((data)=>{
                 return <div className='card' key={data.id}>
          <img  className='food-img' src={data.restaurantPhoto} alt={data.name} />
        <h1 className='restaurant-name'>{data.name} </h1>
        <span className='restaurant-des'>{data.description.length<15?data.description:`${data.description.slice(0,15)}...`}</span>
        <div className='flex'>
          <RattingIcon/>
          <span className='ratting'>{data.rating}</span>
          <Button
            startIcon={<EditIcon/>}
            variant="outlined"
            sx={{ 
              "backgroundColor": 'white',
              "color":"#ff4e4e",
              "margin-left": '49%',
              "margin-bottom": '3px',
              "font-size": '10px',
              "border":'1px solid #ff4e4e',
              ":hover":{
                "backgroundColor": 'white',
                "color":"#ff4e4e",
                "border":'1px solid #ff4e4e',
              }
              }}
              onClick={()=>navigateViewRestaurant(data.id)}
          > Edit
            </Button>
        </div>
        </div>
              }) :

            <p>No Restaurant Found</p>
          }
         
      </div>
      </div>
  )
}

export default ViewRestaurant