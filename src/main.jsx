import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <h2>Main Page</h2> 
        <Link to='/product'>
            Product
        </Link><br/>
        <Link to='/about'>
            About
        </Link>
    </div>
  )
}

export default Main