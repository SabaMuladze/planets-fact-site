import { useState } from "react"

const Planet = ({ data }) => {
    const [active, setActive] = useState(true)
    const [planetImg, setPlanetImg] = useState(data.images.planet)
    const [information, setInformation] = useState(data.overview.content)
    const [surfaceImg, setSurfaceImg] = useState('hidden')

    function showData(text) {
        setSurfaceImg('hidden')
        setActive(false)
        setActive(true)
        if (active === true) {
            if (text === 'OVERVIEW') {
                setInformation(data.overview.content)
                setPlanetImg(data.images.planet)
                setSurfaceImg('hidden')

            }
            if (text === 'STRUCTURE' || text === 'INTERNAL STRUCTURE') {
                setInformation(data.structure.content)
                setPlanetImg(data.images.internal)
                setSurfaceImg('hidden')

            }
            if (text === 'SURFACE' || text === 'SURFACE GEOLOGY') {
                setInformation(data.geology.content)
                setPlanetImg(data.images.planet)
                setSurfaceImg(' max-lg:scale-[25%]  lg:scale-[50%] absolute bottom-[-120px]')
            }
            console.log(text);
        }

    }
    return (
        <>
            <div className="w-full flex justify-center border-b-[1px] border-solid  border-gray-600 pb-5 md:hidden">
                <ul className="flex gap-10">
                    <li className="font-sans"><button onClick={(e) => showData(e.target.textContent)}>OVERVIEW</button></li>
                    <li className="font-sans"><button onClick={(e) => showData(e.target.textContent)}>STRUCTURE</button></li>
                    <li className="font-sans"><button onClick={(e) => showData(e.target.textContent)}>SURFACE</button></li>
                </ul>
            </div>
            <main className="xl:px-[165px] md:px-[40px]">
                <div className="flex flex-col  items-center justify-center  m-0  max-lg: max-h-[400px] relative">
                    <img src={planetImg} className=" max-lg:scale-50  lg:scale-75 xl:scale-100 " alt={data.name} />
                    <img className={surfaceImg} src={data.images.geology} alt="" />
                </div>

                <div className="max-md:hidden flex justify-between items-center">
                    <div>
                        <div className="max-md:flex flex-col justify-center items-start px-6  ">
                            <h1 className='font-serif text-[40px] uppercase '>{data.name}</h1>
                            <p className="text-start font-sans mt-4 leading-6 font-normal ">{information}</p>
                            <p className="font-sans mt-7 opacity-75">Source: <a className="font-sans underline decoration-1" target="_blank" href={data.overview.source}>Wikipedia</a></p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col justify-center gap-4 ">
                            <button className="text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px]" onClick={(e) => showData(e.target.textContent)}>OVERVIEW</button>
                            <button className="text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px]" onClick={(e) => showData(e.target.textContent)}>INTERNAL STRUCTURE</button>
                            <button className="text-white leading-6 py-3 px-5 font-sans text-left border-[1px] border-white border-solid w-[290px]" onClick={(e) => showData(e.target.textContent)}>SURFACE GEOLOGY</button>
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