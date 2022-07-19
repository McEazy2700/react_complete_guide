import './App.css';
import Expenses from './components/Expenses/Expenses';

// React is a JavaScript library for building user interfaces
// React is all about Components.
// This is because all user interfaces are made up of components.
// Having components gives us the ability to Reuse those components and to Seperate our concerns.
// In other words it helps us keep our code DRY.

/* How are components built:
  *They are built with HTML, CSS and JavaScript and are combined to for the whole UI
  *React uses a declarative approach for building components.
  * This means you will not be telling React that a certain HTML element should be created and
  *   inserted in a particular place on the UI as you would be doing it with just JavaScript
  *   instead you will define the end and the conditions in which those states should occur
  *   state and React will do the rest under the hood.*/

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 92.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2020, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2020, 5, 12)
    },
  ]
  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
