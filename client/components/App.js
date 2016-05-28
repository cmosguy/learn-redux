import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

/*
mapStateToProps and mapDispatchToProps connect together the state
when the actoins are dispatched
 */
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

//binding this to "Main" will add all the states and actions to main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
