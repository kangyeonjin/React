import {useState} from "react";

function App(){
    const [drink, setDrink] = useState(0);
    // let drink = 0;

    const drinkWater = () =>{
        // drink += 1;
        setDrink(drink + 1);
        console.log(`버튼클릭수:${drink}번`);
        
    };
    return(
        <>
        <p>
            물 마신횟수 : <strong>{drink}</strong>잔을 마심
            </p>
            <button onClick = {drinkWater}>💧</button>
            {console.log(`버튼클릭횟수:${drink}번`)}
            </>
    )
}

export default App;