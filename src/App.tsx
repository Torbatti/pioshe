import { createEffect, createSignal } from "solid-js";

import "./styles/albors.css";
import "./styles/root.css";

import "./styles/view.css";
import "./styles/v-bala.css";
import "./styles/v-chap.css";
import "./styles/v-mian.css";
import "./styles/v-rast.css";
import "./styles/v-fari.css";

type View = "asli" | "fari"

function App() {
  const [view,setView] = createSignal("fari")
  
  const [viewAsli,setViewAsli] = createSignal("")
  const [viewChap,setViewChap] = createSignal("")
  const [viewMian,setViewMian] = createSignal("")
  const [viewRast,setViewRast] = createSignal("")
  const [viewBala,setViewBala] = createSignal("")
  
  const [viewFari,setViewFari] = createSignal("")


  return (
    <div id="view">

      <div id="v-chap-pooste">
        <div id="v-chap-haste">

        </div>
      </div>

      <div id="v-bala-pooste">
        <div id="v-bala-haste">

        </div>
      </div>

      <div id="v-mian-pooste">
        <div id="v-mian-haste">

        </div>
      </div>

      <div id="v-rast-pooste">
        <div id="v-rast-haste">

        </div>
      </div>

      <div id="v-fari-pooste">
        <div id="v-fari-haste">

        </div>
      </div>

    </div>
  );
}

export default App;
