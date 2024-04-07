import React,{useState} from "react";
function Databinding(){
    const [data,setData] = useState({  //these are the hooks that are used and have differnt types olso which have differnt type of meaning as well
        name : "MOhan",
        age:25
    });
    const handlechange = (event) =>{
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    return (
        <div>
            <h2>Data Binding</h2>
            <h4>
                One Way Binding : {data.name}
                 -{data.age}
            </h4>
            <div>
                <input type='text' 
                value={data.name} 
                onChange={handlechange}/> 
            </div>
        </div>
    )
}

export default Databinding;