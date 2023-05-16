"use client";

export default async function Home() {

  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json();
  // console.log(products)
  return (

   <main>
    <section  className='flex flex-col space-y-12 pb-44'>
    <h1 className="text-5xl text-center font-bold">DEALS OF THE DAY </h1>
    
    {products.map((product)=> {
      
      return (
      <div key ={product.id}>
        <h1>{product.title}</h1>
      </div>
  
      )
     



    })}

    


    <div>
      {/* <products /> */}
           {/* <products /> */}
                {/* <products /> */}
                     {/* <products /> */}
                          {/* <products /> */}

    </div>
    </section>

   </main>

  )
   
}
