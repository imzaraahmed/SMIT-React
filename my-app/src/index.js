import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myinfo from './components/Myinfo';
import Button from './components/Button';
import List from './components/List';
import Cards from './components/Cards';
import Container from './components/Container';
import AssignmentFiveContainer from './components/AssignmentFiveContainer';
import AssignmentSix from './components/AssignmentSix';
import AssignmentSeven from './components/AssignmentSeven';




const root = ReactDOM.createRoot(document.getElementById('root'));

const fruitItems =["Guava","WaterMelon","Peach","Strawberry","Cherry"];

root.render(
  <React.StrictMode>
    <Myinfo />
   {/*<App />*/} 
   <Button />
   <List fruitItems={fruitItems} />
   <Container/>
   <AssignmentFiveContainer />
   <AssignmentSix />
   <AssignmentSeven />
   


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
