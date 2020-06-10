import React from "react";

function Student(props){
    return <div>
         Hello <strong>{props.stName}</strong>!, age {props.stAge}
        <div class="container">
          <div class="bluebox"  id="fb">
           <p>Batch 3 <span class="great">Q2</span></p> 
          </div> 
          <div class="blackbox">
           <p>Roll No <span class="news"> PIAIC65617</span></p>   
          </div> 
          <div class="greybox">
           <p><span class=" courses">Courses</span><span class="org"> : AIC & CNC</span></p> 
          </div> 
        </div>
    </div>
}

export default Student;