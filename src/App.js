import "./App.css";
import ClassClick from "./components/ClassClick";
import ConditionalRender from "./components/ConditionalRender";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
// import {Greet} from "./components/Greet";

import Greet from "./components/Greet";
import Hello from "./components/Hello";
import ListRender from "./components/ListRender";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";
import Stylesheet from "./components/Stylesheet";
import Inlinecss from "./components/Inlinecss";
import './appStyles.css'
import styles from './appStyles.module.css'



function App() {
  return (
    <div className="App"> 
      {/* <Greet name="Tahir" heroName="Thor"/> */}
             <h1 className="error">Error</h1>
             <h1 className={styles.success}>Success</h1>
          {/* passing style css primary as Props */}
         {/* <Stylesheet primary={true}/> */}
         {/* <Inlinecss/> */}
         {/* <ListRender/> */}
         {/* <ConditionalRender/> */}
        {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
     {/* <FunctionClick/> */}
      {/* <Welcome/>
    <Hello/> */}
      {/* <Welcome name="Bisu" heroName="Ironman"/> */}
        {/* {" "}
        <span>Hello fron Thor fan</span>{" "}
      </Welcome> */}
      {/* <Message/> */}
      {/* <Counter/> */}
     
    </div>
  );
}

export default App;
