import React from "react";
import { ClassContentSection } from "../ClassContentSection/ClassContentSection";
import { ProfileSidebarSection } from "../../../Home/sections/ProfileSidebarSection/ProfileSidebarSection";

export const FrameSubsect = (): JSX.Element => {
  return (
    <div className="flex flex-1 relative">
      <ProfileSidebarSection />
      <ClassContentSection />
    </div>
  );
};