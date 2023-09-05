import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import burgerIcon from '/assets/icon-hamburger.svg'


const Header = ({ data }) => {
  const [datas, setDatas] = useState(data)
  const [check, setCheck] = useState(true)
  const burgerfunc = () => {
    setCheck(!check)
  }
  return (
    <header className={!check ? 'w-full h-scren' : 'w-full '}>
      <div className='flex max-md:justify-between border-b max-md:border-solid border-1 border-gray-600 md:justify-center px-6 mb-5 md:border-none lg:justify-between lg:border-solid  lg:px-8 max-md:py-4'>
        <Link className='font-[Antonio,sans-serif] flex items-center cursor-pointer text-[28px] text-white' to={'/Mercury'}>Planets</Link>
        <ul className='gap-8 max-lg:hidden lg:flex items-center'>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#419EBB] hover:border-t-4`} to={`/Mercury`}>Mercury</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#EDA249] hover:border-t-4`} to={`/Venus`}>Venus</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#6D2ED5] hover:border-t-4`} to={`/Earth`}>Earth</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#D14C32] hover:border-t-4`} to={`/Mars`}>Mars</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#D83A34] hover:border-t-4`} to={`/Jupiter`}>Jupiter</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#CD5120] hover:border-t-4`} to={`/Saturn`}>Saturn</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#1EC1A2] hover:border-t-4`} to={`/Uranus`}>Uranus</Link>
          </div>
          < div className='flex gap-1' >

            <Link className={`text-white text-sm font-sans font-bold tracking-wide uppercase  opacity-75 lg:py-[32px] border-t-4 border-transparent hover:border-solid hover:border-[#2D68F0] hover:border-t-4`} to={`/Neptune`}>Neptune</Link>
          </div>
        </ul>
        <div onClick={burgerfunc} className='sm:block md:hidden  absolute right-6 top-7'>
          <img src={burgerIcon} alt="" />
        </div>
      </div>
      <ul className='gap-8 max-md:hidden md:flex items-center justify-center border-b border-solid border-1 border-gray-600 pb-5 lg:hidden'>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Mercury`}>Mercury</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Venus`}>Venus</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Earth`}>Earth</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Mars`}>Mars</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Jupiter`}>Jupiter</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Saturn`}>Saturn</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Uranus`}>Uranus</Link>
        </div>
        < div className='flex gap-1' >
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Neptune`}>Neptune</Link>
        </div>
      </ul>
      <ul className={!check ? 'flex flex-col gap-1 bg-[#070724] w-full h-[90%] absolute z-50 border-solid border-b-white border-b-4 md:hidden lg:hidden' : 'hidden'}>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#DEF4FC]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Mercury`}>Mercury</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#F7CC7F]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Venus`}>Venus</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#545BFE]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Earth`}>Earth</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#FF6A45]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Mars`}>Mars</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#ECAD7A]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Jupiter`}>Jupiter</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#FCCB6B]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Saturn`}>Saturn</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#1EC1A2]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Uranus`}>Uranus</Link>
        </div>
        < div className='flex gap-1' >
          <div className={"humburger-div bg-[#497EFA]"}></div>
          <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/Neptune`}>Neptune</Link>
        </div>
      </ul>
    </header >
  )
}

export default Header


{/* <header className={!check ? 'w-full min-h-screen ' : 'w-full '}>
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
            < div className='flex gap-1' key={link.name} >
              <div className={"humburger-div"}></div>
              <Link className={`text-white py-5 text-sm font-sans font-bold tracking-wide uppercase  opacity-75`} to={`/${link.name}`}>{link.name}</Link>
            </div>

          )
        })}
      </ul>
    </header > */}