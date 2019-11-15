import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTodo from '../component/addTodo/AddTodo';
import Todos from '../component/getTodos/TodoList';
import Homepage from '../component/homepage/homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/add" component={AddTodo} />
          <Route exact path="/todos" component={Todos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
