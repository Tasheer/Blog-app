import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App () {
  return (
    <Router>


      <div className='App'>

        <Navbar />
        <div className='content'>

          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/create'>
              <Create />
            </Route>

            <Route path="/homeBlogs/:id">
              <BlogDetails />
            </Route>

            {/* path is "asstrick" i.e. * which means if none of the above paths match this will be triggerd 
            it has to be at the end so that it only matches the path which has not been defined*/}
            <Route path={"*"}>
              {/* attaching not found */}
              <NotFound />
            </Route>

          </Switch>

        </div>

      </div>


    </Router>
  )
}

export default App
