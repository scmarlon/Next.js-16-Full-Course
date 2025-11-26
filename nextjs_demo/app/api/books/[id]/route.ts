import books from "../../db";

console.log("Estoy en el route de book by id");

// const BooksDetails = async({params}: {params: Promise<{id: string}>}) => {
//   const {id} = await params;
//   console.log("Book ID:", id);
//   return (id);
// }
  
// export default BooksDetails

export async function PUT(
    request: Request,
    context: { params: { id: string } },
    
    
)  

{
    const id = +context.params.id;
    console.log("Book ID to update:", id);
    
    const book = await request.json();

    const index = books.findIndex((b) => b.id === id);
    if(index === -1){
        return Response.json({message: "Book not found"}, {status: 404});
    }
    books[index] = book;;
    
    return Response.json(book);
}
export async function DELETE(
    request: Request,
    context: { params: { id: string } },
){
    const id = +context.params.id;
    const index = books.findIndex((b) => b.id === id);
    if(index === -1){
        return Response.json({message: "Book not found"}, {status: 404});
    } 
    books.splice(index, 1);
    return Response.json(books)
    }
    