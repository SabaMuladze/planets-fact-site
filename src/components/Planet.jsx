const Planet = ({ data }) => {
    return (
        <main>
            <div className="flex items-center justify-center m-0  max-lg: max-h-[400px]">
                <img src={data.images.planet} className=" max-lg:scale-50  lg:scale-75 " alt={data.name} />
            </div>

            <div className="max-md:flex flex-col justify-center items-center px-6  md:hidden">
                <h1 className='font-serif text-[40px] uppercase '>{data.name}</h1>
                <p className="text-center font-sans mt-4 leading-6 font-normal">{data.overview.content}</p>
                <p className="font-sans mt-7 opacity-75">Source: <a className="font-sans underline decoration-1" target="_blank" href={data.overview.source}>Wikipedia</a></p>
            </div>

            <div className="flex max-md:flex-col max-md:items-center px-6 gap-3 mt-7 pb-5 ">
                <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center">
                    <p className="font-sans opacity-75">ROTATION TIME</p>
                    <p className="font-serif text-xl ">{data.rotation}</p>
                </div>
                <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center">
                    <p className="font-sans opacity-75">REVOLUTION TIME</p>
                    <p className="font-serif text-xl ">{data.revolution}</p>
                </div>
                <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center">
                    <p className="font-sans opacity-75">RADIUS</p>
                    <p className="font-serif text-xl ">{data.radius}</p>
                </div>
                <div className="flex justify-between w-full px-6 py-4 border-[1px]  border-solid border-white/50 items-center">
                    <p className="font-sans opacity-75">AVERAGE TEMP.</p>
                    <p className="font-serif text-xl ">{data.temperature}</p>
                </div>
            </div>


        </main>
    )
}

export default Planet