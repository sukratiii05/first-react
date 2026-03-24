import React from 'react'

const Header = (b) => {

    console.log(b)
  return (
    <>
    <h1> This is header component</h1>
    <h2>value of b is : {b.data}</h2>
    <a href='/'>abc</a>
    </>
  )
}

export default Header