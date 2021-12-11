import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories1 } from '../services'

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories1().then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-5 align-center">
            <h3 className="text-2xl mb-8 font-semibold border-b pb-4 text-center tracking-wider font-didact">
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="text-center cursor-pointer font-ubuntu text-xl tracking-wide block pb-3 mb-3 transition duration-500 hover:scale-110 hover:text-red-500">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
