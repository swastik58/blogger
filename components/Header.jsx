import Link from 'next/link';

import React, {useState, useEffect} from 'react'
import { getCategories } from '../services'

const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, []);
    
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block transition duration-500 hover:scale-110">
                    <Link href="/">
                        <span className="cursor-pointer tracking-wider font-bakbak font-bold text-5xl text-white">
                            BLOGGER
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle font-hind text-lg lg:text-xl text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:scale-105">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
