import React from 'react'
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p className='bg-orange-300'>This is the navbar for Albun Info </p>
        {children}
    </div>
  )
}

export default Layout