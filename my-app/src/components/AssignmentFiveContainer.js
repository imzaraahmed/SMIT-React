import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

function AssignmentFiveContainer(){
    const isLoggedIn = true;
return(

    <>
    <div className="myinfo">

       <h1>Assignment 5 </h1> 
        {isLoggedIn ? <LoginBtn /> : <LogoutBtn/>}
    </div>
    </>
)
}
export default AssignmentFiveContainer;