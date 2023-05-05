// when you want a value to change when you click or do any event then we have to make the value reactive
// we use "usestate" hook to do so
// import { useState } from "react";

// const Home = () => {
//     "changeName" is the function due to which we will change the value when clicked
//     const [name, changeName] = useState("Tasheer");
//     const [age, changeAge] = useState(20);

//     const handleClick = () => {
//         changeName("Someone") 
//         changeAge(100) 
//     }

//     return ( 
//         <div className="home">
//             <h2>Home</h2>
//             <p> {name} is {age} years old. </p>
//             <button onClick={handleClick}>Click</button>

//         </div>
//     );
//     }
// export default Home;