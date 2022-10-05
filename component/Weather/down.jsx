import Image from "next/image" 
import rain from "../../public/imges/rain.png"


const  Down = ({ location, data, onClick }) => {
    return <div  className="footer">
      
      <div  className="degree">
        {data.main ? <h1>{data.main.temp.toFixed()} F</h1>  : null}
          
        {/* <h1>{data.main.temp} F</h1> */}
       
      </div>
      {/* {data.name  != undefined &&  */}
        <div  className="week">
        <ul>
           <li>
               {data.main ? <h1>{data.main.feels_like.toFixed() }F</h1> : null}
               <h1>Feels Like</h1>
           </li>
           <li>
           {data.main ? <h1>{data.main.humidity }%</h1> : null}  
           <h1>Humidity</h1>
           </li>
           <li>
             
           {data.main ? <h1>{data.wind.speed.toFixed() } MPH</h1> : null}
           <h1>Wind Speed</h1>
           </li>
         
     
        </ul>
     </div>
     
      
    </div> 

    };
export default Down;