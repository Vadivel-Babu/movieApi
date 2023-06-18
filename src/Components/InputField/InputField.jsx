import React from 'react'

export function InputField({handleTitle}) {
  return (
     <form className='form'>
         <input 
          type="text" 
          placeholder='Search...' 
          name="lname" 
          className='input' 
          onChange={(e) => handleTitle(e.target.value)}
         />
      </form>
  )
}

