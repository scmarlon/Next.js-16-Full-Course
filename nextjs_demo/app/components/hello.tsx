'use client' // this is a client component, its code will be bundled separately(Client-side JS)

const Hello = () => {
    console.log("IM a client component!!");
  return (
    <div>Im hello Conts</div>
  )
}

export default Hello