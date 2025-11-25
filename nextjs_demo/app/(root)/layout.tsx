import React from 'react'
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p className='bg-amber-200'>This is the navbar for all app</p>
        {children}
    </div>
  )
}

export default Layout