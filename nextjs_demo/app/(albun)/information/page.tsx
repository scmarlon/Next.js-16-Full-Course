

async function AlbunInformation() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) { throw new Error('Failed to fetch data'); }
    const data = await response.json();
  return (
    <div className="grind grind-cols-1 sm:grid-cols-2 md:grid-cols">
        {data.map((data: {id: number; title: string}) => (
            <div
             key={data.id} 
             className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                <h3 className="text-emerald-700">Albun ID: {data.id}</h3>
                <p className="text-lg font-bold mb-2">Title: {data.title}</p>
                </div>))} 
            
    </div>
  )
}

export default AlbunInformation