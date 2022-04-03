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
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LIfecycleA from "./components/LIfecycleA";
import { Fragment } from "react";
import FragmentDemo from "./components/FragmentDemo";
import TableFragemnt from "./components/TableFragemnt";
import Purecomponent from "./components/Purecomponent";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusRefInput from "./components/FocusRefInput";
import ForwardParentRef from "./components/ForwardParentRef";

function App() {
  return (
    <div className="App">
      <ForwardParentRef/>
      {/* <FocusRefInput/> */}
      {/* <RefsDemo/> */}
      {/* <Form/> */}
      {/* <ParentComp/> */}
      {/* <TableFragemnt/> */}
      {/* <FragmentDemo/> */}
      {/* <LIfecycleA/> */}
      {/* <Greet name="Tahir" heroName="Thor"/> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* passing style css primary as Props */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inlinecss/> */}
      {/* <ListRender/> */}
      {/* <ConditionalRend er/> */}
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
