import React, { useEffect, useState } from "react";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

let percentage = 0;


function Progressbar() {
  
    const { todos } = useSelector((state) => state.todo);
  
    const [percentage, setPercentage] = useState(0);
  
    useEffect(() => {
      let totalcompleted=0
      let arraysize=todos.length
      if (arraysize==0) arraysize=1
    todos.map((data)=>(
      data.completed==true && (totalcompleted=totalcompleted+1)
    ));

     let acuuratepercentage = (totalcompleted / arraysize) * 100;
    setPercentage(Math.round(acuuratepercentage))

    }, [todos]);
   

  
  return (
    
  <div style={{ width: 100, padding: "20px", margin: "0 auto" }}>
  <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={buildStyles({
      textColor: "white",
      pathColor: "rgb(145 229 154 / 95%)",
      trailColor: "black",
    })}
  />
</div>
  )
}


 

export default Progressbar;
