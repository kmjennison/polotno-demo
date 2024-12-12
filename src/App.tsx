import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Workspace } from "polotno/canvas/workspace";
import { SidePanel } from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { createStore } from "polotno/model/store";
import { unstable_useHtmlTextRender } from "polotno/config";

// Support rich text
// https://polotno.com/docs/rich-text
unstable_useHtmlTextRender(true);

const store = createStore({
  key: "ucd7jgX3xMroM2hBxa4W",
  // you can hide back-link on a paid license
  showCredit: true,
});
store.addPage();

// Save your template to template.json
const templateJSON = require("./template.json");
store.loadJSON(templateJSON);

function App() {
  return (
    <div>
      <link
        href="https://unpkg.com/@blueprintjs/core@5/lib/css/blueprint.css"
        rel="stylesheet"
      />
      <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
}

export default App;
