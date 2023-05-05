
// const Home = () => {
//     1
//     this is how we use click event 
//     const handleClick = () => {
//         console.log("hello there")
//     }

//     if we want to add some argument to the event then we do this
//     2
//     const handleClickAgain = (name) => {
//         console.log("hello " + name)
//     }


//     return ( 
//         <div className="home">
//             <h2>Home</h2>
//             1
//             here we dont use the handleClick function i.e. "handleClick()" because if we do so it will show the string as default and will not fire as we click on it
//             <button onClick={handleClick}>Click</button>
//             2
//             as we cannot straight up use handleclickagain("something") we use an arrow function which will only trigger/fire when we click on the button
//             everything in line 25 is a dynamic value as it is in {}
//             <button onClick = { () => 
//             handleClickAgain("Tasheer")
//             }>
//             Click Again</button>

//         </div>
//     );
// }
// export default Home;
