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
import burgerIcon from './assets/icon-hamburger.svg'


function App() {
  const [datas, setDatas] = useState(data)
  const [burger, setBurger] = useState('hidden')
  const [check, setCheck] = useState(false)

  const burgerfunc = () => {
    setCheck(!check)

  }
  return (
    <React.StrictMode >
      <header className='w-full '>
        <div className='flex justify-between py-4 px-6'>
          <h2>PLANETS</h2>
          <div onClick={burgerfunc} className='sm:block lg:hidden  absolute right-6'>
            <img src={burgerIcon} alt="" />
          </div>
        </div>


        <ul className={!check ? 'flex flex-col gap-1 bg-[#070724] w-full h-screen' : 'hidden'}>
          {datas.map(link => {
            console.log(link);
            return (
              <div className='flex gap-1' key={link.color}>
                <div className={link.color + ' ' + "my-5 mx-5"}></div>
                <Link className='text-white py-5 text-sm ' to={`/${link.name}`}>{link.name}</Link>
              </div>

            )
          })}
        </ul>

        <ul className='gap-2 max-sm:hidden lg:flex '>
          {datas.map(link => {
            return (
              <Link className='text-white' key={link.name} to={`/${link.name}`}>{link.name}</Link>
            )
          })}
        </ul>
      </header >

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
