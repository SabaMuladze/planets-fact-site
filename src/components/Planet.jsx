const Planet = ({ data }) => {
    return (
        <main>
            <div className="flex items-center justify-center m-0 mt-3 max-lg: max-h-[400px]">
                <img src={data.images.planet} className=" max-lg:scale-50  lg:scale-75 " alt={data.name} />
            </div>

            <div className="max-md:flex justify-center uppercase text-[40px] md:hidden">
                <h1 className='font-serif'>{data.name}</h1>
            </div>


        </main>
    )
}

export default Planet