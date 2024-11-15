import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);

    return (
    
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-2xl">Home</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search for a product" 
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            context.items?.map((item) => (  //<= Estos paréntesis pueden también sustituir a la palabra reservada return
              <Card key={item.id} data={item} />
            ))
          }
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
    
    );
  }
  
  export default Home
  