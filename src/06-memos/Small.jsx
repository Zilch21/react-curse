
import { memo } from'react'

export const Small = memo( ({counter = 0}) => {
  
    return (
    <>
      <small> {counter} </small>
    </>
  )
})

