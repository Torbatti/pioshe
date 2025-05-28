import { Accessor, createEffect, createSignal, Setter } from "solid-js";
import { Switch, Match } from "solid-js"

import "./styles/albors.css";
import "./styles/root.css";

import "./styles/view.css";


type ViewStruct = {
  left: {gt:Accessor<string>,st:Setter<string>}
  top: {gt:Accessor<string>,st:Setter<string>}
  main: {gt:Accessor<string>,st:Setter<string>}
  mleft: {gt:Accessor<string>,st:Setter<string>}
  mright: {gt:Accessor<string>,st:Setter<string>}
  mpage: {gt:Accessor<string>,st:Setter<string>}
}

function App() {
  const [view, setView] = createSignal("")

  const [viewLeft, setViewLeft] = createSignal("")
  const [viewTop, setViewTop] = createSignal("")
  const [viewMain, setViewMain] = createSignal("page")
  const [viewMainLeft, setViewMainLeft] = createSignal("")
  const [viewMainRight, setViewMainRight] = createSignal("")
  const [viewMainPage, setViewMainPage] = createSignal("home")

  const view_struct: ViewStruct = {
    left:{gt: viewLeft, st:setViewLeft},
    top:{gt: viewTop, st:setViewTop},
    main:{gt: viewMain, st:setViewMain},
    mleft:{gt: viewMainLeft, st:setViewMainLeft},
    mright:{gt: viewMainRight, st:setViewMainRight},
    mpage:{gt: viewMainPage, st:setViewMainPage},
  }

  return (
    <div id="view">
      <ViewBar vs={view_struct} />
      <ViewTop vs={view_struct} />
      <ViewMain vs={view_struct} />
    </div>
  );
}

function ViewBar(props:any) {
  return (
    <div id="view-bar">
      
    </div>
  )
}

function ViewTop(props:any) {
  return (
    <div id="view-top">

    </div>
  )
}

function ViewMain(props:any) {
  
  return (
    <div id="view-main">

      <Switch>

        <Match when={props.vs.main.gt() != "page"}>
          <ViewMainLeft vs={props.vs}/>
          <ViewMainRight vs={props.vs}/>
        </Match>

        <Match when={props.vs.main.gt() === "page" }>
          <ViewMainPage vs={props.vs}/>
        </Match>

      </Switch>

    </div>
  )
}

function ViewMainLeft(props:any) {
  return (
    <div id="view-main-left" class={props.vs.main.gt() == "a" ? "" : "b"}>
      <p>main left</p>
    </div>
  )
}

function ViewMainRight(props:any) {
  return (
    <div id="view-main-right" class={props.vs.main.gt() == "a" ? "" : "b"}>
      <p>main right</p>
    </div>
  )
}

function ViewMainPage(props:any) {
  return (
    <div id="view-main-page">
      <p>page</p>
    </div>
  )
}

export default App;
