import React from 'react'
import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
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


function App() {
  const [datas, setDatas] = useState(data)
  return (
    <React.StrictMode >
      <Header data={data} />
      {datas.map(data => {
        return (
          <div>
            <p>{data.overview}</p>
          </div>
        )

      })}

      <Routes>
        <Route path='/' element={<Navigate to={'/Mercury'} />} />
        <Route path='/Mercury' element={<Mercury />} />
        <Route path='/Earth' element={<Earth />} />
        <Route path='/Venus' element={<Venus />} />
        <Route path='/Jupiter' element={<Jupiter />} />
        <Route path='/Neptune' element={<Neptune />} />
        <Route path='/Saturn' element={<Saturn />} />
        <Route path='/Uranus' element={<Uranus />} />
        <Route path='/Mars' element={<Mars />} />
      </Routes>

    </React.StrictMode >
  )
}

export default App
