import React, { ReactNode } from 'react'

const Grid = ({children}:{children:ReactNode}) => {
  return (
    <>
    
    <div className='wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 my-[50px] space-x-4 mx-auto'>
    {/* <div className='w-full xl:w-[270px] h-[350px] border-2 border-gray-500'>
    </div>    */}
    {children}
    
    </div>
    
    </>
  )
}

export default Grid
