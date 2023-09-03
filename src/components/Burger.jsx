import { Link, Navigate, Route, Routes } from 'react-router-dom'

const Burger = (props) => {
    return (
        <ul className='gap-2 flex-col'>
            {props.datas.map(link => {
                return (
                    <Link className='text-white' key={link.name} to={`/${link.name}`}>{link.name}</Link>
                )
            })}
        </ul>
    )
}

export default Burger