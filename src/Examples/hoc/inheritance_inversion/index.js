import React, {Component} from 'react'

function IIHOC(WrappedComponent) {
    return class Enhacer extends WrappedComponent {
        render() {
            super.render();
            return <h1>I'm IIHOC Class</h1>;
        }
    }
}

class MyComponent extends Component {
    render() {
        return <h2>I'm MyComponent</h2>
    }
}

export default IIHOC(MyComponent);