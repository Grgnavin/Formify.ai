import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <div className='border-b'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto py-2'>
                <Logo />
                <div>
                    <Button variant={'link'}>Dashboard</Button>
                    {/* Please add a Profile button */}
                    <Button className='rounded-full'>P</Button>
                </div>
            </nav>
        </div>
        {children}
    </div>
  )
}

export default layout