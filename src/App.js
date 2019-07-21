import React, {Component} from 'react'
import "./bootstrap.min.css"
import Header from "./components/Header"
import Main from "./components/Main"

class App extends Component {
  render() {
    return (
      <div className="App container-full">
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App;