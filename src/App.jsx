import { useState } from 'react'
import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import FlashSales from './components/FlashSales';
import Category from './components/Category';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex">
      <Sidebar /> 
      <Carousel />
      </div>
      <FlashSales />
      <Category />
    </>
  )
}

export default App
