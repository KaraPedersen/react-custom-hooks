import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';
// import Header from './Header';
import CharacterList from '../characters/CharacterList.jsx';
import CharacterDetails from '../details/CharacterDetails.jsx';


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={CharacterList} />
      <Route exact path="/:id" component={CharacterDetails} />
    </Switch>
  ); 
}
