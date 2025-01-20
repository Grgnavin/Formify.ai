import React from 'react'
import GenerateFormInput from './GenerateFormInput'
import { Button } from './ui/button';
import { SuggestionText } from '@/types/UiTypes';

  const suggestBtnText: SuggestionText[] = [
    {
      label: "Job Application",
      text: "Develop a basic job application form that serves as a one-page solution form collecting essential information form applications."
    },
    {
      label: "Registration form",
      text: "Create a course form suitable form any school or institution"
    },
    {
      label: "Feedback form",
      text: "Develop a basic job application form that serves as a one-page solution form collecting essential information form applications."
    }
  ];

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
        <div className='grid grid-cols-4 gap-3'>
        {
          suggestBtnText.map((x: SuggestionText, idx: number) => (
            <Button key={idx} className='rounded-full h-10 shadow-sm' variant={'outline'}>{x.label}</Button>
          ))
        }
        </div>
    </section>
  )
}

export default HeroSection