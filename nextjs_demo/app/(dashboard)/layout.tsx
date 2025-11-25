import React from 'react'
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p className='bg-blue-300'>This is the navbar for Dashboard (users and analytics
            )</p>
        {children}
    </div>
  )
}

export default Layout