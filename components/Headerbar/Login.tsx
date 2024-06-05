import React from 'react'
import { Button } from '../ui/button'

const Login = () => {
  return (
    <div className="flex flex-row items-center">
      <Button className="mr-2 bg-muted text-white">Login</Button>
      <Button className="mr-2 bg-primary dark">Sign up</Button>
    </div>
  )
}

export default Login