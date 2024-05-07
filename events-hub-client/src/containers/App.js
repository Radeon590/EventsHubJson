import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action_1 from '../store/actionCreators/action_1';
import './App.css';

function App({value_1, change_value_2}) {
  return (
    <div>
      Test
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value_1: state.get("value_1")
  };
}

function mapDispatchToProps() {
  return function(dispatch) {
    return {
        change_value_2: bindActionCreators(action_1, dispatch)
    };
};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);