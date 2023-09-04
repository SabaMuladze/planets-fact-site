const Planet = ({ data }) => {
    return (
        <main>
            <div className="flex items-center justify-center m-0">
                <img src={data.images.planet} className=" max-lg:scale-50  lg:scale-75 " alt={data.name} />
            </div>


        </main>
    )
}

export default Planet