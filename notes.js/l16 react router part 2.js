// import Navbar from './Navbar'
// import Home from './Home'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Create from './Create'

// function App () {
// return (
//     <Router>


//     <div className='App'>

//         <Navbar />
//         <div className='content'>

//         the use of switch here is that when a request is made then it checks all the routes top to bottom till it matches the required result and if we don't use this we might end up having multiple pages
//          here we used version 5 but in new version there is no need to add switch
//         <Switch>
//             we are using exact here coz when we search for "url/create" then it will redirect us to homepage as we have "/" in home route, so for that case it will be true, so to get the precise results we are using "exact" so that it redirects us to the correct route defined
//             <Route exact path='/'>
//         <Home />
//             </Route>

//         </Switch>
//         <Switch>

//             <Route path='/create'>
//             <Create />
//             </Route>

//         </Switch>
//         </div>

//     </div>


//     </Router>
// )
// }

// export default App
