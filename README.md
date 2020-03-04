### Boiler Plate React Step By Step

1. Create the React App
```
npm install create-react-app
```

2. Install Dependencies
```
npm install redux react-redux axios redux-thunk node-sass`
```

3. Set up index.js file for Redux
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// COMPONENTS
import App from './components/App/App.js';

// REDUX REDUCERS
import reducers from './reducers';

// STYLES
import 'bootstrap/dist/css/bootstrap.css';
```

```
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

4. Create a reducers directory and add an index.js file and import `combineReducers` from redux.
```
import { combineReducers } from 'redux';
export default combineReducers({
    replaceMe:()=>'Hello World'
});
```

5. Create an actions directory and add an index.js file.
_Example_
```
export const fetchPosts = () => {
    return {
        type: 'FETCH_POSTS'
    };
};
```

6. Inside the component import `connect` (notice all lower case) from `react-redux` and wire it up to `componentDidMount` and the export

```
import { connect } from 'react-redux';
```

```
componentDidMount() {
    this.props.actionName();
}
```

```
export default connect(componentDidMount, { actionName })(ComponentName);
```

7. Create an `api` directory inside the `src` directory. This directory will hold the `axios.create` files.
```
import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
});
```
8. Import the api file to the actions `index.js` file and wire up `async/await` to the action and Redux Thunk.
```
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts');
        dispatch ({
            type: 'FETCH_POSTS',
            payload: res
        });
    }
};
```
9. Create reducers inside of the reducers directory and hook them up the `index.js` file in the reducers directory
`posts.Reducer.js`
```
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return (action.payload);

        default: return (state);
    }
};
```
```
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer,
});
```

## General Data Loading with Redux
- #### Components: Components are generally responsible for fetching data they need by calling an action creator
 1. Component Gets rendered onto the screen
 2. Component's `componentDidMount` lifecycle method gets called
 3. We call action creator from `componentDidMount`

- #### Action Creators: Action Creators are responsible for making APi requests
 4. Action creator runs code to make an API Request
 5. API Responds to data
 6. Action creator returns an 'action' with the fetched data on the `payload` property

- #### Reducers Consume the Action: We get fetched data into a component by generating new state in our redux store, then getting that into our component through `mapStateToProps`
 7. Some reducer sees the action, returns the data off the `payload`
 8. Since a new state object is generated redux/react-redux cause our React app to be rerendered

 ## General Rules for Reducers
 1. Must return an value besides 'undefined'
 2. Produces 'state' or data to be used inside of your appusing only previous state and the action
 3. Must no return reach 'out of itself' to decide what value to return _reducers are pure funtions_
 4. Must not mutate it's input state argument
  - _(MISLEADING RULE BECAUSE IT'S ALLOWED BUT JUST A VERY BAD IDEA)_