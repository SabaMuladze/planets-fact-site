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
      <header className={!check ? 'w-full min-h-screen ' : 'w-full '}>
        <div className='flex sm:justify-between md:justify-center py-4 px-6 mb-5 border-b border-solid border-1 border-gray-600 lg:px-8 lg:justify-between'>
          <h2 className='font-[Antonio,sans-serif] text-[28px]'>PLANETS</h2>
          <ul className='gap-8 max-lg:hidden lg:flex items-center'>
            {datas.map(link => {
              return (
                <Link className='text-white' key={link.name} to={`/${link.name}`}>{link.name}</Link>
              )
            })}
          </ul>
          <div onClick={burgerfunc} className='sm:block md:hidden  absolute right-6 top-7'>
            <img src={burgerIcon} alt="" />
          </div>
        </div>
        <ul className='gap-8 max-md:hidden md:flex items-center justify-center lg:hidden'>
          {datas.map(link => {
            return (
              <Link className='text-white' key={link.name} to={`/${link.name}`}>{link.name}</Link>
            )
          })}
        </ul>
        <ul className={!check ? 'flex flex-col gap-1 bg-[#070724] w-full h-screen absolute md:hidden lg:hidden' : 'hidden'}>
          {datas.map(link => {
            console.log(link);
            return (
              <div className='flex gap-1' key={link.color}>
                <div className={link.color + ' ' + "my-5 mx-5"}></div>
                <Link className={`text-white py-5 text-sm font-[League Spartan,sans-serif] font-bold tracking-wide uppercase`} to={`/${link.name}`}>{link.name}</Link>
              </div>

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
