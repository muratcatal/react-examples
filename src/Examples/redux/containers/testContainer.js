import {connect} from 'react-redux';
import TestComponent from '../components/testComponent'
import {testAction} from '../actions/index'

const mapStateToProps = state => {
    return {
        name: state.TestReducer.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onButtonClick: (name) => {
         dispatch(testAction(name));
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(TestComponent);
