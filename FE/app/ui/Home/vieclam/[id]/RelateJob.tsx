import React from 'react'
import Card from '@/app/ui/Home/vieclam/Card'


export default function RelateJob() {
  return (<>
    <div className='bg-white border border-border-color rounded-lg dark:text-dark-text dark:bg-dark-secondary dark:border-dark p-3'>
        <p className='text-lg font-bold my-2'>Liên quan</p> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
  </>
  )
}
