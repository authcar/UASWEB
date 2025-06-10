import React from "react";
import { FrameSubsect } from "./sections/FrameSubsect";
import { SidebarCloseHoverSubsect } from "./sections/SidebarCloseHoverSubsect";

export const Home = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full min-h-screen"
      data-model-id="3:5"
    >
      <div className="bg-white w-full max-w-[1440px] relative flex">
        <SidebarCloseHoverSubsect />
        <FrameSubsect />
      </div>
    </main>
  );
};
