import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ROUTESPath from "./constants/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import ErrorPage from './pages/errorpage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={ROUTESPath.HOMEROUTE} component={App} />
      <Route exact path={ROUTESPath.CADASTROVIDEO} component={CadastroVideo} />
      <Route exact path={ROUTESPath.CADASTROCATEGORIA} component={CadastroCategoria} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);


