import { useEffect, useState } from "react";
import axios from "axios";
import {
  Header,
  Home,
  Footer
} from "./components";

function App() {
  const baseURL = "http://localhost:8000/api/";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseURL + "data").then((response) => {
      setData(response.data);
    })
  }, []);
  
  return (
    <div className="body">
      { !data && "...loading" }
      {
        data && (<div>
          <Header logos={ data?.logos?? {} }/>
          <Home 
            banners={ data?.banners?? {} }
            highlights={ data?.highlights?? [] }
            carousels={ data?.carousels?? {} }
            sections={ data?.sections?? {} }
            departments={ data?.departments?? [] }
            />
          <Footer logos={ data?.logos?? {} } />
        </div>)
      }
    </div>
  );
}

export default App;
