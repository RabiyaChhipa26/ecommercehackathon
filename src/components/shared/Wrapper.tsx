import React, { FC, ReactNode } from 'react'

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='lg:max-w-7xl sm:max-w-sm mx-auto px-3 md:px-16 '>
            {children}
        </div>
    )
}

export default Wrapper