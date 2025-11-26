// import Link from "next/link"

// const Page = () => {
//   // throw new Error('This feature is not implemented yet.');
  
//   return (
//     <div>
//       <h1>About Page</h1>
//         <li className="bg-indigo-400 p-2 rounded shadow-md
//        text-white transition-transform transform
//         hover:scale-105">
//           <Link href="/api/books">Click me to see all books!</Link></li>
//     </div>
//   )
// }

// export default Page

async function Page() {
  const res = await fetch('http://localhost:3000/api/books');
  const books = await res.json();
  return (
  <main className="ml-20"> 
    <h1 className="text-2xl font-bold mb-4">Books List</h1>
    <div>
      {books.map((book: { id: number; title: string; author: string }) => (
        <div
          key={book.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-600">Author: {book.author}</p>
        </div>
        
      ))}
    </div>
  </main> );
}

export default Page