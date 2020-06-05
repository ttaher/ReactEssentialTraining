import React from 'react'
import ReactDom from 'react-dom'

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color:this.props.color}}> {this.props.msg}</h1>
        <p> we're glade you are here </p>
      </div>
    );
  }
}
ReactDom.render(
  <Message color="blue" msg="How are you today?" />,
  document.getElementById('root')
)