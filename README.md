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
import { createStore } from 'redux';

// COMPONENTS
import App from './components/App/App.js';

// REDUX REDUCERS
import reducers from './reducers';

// STYLES
import 'bootstrap/dist/css/bootstrap.css';
```

```
ReactDOM.render(
    <Provider store ={createStore(reducers)}>
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