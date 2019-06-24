import React from 'react'
import ReactDOM from 'react-dom'
import '../scss/app.scss'

const AppContainer = (props) => {
  const {text} = props;
  return (
    <div className="container">
      <p>{text}</p>
    </div>
  )
}

const App = document.getElementById('app')
ReactDOM.render(<AppContainer text="I ❤ Template ReactJS + Parcel + Docker"/>, App)