import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='main-class'>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
