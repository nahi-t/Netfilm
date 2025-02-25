import React, { Component } from 'react'
import Header from '../../Componet/Header/Header'
import Footer from '../../Componet/Footer/Footer'
import Banner from '../../Componet/Banner/Banner'
import Rowlist from '../../Componet/Rows/Rowlist/Rowlist'



export default class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <Rowlist/>
        <Footer/>
       
      </>
    )
  }
}
