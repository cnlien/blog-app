### Boiler Plate React Step By Step

1. Create the React App
```
npm install create-react-app
```

2. Install Dependencies
```
npm install redux react-redux axios redux-thunk`
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