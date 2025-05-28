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
}

function App() {
  const [view, setView] = createSignal("")

  const [viewLeft, setViewLeft] = createSignal("")
  const [viewTop, setViewTop] = createSignal("")
  const [viewMain, setViewMain] = createSignal("")
  const [viewMainLeft, setViewMainLeft] = createSignal("")
  const [viewMainRight, setViewMainRight] = createSignal("")

  const view_struct: ViewStruct = {
    left:{gt: viewLeft, st:setViewLeft},
    top:{gt: viewTop, st:setViewTop},
    main:{gt: viewMain, st:setViewMain},
    mleft:{gt: viewMainLeft, st:setViewMainLeft},
    mright:{gt: viewMainRight, st:setViewMainRight},
  }

  return (
    <div id="view">
      <ViewBar />
      <ViewTop />
      <ViewMain/>
    </div>
  );
}

function ViewBar() {
  return (
    <div id="view-bar">

    </div>
  )
}

function ViewTop() {
  return (
    <div id="view-top">

    </div>
  )
}

function ViewMain() {
  return (
    <div id="view-main">

      <Switch>
        <Match when={condition1}>
          <ViewMainLeft/>
        </Match>
        <Match when={condition2}>
          <ViewMainRight/>
        </Match>
      </Switch>

    </div>
  )
}
function ViewMainLeft() {
  return (
    <div id="view-main-left">
    </div>
  )
}

function ViewMainRight() {
  return (
    <div id="view-main-right">
    </div>
  )
}

function ViewMainPage() {
  return (
    <div id="view-main-page">
    </div>
  )
}

export default App;
