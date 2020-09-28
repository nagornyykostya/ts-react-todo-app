import React from 'react';
import ToDoList from './tasks/components/ToDoList';
import { Provider } from 'react-redux';
import store from './store.js';

const App : React.FC = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
