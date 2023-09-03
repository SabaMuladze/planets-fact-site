import React from 'react'
import { useState } from 'react'
import { Link, Navigate, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import data from '../data.json'
import { list } from 'postcss'
import Mercury from './pages/Mercury'
import Earth from './pages/Earth'
import Jupiter from './pages/Jupiter'
import Neptune from './pages/Neptune'
import Saturn from './pages/Saturn'
import Venus from './pages/Venus'
import Uranus from './pages/Uranus'
import Mars from './pages/Mars'
import Header from './components/Header'
import Planet from './components/Planet'


function App() {
  const [datas, setDatas] = useState(data)
  return (
    <React.StrictMode >
      <Header data={data} />

      <Routes >
        <Route path='/' element={<Navigate to={'/Mercury'} />} />
        <Route path='/Mercury' element={<Mercury planet={<Planet data={data[0]} />} />} />
        <Route path='/Earth' element={<Earth planet={<Planet data={data[2]} />} />} />
        <Route path='/Venus' element={<Venus planet={<Planet data={data[1]} />} />} />
        <Route path='/Jupiter' element={<Jupiter planet={<Planet data={data[4]} />} />} />
        <Route path='/Neptune' element={<Neptune planet={<Planet data={data[7]} />} />} />
        <Route path='/Saturn' element={<Saturn planet={<Planet data={data[5]} />} />} />
        <Route path='/Uranus' element={<Uranus planet={<Planet data={data[6]} />} />} />
        <Route path='/Mars' element={<Mars planet={<Planet data={data[3]} />} />} />
      </Routes>



    </React.StrictMode >
  )
}

export default App
