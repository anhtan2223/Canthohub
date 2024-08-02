import React from 'react'
import Card from '@/app/ui/Home/vieclam/Card'
import {jobPostSeeding} from "@data"

export default function RelateJob() {
  return (<>
    <div className='bg-white border border-border-color rounded-lg dark:text-dark-text dark:bg-dark-secondary dark:border-dark p-3'>
        <p className='text-lg font-bold my-2'>Liên quan</p> 
        <Card post={jobPostSeeding}></Card>
        <Card post={jobPostSeeding}></Card>
        <Card post={jobPostSeeding}></Card>
    </div>
  </>
  )
}
