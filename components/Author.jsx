import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-90">
            <div className="absolute left-0 right-0 -top-14">
                <Image alt={author.name} height="100px" width="100px" src={author.photo.url}
                className="align-middle rounded-full" unoptimized />
            </div>
            <h3 className="text-white my-4 text-2xl font-bold font-chakra tracking-wide">{author.name}</h3>
            <p className="text-white font-fira text-lg tracking-wide">{author.bio}</p>
        </div>
    )
}

export default Author