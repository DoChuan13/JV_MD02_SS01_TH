import React from 'react';
import Rolex from '../assets/pictures/rolex.jpg'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function User() {
    const navigate = useNavigate()
    const [pictureArr, SetPictureArr] = useState([
        {
            id: 1,
            img: Rolex,
            name: 'Rolex 01',
            price: 100000
        },
        {
            id: 2,
            img: Rolex,
            name: 'Rolex 02',
            price: 200000
        },
        {
            id: 3,
            img: Rolex,
            name: 'Rolex 03',
            price: 300000
        },
        {
            id: 4,
            img: Rolex,
            name: 'Rolex 04',
            price: 400000
        },
        {
            id: 5,
            img: Rolex,
            name: 'Rolex 05',
            price: 100000
        },
        {
            id: 6,
            img: Rolex,
            name: 'Rolex 06',
            price: 200000
        },
        {
            id: 7,
            img: Rolex,
            name: 'Rolex 07',
            price: 300000
        },
        {
            id: 8,
            img: Rolex,
            name: 'Rolex 08',
            price: 400000
        }
    ])

    let elementProduct = pictureArr.map((picture, index) => {
        return < div key={index}>
            <div className='productDetail'>
                <img src={Rolex} />
                <p>Name: {picture.name}</p>
                <p>Price: {picture.price}</p>
                <button onClick={() => navigate({ pathname: 'productdetail', search: `?id=${picture.id}` })}>Detail</button>
            </div>
        </div>
    })

    return (
        <>
            <main>
                <h1>User Page</h1>
                <div className='user'>
                    {elementProduct}
                </div>
            </main>
        </>
    )
};

export default User
