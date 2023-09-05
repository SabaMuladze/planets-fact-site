import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import burgerIcon from '/assets/icon-hamburger.svg'


const Header = ({ data, color }) => {
  const [datas, setDatas] = useState(data)
  const [check, setCheck] = useState(true)

  const burgerfunc = () => {
    setCheck(!check)
  }
  return (
    <header className={!check ? 'w-full min-h-screen ' : 'w-full '}>
      <div className='flex max-md:justify-between border-b max-md:border-solid border-1 border-gray-600 md:justify-center py-4 px-6 mb-5 md:border-none lg:justify-between lg:border-solid  lg:px-8'>
        <Link className='font-[Antonio,sans-serif] cursor-pointer text-[28px] text-white' to={'/Mercury'}>Planets</Link>
        <ul className='gap-8 max-lg:hidden lg:flex items-center'>
          {datas.map(link => {
            return (
              <Link className='text-white font-sans uppercase opacity-75' key={link.name} to={`/${link.name}`}>{link.name}</Link>
            )
          })}
        </ul>
        <div onClick={burgerfunc} className='sm:block md:hidden  absolute right-6 top-7'>
          <img src={burgerIcon} alt="" />
        </div>
      </div>
      <ul className='gap-8 max-md:hidden md:flex items-center justify-center border-b border-solid border-1 border-gray-600 pb-5 lg:hidden'>
        {datas.map(link => {
          return (
            <Link className='text-white font-sans uppercase opacity-75' key={link.name} to={`/${link.name}`}>{link.name}</Link>
          )
        })}
      </ul>
      <ul className={!check ? 'flex flex-col gap-1 bg-[#070724] w-full h-screen absolute md:hidden lg:hidden' : 'hidden'}>
        {datas.map(link => {
          return (
            <div className='flex gap-1' key={link.name}>
              <div className={"humburger-div"}></div>
              <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/${link.name}`}>{link.name}</Link>
            </div>

          )
        })}
      </ul>
    </header >
  )
}

export default Header