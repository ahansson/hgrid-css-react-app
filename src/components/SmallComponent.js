import React, { Component } from 'react'
import './SmallComponent.scss'

class SmallComponent extends Component {
  
  render() {
    
    return(
  
      <div className="SmallComponent row custom-stack">
        <div className="
          mt-60
          bg-white
          radius-8
          column-fill 
          box-shadow-3
          padding-top-20 
          padding-left-30 
          padding-right-30 
          padding-bottom-20
          ">
          <h1>{this.props.title}</h1>

          <h5 className="uppercase">
            {this.props.tagline}
          </h5>
        </div>
      </div>
    )
  }
}

export default SmallComponent