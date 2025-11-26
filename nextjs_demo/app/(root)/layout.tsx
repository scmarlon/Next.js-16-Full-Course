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


// You can add more metadata properties as needed along with dynamic metadata generation.
//this is a static metadata example.. title and description is gonna be same for all pages under this layout.
export const metadata = {
  title: 'Next.js Demo App',
  description: 'A demo application built with Next.js',
}
//Also you can create a generateMetadata function to create dynamic metadata based on props or other data.
// export async function generateMetadata({params, searchParams}: any) {
//   // fetch data based on params or searchParams
//   return { title: 'Dynamic Title', description: 'Dynamic Description' }
// }  
