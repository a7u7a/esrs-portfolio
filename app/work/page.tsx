import React, { Suspense } from 'react'
import Main from '@/components/work/main'
const WorkPage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Main />
    </Suspense>
  )
}

export default WorkPage