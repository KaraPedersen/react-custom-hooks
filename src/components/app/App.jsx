import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CharacterDetails from '../details/CharacterDetails';
import CharacterList from '../characters/CharacterList';


export default function App() {
  return (
    <div>
      <Router>
        <main>
          <Switch>

            <Route path="/" exact={true}
              component={CharacterList} 
            />

            <Route path="/:id" exact={true}
              component={CharacterDetails} 
            />

            <Redirect to="/" />
            
          </Switch>
        </main>
      </Router>
    </div>
  );
}
