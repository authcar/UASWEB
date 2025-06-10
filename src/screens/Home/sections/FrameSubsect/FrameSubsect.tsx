import React from "react";
import { MainContentSection } from "../MainContentSection/MainContentSection";
import { ProfileSidebarSection } from "../ProfileSidebarSection/ProfileSidebarSection";

export const FrameSubsect = (): JSX.Element => {
  return (
    <div className="flex flex-1 relative">
      <ProfileSidebarSection />
      <MainContentSection />
    </div>
  );
};
