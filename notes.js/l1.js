// for the api port
// npx json-server --watch data/db.json --port 8000
// for the react router package
// npm install react-router-dom@5
// local development folder
// npm run start


// to see what these codes do run them in the real files




// doubt


// l24 when we are adding the abort message it is being showed which means that there is error but when we are removing it no error message is shown


// notes l20 how are we getting the result while using blog or homeBlogs in const {data:   , error, pending}

// notes l21 create.js onchange cannot understand what happened

// what does method do as it is in a string l23 notes




// importing the css file
// import './App.css';
// imported the navbar to app.js
// import Navbar from './navbar';

// function App() {
//   here you can write any javascript using "{}"

//     const title = "Welcome to the App";
//   here we can define everything except boolean and  object it will show error
//     const likes = 50;
//     const link = "http://www.google.com";
//     return (
//     <div className="App">
//     <div className="content">
//         this is how you can call a declared variable
//         <h1>{title}</h1>
//         <p>{likes}</p>
//         <p>{link}</p>
//         <p>{"hello there"}</p>
//         <p>{[1,2,3,4,5,6]}</p>
//         <p>{Math.random() * 10}</p>
//         rel="noreferrer" It prevents passing the referrer information to the target website by removing the referral info from the HTTP header
//         <a href={link} target="_blank" rel="noreferrer"> GOOGLE </a>
//     </div>
//     </div>
//     );
// }

// export default App;










// we make the project in a tree form from head to toe
// this is navbar of the project

// type sfc (i.e.statelist functional component) to get the boiler plate
// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>The Blogs</h1>
//             <div className="links">
//                 <a href="/">Home</a>
                {/* when we need a dynamic value we use {} 
                here we need the value to be an object thats why we are using another pair of {} */}
                {/* <a href="/create" style={{ */}
                    // this is how we do inline styling of an element
                    // color: "white",
                    // we are in js file due to which we can not write background-color as it will take "-" as minus sign so we have to write it in a different way
                    // backgroundColor: '#f1356d',
                    // borderRadius: "8px"
//                 }}>New Blog</a>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;


