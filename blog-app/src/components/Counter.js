import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0)
    const superLike = () => {
        for (let i = 1; i <= 5; i++) {
            // setCount(count + 1);
            setCount((prevCount) => prevCount + 1);
        }
    }
    return (
        <div style={{ width: "30%", height: "25vh", backgroundColor: "gold", marginBottom: "1vh" }}>
            <center>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 5)}>like</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setCount(count - 1)}>Unlike</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={superLike}>Super like</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setCount(0)}>Reset</button>
            </center>
        </div>
    )
}
export default Counter

