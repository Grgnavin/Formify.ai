import React from 'react'
import GenerateFormInput from './GenerateFormInput'

const HeroSection = () => {
  return (
    <section>
        <div className='relative'>
            {/* Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10'>
            </div>
            <div className='container mx-auto text-center mt-2 '>
                <h1 className='text-4xl font-bold'>Build AI-Driven Forms Effortlessly</h1>
                <p className='mt-4 text-lg'>Leverage the power of AI to create responsive and dynamic forms in minutes</p>
            </div>
        </div>
        <GenerateFormInput />
    </section>
  )
}

export default HeroSection