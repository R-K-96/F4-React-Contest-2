import React,{useEffect,useState,state,map} from "react";
import Table from "./components/table";


function App() {
    let [apiData,SetApiData] = useState([]);
    
    useEffect(()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    .then(data =>{ 
      SetApiData(data)})
    .catch((error) => console.log("Error"))
    },[])
 
 
  return (
    <div className="App">
      <h1>
        COINS
      </h1>
       <table>
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    ID
                </th>
                <th>
                    Image
                </th>
                <th>
                    Symbol
                </th>
                <th>
                    Price
                </th>
                <th>
                    Volume
                </th>

            </tr>
        </thead>

        <tbody>
            {
                apiData.map((coin,index) =>(
                  <Table key={index} props = {coin}/>
                ))
            }
        </tbody>
    </table>
      
    {/* {
      apiData.map((coin,index) =>(
        <Table key={index} props = {coin}/>
      ))
    } */}
    
    

     
    </div>  
    );
}

export default App;
