import React, { Component } from 'react'

class TestComponent extends Component {
   
    render(){
        let {name,newName, onButtonClick} = this.props;
        return (<div>
             <h1>Redux Example</h1>
            <button type="button" onClick={()=> onButtonClick(newName) }>Click me </button>
              <div>{name}</div>
          </div>)
    }
}

export default TestComponent;