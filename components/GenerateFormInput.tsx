import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const GenerateFormInput = () => {
  return (
    <div className='flex items-center gap-4 my-8'>
        <Input placeholder='Write a prompt to generate form' className='shadow-md dark:border dark:border-gray-500'/>
        <Button className='dark:text-black'>Generate Form</Button>
    </div>
  )
}

export default GenerateFormInput