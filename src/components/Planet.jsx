import { useState, useRef } from "react"
import Header from '../components/Header'

const Planet = ({ data, color, colornv }) => {
    const [active, setActive] = useState(true)
    const [planetImg, setPlanetImg] = useState(data.images.planet)
    const [information, setInformation] = useState(data.overview.content)
    const [surfaceImg, setSurfaceImg] = useState('hidden')
    // const [buttonColor, setButtonColor] = useState("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70")
    const [btn1, setBtn1] = useState("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70" + ' ' + color)
    const [btn2, setBtn2] = useState("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70")
    const [btn3, setBtn3] = useState("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70")
    const [btnsborder, setBtnsBorder] = useState(`font-sans  pb-5 border-b-[5px] border-solid ` + ' ' + colornv)
    const [btnsborder2, setBtnsBorder2] = useState(`font-sans  pb-5 `)
    const [btnsborder3, setBtnsBorder3] = useState(`font-sans  pb-5 `)










    function showData(text, btn) {
        setSurfaceImg('hidden')
        setActive(true)
        setBtn1("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70")
        setBtn2("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70")
        setBtn3("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70")
        setBtnsBorder('font-sans  pb-5')
        setBtnsBorder2('font-sans  pb-5')
        setBtnsBorder3('font-sans  pb-5')

        if (active === true) {
            if (text === 'OVERVIEW') {
                setInformation(data.overview.content)
                setPlanetImg(data.images.planet)
                setSurfaceImg('hidden')
                setBtn1("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70" + " " + color)
                setBtnsBorder(`font-sans  pb-5 border-b-[5px] border-solid ` + ' ' + colornv)
            }
            else if (text === 'STRUCTURE' || text === 'INTERNAL STRUCTURE') {
                setInformation(data.structure.content)
                setPlanetImg(data.images.internal)
                setSurfaceImg('hidden')
                setBtn2("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70" + " " + color)
                setBtnsBorder2(`font-sans  pb-5 border-b-[5px] border-solid ` + ' ' + colornv)
            }
            else if (text === 'SURFACE' || text === 'SURFACE GEOLOGY') {
                setInformation(data.geology.content)
                setPlanetImg(data.images.planet)
                setSurfaceImg(' max-lg:scale-[25%]  lg:scale-[50%] absolute bottom-[-120px] xl:bottom-[-50px]')
                setBtn3("text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px] xl:lg:w-[350px] lg:hover:opacity-70" + " " + color)
                setBtnsBorder3(`font-sans  pb-5 border-b-[5px] border-solid ` + ' ' + colornv)
            }

        }
    }
    return (
        <>
            <div className="w-full flex justify-center border-b-[1px] border-solid  border-gray-600 md:hidden ">
                <ul className="flex gap-10">
                    <li className={btnsborder}><button onClick={(e) => showData(e.target.textContent, e.target)}>OVERVIEW</button></li>
                    <li className={btnsborder2}><button onClick={(e) => showData(e.target.textContent, e.target)}>STRUCTURE</button></li>
                    <li className={btnsborder3}><button onClick={(e) => showData(e.target.textContent, e.target)}>SURFACE</button></li>
                </ul>
            </div>
            <main className="xl:px-[165px] xl:mt-10 md:px-[40px] sm:px-[25px]">
                {/* <div className="flex flex-col  items-center justify-center  m-0  max-lg:max-h-[400px] relative md:hidden">
                    <img src={planetImg} className=" max-lg:scale-50  lg:scale-75 xl:scale-100 " alt={data.name} />
                    <img className={surfaceImg} src={data.images.geology} alt="" />
                </div> */}
                <div className="xl:flex xl:justify-between">
                    <div className="flex flex-col  items-center justify-center  m-0  max-lg:max-h-[400px] relative xl:w-[70%] xl:h-[640px]">
                        <img src={planetImg} className=" max-lg:scale-50  lg:scale-75 xl:scale-100 xl:mb-4 " alt={data.name} />
                        <img className={surfaceImg} src={data.images.geology} alt="" />
                    </div>
                    <div className="max-md:hidden flex justify-between items-center xl:flex-col xl:w-[350px] ">
                        <div className="lg:w-[40%] xl:w-full">
                            <div className="max-md:flex flex-col justify-center items-start px-6 xl:px-0 ">
                                <h1 className='font-serif text-[40px] uppercase lg:text-[80px]'>{data.name}</h1>
                                <p className="text-start font-sans mt-4 leading-6 font-normal ">{information}</p>
                                <p className="font-sans mt-7 opacity-75">Source: <a className="font-sans underline decoration-1" target="_blank" href={data.overview.source}>Wikipedia</a></p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col justify-center gap-4 pt-5 xl:pb-20">
                                <button className={btn1} onClick={(e) => showData(e.target.textContent, e.target)}>OVERVIEW</button>
                                <button className={btn2} onClick={(e) => showData(e.target.textContent, e.target)}>INTERNAL STRUCTURE</button>
                                <button className={btn3} onClick={(e) => showData(e.target.textContent, e.target)}>SURFACE GEOLOGY</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-md:flex flex-col justify-center items-center px-6  md:hidden">
                    <h1 className='font-serif text-[40px] uppercase '>{data.name}</h1>
                    <p className="text-center font-sans mt-4 leading-6 font-normal">{information}</p>
                    <p className="font-sans mt-7 opacity-75">Source: <a className="font-sans underline decoration-1" target="_blank" href={data.overview.source}>Wikipedia</a></p>
                </div>

                <div className="flex max-md:flex-col max-md:items-center  gap-3 mt-7 pb-5  max-sm:px-5">
                    <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center md:flex-col md:justify-normal md:items-start lg:py-8 lg:pt-6">
                        <p className="font-sans opacity-75 text-[10px] lg:text-[12px]">ROTATION TIME</p>
                        <p className="font-serif text-xl md:text-2xl lg:text-4xl ">{data.rotation}</p>
                    </div>
                    <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center md:flex-col md:justify-normal md:items-start lg:py-8 lg:pt-6">
                        <p className="font-sans opacity-75 text-[10px] lg:text-[12px]">REVOLUTION TIME</p>
                        <p className="font-serif text-xl md:text-2xl lg:text-4xl ">{data.revolution}</p>
                    </div>
                    <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center md:flex-col md:justify-normal md:items-start lg:py-8 lg:pt-6">
                        <p className="font-sans opacity-75 text-[10px] lg:text-[12px]">RADIUS</p>
                        <p className="font-serif text-xl md:text-2xl lg:text-4xl ">{data.radius}</p>
                    </div>
                    <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center md:flex-col md:justify-normal md:items-start lg:py-8 lg:pt-6">
                        <p className="font-sans opacity-75 text-[10px] lg:text-[12px]">AVERAGE TEMP.</p>
                        <p className="font-serif text-xl md:text-2xl lg:text-4xl ">{data.temperature}</p>
                    </div>
                </div>


            </main>
        </>
    )

}
export default Planet