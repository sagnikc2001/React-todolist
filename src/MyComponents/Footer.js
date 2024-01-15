import React from 'react'

const Footer = () => {

  let FooterStyle = {
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    
    <footer className='bg-dark text-light py-3' style={FooterStyle}>
      <p className='text-center'>
          Copyright &copy; Sagnik Chakraborty
      </p>
    </footer>
  )
}

export default Footer
