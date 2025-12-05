function Button() {
    function showAlert() {
        alert("successful");
    }

    return (
        <>
            <div className="myinfo">
                <h1>Assignment 2 </h1> 
                <h2> Create a Button with an Event</h2>
               
                <p>Task:

                    Make a button with text: Click Me
                    When clicked → show alert: "Hello from React!"</p>

                <button className="button"onClick={showAlert}>Click me</button>
            </div>
        </>
    )
}
export default Button;