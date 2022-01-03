import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Exam from './pages/Exam';
const Home = lazy(() => import("./pages/Home"));
const Exam = lazy(() => import("./pages/Exam"));
const Result = lazy(() => import("./pages/Result"));
const App: React.FC = () => {
  return (
    <div className="App" data-testid="app">
      <Suspense fallback={<p>loading...</p>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exam" component={Exam} />
            <Route exact path = "/result" component={Result}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
