import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from './compounts/card'
import Header from './compounts/header'

const Layout = () => {
  return (

    <>
    <Card/>
    <Outlet/>
    </>
  )
}

export default Layout
