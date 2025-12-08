function FruitList(){
const fruitItems =["Guava","WaterMelon","Peach","Strawberry","Cherry"];

return(

    <>
    <div className="list">
        <h2>List With Map()</h2>
    <ul>
        {fruitItems.map((fruitItems,index)=>(
            <li key ={index}>{fruitItems}</li>
        ))}
    </ul>
    </div>
    
    </>
)

}
export default FruitList;