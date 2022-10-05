import Image from "next/image" 
import loc from "../../public/imges/loc.png"
import sun from "../../public/imges/sunny.png"


const  Up= ({ location , data , onClick }) => {
    return < div className="upper">
       
         <h1>{location}</h1>
          
        <div className="top">
            
            <input
            
              onKeyDown={e =>  {
                if (e.key === 'Enter') {
                  console.log(e.target.value)
                  onClick(e.target.value)
                  
                } 
              }}
             // onClick={searchLocation}
               type="text"  
               placeholder="Enter Location" />
     
        </div>
        </div>
      
     
   
    

    

    };
export default Up;