import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4}) => {
  return (
    <div className='flex'>
       {Array(5).fill(0).map((_, index) => (
                              <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icon" />
                            ))}
    </div>
  )
}

export default StarRating
