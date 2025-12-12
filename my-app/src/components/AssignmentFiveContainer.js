import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

function AssignmentFiveContainer(){
    const condition = true;
return(

    <>
    <div className="myinfo">

       <h1>Assignment 5 </h1> 
        {condition ? <LoginBtn /> : <LogoutBtn/>}
    </div>
    </>
)
}
export default AssignmentFiveContainer;