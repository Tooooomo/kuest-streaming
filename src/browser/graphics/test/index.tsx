import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useState } from "../../../replicant/state";

import type { NodeCGBrowser } from "../../../../../../types/browser";

const App: Component = () => {

  const [getValue, setValue] = useState();

  createEffect(() => {
    const nodecg = window.nodecg as NodeCGBrowser;
    const rep = nodecg.Replicant("test");
    rep.on("change", (newValue) => {
      setValue(newValue);
    });
  });

  return (
    <div>{`${getValue()}`}</div>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);