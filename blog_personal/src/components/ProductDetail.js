import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import Rolex from '../assets/pictures/rolex.jpg'
import { useState } from 'react'


function ProductDetail() {
    const [search, setSearch] = useSearchParams()
    const usepara = useParams()
    let id = search.get("id") - 1;
    console.log(search, search.get("id"), usepara);
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

    return (
        <main>
            <div>
                <div className='user'>
                    <div className='productDetail'>
                        <img src={Rolex} />
                        <p>Name: {pictureArr[id].name}</p>
                        <p>Price: {pictureArr[id].price}</p>
                    </div>
                </div>
            </div >
        </main>
    )
};

export default ProductDetail
