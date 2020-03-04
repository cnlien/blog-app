### Boiler Plate React Step By Step

1. npm install create-react-app
2. install redux, react-redux, axios and redux-thunk
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