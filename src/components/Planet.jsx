const Planet = ({ data }) => {
    return (
        <main>
            <div className="flex items-center justify-center m-0 mt-3 max-lg: max-h-[400px]">
                <img src={data.images.planet} className=" max-lg:scale-50  lg:scale-75 " alt={data.name} />
            </div>

            <div className="max-md:flex flex-col justify-center items-center px-6  md:hidden">
                <h1 className='font-serif text-[40px] uppercase '>{data.name}</h1>
                <p className="text-center font-sans mt-4 leading-6 font-normal">{data.overview.content}</p>
                <p className="font-sans mt-7 opacity-75">Source: <a className="font-sans underline decoration-1" target="_blank" href={data.overview.source}>Wikipedia</a></p>
            </div>


        </main>
    )
}

export default Planet