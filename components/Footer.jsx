import React from 'react'

const Footer = () => {
    return (
        <div className="bg-white rounded-full">
            <h1 className="text-center mt-9 pt-4 font-bakbak text-4xl transition duration-500 hover:text-red-800 hover:scale-110">
                <a href="/">BLOGGER</a>
            </h1>
           <div>
               <h2 className='mt-3 pb-3 text-center text-2xl font-hind'> 
                    A web application created by{' '}
                    <a href="https://swastik-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="transition duration-500 hover:scale-105 hover:text-blue-800">SWASTIK</a>
               </h2>
               <h3 className='mt-1 pb-3 text-center text-2xl font-hind transition duration-500 hover:scale-105'>
                    <a href="https://github.com/swastik58/blogger" target="_blank" rel="noopener noreferrer" className="transition duration-500 hover:text-green-800">GITHUB SOURCE CODE</a>
               </h3>
            </div>
        </div>
    )
}

export default Footer
