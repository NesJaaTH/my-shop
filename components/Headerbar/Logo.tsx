import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image
        src = "/logo.png"
        width = {50}
        height = {50}
        alt = "logo"
      />
      </div>
  )
}

export default Logo