// src/screens/Class/Class.tsx
import React from "react";
import { FrameSubsect } from "./sections/FrameSubsect";
import { SidebarCloseHoverSubsect } from "./sections/SidebarCloseHoverSubsect";

export const Class = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full min-h-screen"
      data-model-id="class-page"
    >
      <div className="bg-white w-full max-w-[1440px] relative flex">
        <SidebarCloseHoverSubsect />
        <FrameSubsect />
      </div>
    </main>
  );
};

// src/screens/Class/index.ts
export { Class } from "./Class";

// src/screens/Class/sections/FrameSubsect/FrameSubsect.tsx
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

// src/screens/Class/sections/FrameSubsect/index.ts
export { FrameSubsect } from "./FrameSubsect";

// src/screens/Class/sections/ClassContentSection/ClassContentSection.tsx
import { ArrowLeftIcon, TimerIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ClassContentSection = (): JSX.Element => {
  // Course data matching the design
  const courses = [
    {
      id: 1,
      title: "Jaringan Komputer",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage: "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327358.png",
      gradient: "bg-gradient-to-r from-cyan-400 to-cyan-600"
    },
    {
      id: 2,
      title: "Matematika Diskrit",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage: "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327359.png",
      gradient: "bg-gradient-to-r from-indigo-900 to-emerald-400"
    },
    {
      id: 3,
      title: "Arsitektur Komputer",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage: "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327358.png",
      gradient: "bg-gradient-to-r from-slate-400 to-slate-600"
    }
  ];

  return (
    <section className="flex-1 p-8 pt-12">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/home">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-0"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="[font-family:'Lexend_Deca',Helvetica] font-medium text-sm">
              Back To Home
            </span>
          </Button>
        </Link>
      </div>

      {/* Course Cards */}
      <div className="space-y-6 max-w-4xl">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="w-full h-[180px] rounded-[20px] shadow-lg border-none overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          >
            <CardContent className="p-0 h-full">
              <div className={`flex items-end justify-between w-full h-full px-8 py-6 ${course.gradient} relative overflow-hidden`}>
                {/* Background pattern/image overlay */}
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${course.backgroundImage})`
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="[font-family:'Lexend_Deca',Helvetica] font-semibold text-white text-2xl mb-2">
                    {course.title}
                  </h3>
                  <p className="[font-family:'Lexend_Deca',Helvetica] font-normal text-white/90 text-base">
                    {course.lessonsLeft} Lesson left
                  </p>
                </div>
                
                {/* SKS Badge */}
                <div className="relative z-10 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <TimerIcon className="w-5 h-5 text-white mr-2" />
                  <span className="[font-family:'Lexend_Deca',Helvetica] font-medium text-white text-sm">
                    {course.sks} SKS
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// src/screens/Class/sections/ClassContentSection/index.ts
export { ClassContentSection } from "./ClassContentSection";

// src/screens/Class/sections/SidebarCloseHoverSubsect/SidebarCloseHoverSubsect.tsx
import React from "react";

export const SidebarCloseHoverSubsect = (): JSX.Element => {
  return <></>;
};

// src/screens/Class/sections/SidebarCloseHoverSubsect/index.ts
export { SidebarCloseHoverSubsect } from "./SidebarCloseHoverSubsect";