import React from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
  const [images, setimages] = useState({
    1 : null,
    2 : null,
    3 : null,
    4 : null,

  })

  const [inputs, setinputs] = useState({
    roomtType : '',
    pricePerNight : 0,
    amenities:{
      'Free Wifi' : false,
      'Free Breakfast' : false,
      'Free Service' : false,
      'Mountain View' : false,
      'Pool Access' : false,
      

    }
    
  })
  return (
    <form>
      <Title 
        align="left" 
        font="outfit" 
        title="Add Room" 
        subtitle="Fill in the details to add a new room to your hotel. Provide accurate information to ensure a seamless experience for your guests."
      />
      <p className='text-gray-800 not-visited:mt-10' >Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key)=>(
          <label htmlFor={`roomImage${key}`} key={key}>
            <img 
            className='max-h-13 cursor-pointer opacity-80'
            
            src={images[key] ? URL.createObjectURL(images[key])  : assets.uploadArea} alt="" />
            <input type="file" />
          </label>
        ))}

      </div>
    </form>
  )
}

export default AddRoom
