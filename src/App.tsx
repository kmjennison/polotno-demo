import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Workspace } from "polotno/canvas/workspace";
import { createDemoApp } from "polotno/polotno-app";
import { SidePanel } from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";

const { store } = createDemoApp({
  container: document.getElementById("root"),
  key: "ucd7jgX3xMroM2hBxa4W",
  sections: [],
  // you can hide back-link on a paid license
  showCredit: true,
});

function App() {
  return (
    <div>
      <link
        href="https://unpkg.com/@blueprintjs/core@5/lib/css/blueprint.css"
        rel="stylesheet"
      />
      <PolotnoContainer style={{ height: "100vh", width: "100vw" }}>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar downloadButtonEnabled store={store} />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
}

export default App;
