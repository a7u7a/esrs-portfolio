import React, { Suspense } from 'react'
import Main from '@/components/work/main'
const WorkPage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <div>
        <Main />
      </div>
    </Suspense>
  )
}

export default WorkPage