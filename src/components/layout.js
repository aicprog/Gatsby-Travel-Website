
import * as React from "react"
import {useState} from 'react'
import Dropdown from "./Dropdown"
import Footer from "./footer"
import Header from "./header"
import { GlobalStyle } from "./styles/globalStyles"

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}



export default Layout
