import { useState, useEffect } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])
    return (
    
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map((item) => (  //<= Estos paréntesis pueden también sustituir a la palabra reservada return
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Layout>
    
    );
  }
  
  export default Home
  