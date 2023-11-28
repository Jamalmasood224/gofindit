import React from 'react'
import Header from '../components/header/Header'
const Applayout = ({children}) => {
  return (
    <React.Fragment>
        <Header />
        {children}
    </React.Fragment>
  )
}

export default Applayout