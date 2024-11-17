import React, { Suspense } from 'react'
import MainWorkPage from '@/components/work/main'

const WorkPage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <MainWorkPage />
    </Suspense>
  )
}

export default WorkPage