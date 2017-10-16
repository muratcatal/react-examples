import React, {Component} from 'react'

function propProxyHOC(WrappedComponent) {
    return class TestComponent extends Component {
        render() {
            return (
                <div>
                    <h1>I'm WrappedTestComponent</h1>
                    < WrappedComponent {...this.props}/></div>
            );
        }
    }
}

class MyComponent extends Component {
    render() {
        const {title} = this.props;
        console.log(this.props);
        return (
            <h2>{title}</h2>
        )
    }
}

export default propProxyHOC(MyComponent);
