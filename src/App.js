import React from 'react'
import Header from './Containers/Header'
import {BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ProductListing from './Containers/ProductListing'
import ProductDetails from './Containers/ProductDetails'


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={ProductListing}/>
        <Route path="/products/:productId" exact component={ProductDetails}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
