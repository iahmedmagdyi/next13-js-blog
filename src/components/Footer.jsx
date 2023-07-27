import React from 'react'

const Footer = () => {
    return (
        <div >
            <div className='md:hidden flex flex-col gap-8 items-center justify-center p-4 md:flex-row h-screen w-full text-white bg-black '>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='font-bold ' >About The App</h1>
                    <p className='text-center p-3 text-[#333] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum laboriosam at esse eaque, illum maiores, dolorum aperiam fugiat quas in hic ducimus tempore cumque quis unde voluptatibus aliquid numquam!</p>
                </div>
                <div className='flex flex-col gap-4 items-center text-[#333]'>
                    <h1 className='text-white font-bold'>Contacts</h1>
                    <span > phone:(+20)1551242830</span>
                    <span>github : iahmedmagdyi</span>
                    <span>email :ahmedmagdy7418@gmail.com</span>
                </div>
                <div className='flex flex-col gap-4 items-center text-[#333]'>
                    <h1 className='text-white font-bold'>Location</h1>
                    <span>Alexandria</span>
                    <span>Egypt</span>
                </div>
            </div>
            {/* footer in lage screen */}
            <div className='hidden md:px-16 lg:px-20px xl:px-40 lg:flex  flex-row items-center gap-15 justify-between w-full h-[calc(100vh-60vh)]  mt-10 pb-10'>
                <div className='flex flex-col gap-4 items-center w-[50%]'>
                    <h1 className='font-bold text-xl' >About The App</h1>
                    <p className='text-justify p-3 text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum laboriosam at esse eaque,oluptatibus aliquid numquam!</p>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center text-[#333] w-[50%]'>
                    <h1 className='text-black font-bold text-xl'>Contacts</h1>
                    <span > (+20)1551242830</span>
                    <span>https://github.com/iahmedmagdyi</span>
                    <span>ahmedmagdy7418@gmail.com</span>
                </div>
                <div className='flex flex-col gap-4 items-center text-[#333] w-[50%]'>
                    <h1 className='text-black font-bold text-xl mb-5' >Location</h1>
                    <span>Alexandria</span>
                    <span>Egypt</span>
                    <span></span>
                </div>
            </div>
        </div>


    )
}

export default Footer
