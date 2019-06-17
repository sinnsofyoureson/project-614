import React from 'react';
import './App.css';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createEpicMiddleware } from 'redux-observable';
import epicReducer from './reducers/root';
import { rootEpic } from './epics';
import Header from './containers/Header';
import Login from './components/Login';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	epicReducer,
	form: formReducer
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

const App: React.FC = (props) => {
  console.log('app props', props)
  return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Login {...props} />
			</div>
		</Provider>
  );
}

export default App;