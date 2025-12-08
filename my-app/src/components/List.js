import FruitList from "./FruitList";

function List() {
    let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    return (
        <>
            <div className="list">
                <h1>Assignment 3</h1>
                <p>Make an array of 5 fruits and display them in a ul list using JSX.</p>


                <h2>Basic List Without Map()</h2>
                <ul >
                    <li>{fruits[0]}</li>
                    <li>{fruits[1]}</li>
                    <li>{fruits[2]}</li>
                    <li>{fruits[3]}</li>
                    <li>{fruits[4]}</li>
                </ul>
                 <FruitList />
            </div>

       

        </>
    )
}
export default List;