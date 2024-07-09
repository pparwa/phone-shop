import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function ProductLoadung() {
  return (
    <Skeleton style={{width:'200px',borderRadius:"10px",height:"35vh",boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}/>
  )
}
