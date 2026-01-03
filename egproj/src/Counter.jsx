
import React,{useState} from 'react';

function Count(){
    const[ cars,setcars]=useState([]);
    const[caryear,setyear]=useState(new Date().getFullYear());
   const[carmake,setmake]=useState("");
   const[carmodel,setmodel]=useState("");

   function add(){
    const newcar={year:caryear,make:carmake,model:carmodel}

    setcars(c=>[...c,newcar])

    setyear(new Date().getFullYear())
    setmake("")
    setmodel("")
   }
   function remove(index){
        setcars(c=>c.filter((_,i)=>index!=i))
   }
   function yearchange(e){
    setyear(e.target.value)
   }
   function makechange(e){
setmake(e.target.value)
   }
   function modelchange(e){
setmodel(e.target.value)
   }

    
    return(
        <div>
           <h2>List of cars</h2>
           <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>remove(index)}>{car.year}  {car.make} {car.model}</li>)}


           </ul>
           <input type="number" value={caryear} onChange={yearchange} /><br></br>
           <input type="text" value={carmake}  onChange={makechange}/><br></br>
           <input type="text" value={carmodel}  onChange={modelchange} /><br></br>
           <button onClick={add}>Submit Button</button>

        </div>
    )
}
export default Count