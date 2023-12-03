import React from 'react'
import { hostedUIURL } from '../urls/hostedUI'

const Navigation = () => {
  return (
    <div>
      <a href={hostedUIURL}>
        Sign In / Sign Up
      </a>
    </div>
  ) 
}

export default Navigation