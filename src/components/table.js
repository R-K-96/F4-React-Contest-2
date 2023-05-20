import React from "react";


function Table({props}) {
    
   return(
   
    
        <tr>
            <td>{props.name}</td>
            <td>{props.id}</td>
            <td>
                <img src={props.image} alt={props.name} width="20" height="20"></img>
            </td>
            <td>{props.symbol}</td>
            <td>{props.current_price}</td>
            <td>{props.total_volume}</td>

        </tr>
    
   )
   
   

}

export default Table;