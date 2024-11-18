import React, { Suspense } from 'react'
import WorkPageMain from '@/components/work/main'

const WorkPage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <WorkPageMain />
    </Suspense>
  )
}

export default WorkPage