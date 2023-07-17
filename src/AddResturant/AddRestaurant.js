import './AddRestaurant.css'
import Form from '../UI/Form';
import FormControl from '../UI/FormControl';
import Button from '../UI/Button.js'
import {useForm} from 'react-hook-form'
import api from '../axios/dataURL'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function AddRestaurant() {
const navigate = useNavigate();
const {id} =useParams();
const {register,handleSubmit,formState,setValue} = useForm();
const {errors} = formState
const [restaurantDetails,setRestaurantDetails]=useState([])

useEffect(()=>{
    const getRestaurantDetails=async()=>{
        let response
        if(id){
            response = await api.get(`/restaurantName/${id}`);
        }
        else {
            response = await api.get(`/restaurantName`);
        }
        setRestaurantDetails(response);
       Object.entries(response.data).forEach(([name,value])=>{
        setValue(name,value)
       })
    }
    getRestaurantDetails();
},[])



const submitRestaurant = async (data)=>{

    if(id){
        const dataRequest ={
            ...data
       }
        const response = await api.put(`/restaurantName/${id}`,dataRequest)
        if(response.status===200){
            navigate('/view-restaurant')
           }
    }
    else{
    const restaurantId=restaurantDetails.data[restaurantDetails.data.length-1].id
   const dataRequest ={
        id :restaurantId+1,
        ...data
   }
   const response = await api.post('/restaurantName',dataRequest)
   if(response.status===201){
    navigate('/view-restaurant')
   }
}
}


  return (
    <div className='help-page'>
        <Form onSubmit={handleSubmit(submitRestaurant)}>
           <FormControl>
           <label className={errors.name?'form-label-invalid':'form-label'}>Restaurant Name</label>
            <input className={errors.name?'form-input-invalid':'form-input'}
                {...register("name",
                    {
                        required:
                        {
                        value:true,
                        message:"This Field is required"
                        }
                    }
                )}
            />
            <span className='error-message'>{errors.name?.message}</span>
           </FormControl>

           <FormControl>
           <label className={errors.rating?'form-label-invalid':'form-label'}>Restaurant Ratting</label>
            <input className={errors.rating?'form-input-invalid':'form-input'}
                {...register("rating",
                    {
                        required:
                        {
                        value:true,
                        message:"This Field is required"
                        }
                    }
                )}
            />
            <span className='error-message'>{errors.rating?.message}</span>
           </FormControl>
            
           <FormControl>
           <label className={errors.deliveryTime?'form-label-invalid':'form-label'}>Restaurant Delivery Time</label>
            <input className={errors.deliveryTime?'form-input-invalid':'form-input'}
                {...register("deliveryTime",
                    {
                        required:
                        {
                        value:true,
                        message:"This Field is required"
                        }
                    }
                )}
            />
            <span className='error-message'>{errors.deliveryTime?.message}</span>
           </FormControl>

           <FormControl>
           <label className={errors.description?'form-label-invalid':'form-label'}>Restaurant Description</label>
            <input className={errors.description?'form-input-invalid':'form-input'}
                {...register("description",
                    {
                        required:
                        {
                        value:true,
                        message:"This Field is required"
                        }
                    }
                )}
            />
            <span className='error-message'>{errors.description?.message}</span>
           </FormControl>

           <FormControl>
           <label className={errors.restaurantPhoto?'form-label-invalid':'form-label'}>Restaurant Image</label>
            <input className={errors.restaurantPhoto?'form-input-invalid':'form-input'}
                {...register("restaurantPhoto",
                    {
                        required:
                        {
                        value:true,
                        message:"This Field is required"
                        }
                    }
                )}
            />
            <span className='error-message'>{errors.restaurantPhoto?.message}</span>
           </FormControl>
           
        
            <Button type="submit"> Submit</Button>
           
       
        </Form>
       </div>
  )
}

export default AddRestaurant