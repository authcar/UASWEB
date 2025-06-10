import { ChevronRightIcon, TimerIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Course data for mapping
  const courses = [
    {
      id: 1,
      title: "Jaringan Komputer",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage:
        "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327358.png",
    },
    {
      id: 2,
      title: "Matematika Diskrit",
      lessonsLeft: 10,
      sks: 3,
      backgroundImage:
        "https://c.animaapp.com/mbpscubqJ4b9Pt/img/frame-2087327359.png",
    },
  ];

  // Schedule data for mapping
  const scheduleItems = [
    { id: 1, title: "Jaringan Komputer", sks: 3 },
    { id: 2, title: "Matematika Diskrit", sks: 3 },
    { id: 3, title: "Arsitektur Komputer", sks: 2 },
  ];

  // Calendar data
  const calendarDays = [
    { day: "Mo", dates: [1, 8, 15, 22, 29] },
    { day: "Tu", dates: [2, 9, 16, 23, 30] },
    { day: "We", dates: [3, 10, 17, 24, 31] },
    { day: "Th", dates: [4, 11, 18, 25] },
    { day: "Fr", dates: [5, 12, 19, 26] },
    { day: "Sa", dates: [6, 13, 20, 27] },
    { day: "Su", dates: [7, 14, 21, 28] },
  ];

  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState(11);

  // Function to handle date selection
  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <section className="flex w-full">
      {/* Main Content Area */}
      <div className="flex-1 pr-8">
        {/* Welcome Banner */}
        <div className="w-full h-[166px] mt-[137px] bg-[url(https://c.animaapp.com/mbpscubqJ4b9Pt/img/rectangle-6629.svg)] bg-[100%_100%] flex items-center">
          <h1 className="ml-52 [font-family:'Lexend_Deca',Helvetica] font-semibold text-[#3e3f71] text-4xl tracking-[-1.60px] leading-[46px]">
            Welcome Back, Carrie!
          </h1>
        </div>

        {/* Date Display */}
        <div className="flex justify-end mt-4 mb-8">
          <p className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl">
            Friday, 2 May 2025
          </p>
        </div>

        {/* Classes Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl">
              Classes
            </h2>
            <Button
              variant="outline"
              className="bg-[#c8e5ff] rounded-[17px] h-9 px-3 border-none [font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl"
            >
              View All &gt;
            </Button>
          </div>

          {/* Course Cards */}
          <div className="space-y-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="w-full h-[281px] rounded-[14px] shadow-[-5px_8px_20px_#00000040] border-none overflow-hidden"
              >
                <CardContent className="p-0 h-full">
                  <div className="flex items-end justify-between w-full h-full px-[29px] py-[23px] rounded-[14px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_84%),url(${course.backgroundImage})_50%_50%_/_cover]">
                    <div className="relative">
                      <h3 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-white text-[26px]">
                        {course.title}
                      </h3>
                      <p className="[font-family:'Lexend_Deca',Helvetica] font-light text-white text-xl mt-2">
                        {course.lessonsLeft} Lesson left
                      </p>
                    </div>
                    <div className="flex items-center">
                      <TimerIcon className="w-[27px] h-[27px] text-white" />
                      <span className="ml-2 [font-family:'Lexend_Deca',Helvetica] font-normal text-white text-base">
                        {course.sks} SKS
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[433px] bg-[url(https://c.animaapp.com/mbpscubqJ4b9Pt/img/rectangle-6624.svg)] bg-[100%_100%] p-10">
        {/* Header with Logo and Notification */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-[51px] h-[51px] bg-white rounded-[25.5px] flex items-center justify-center">
            <img
              className="w-[23px] h-[23px]"
              alt="Updates"
              src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/updayes.svg"
            />
          </div>
          <img
            className="w-[129px] h-[65px] object-cover"
            alt="Logo kkg"
            src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/logo-kkg.png"
          />
        </div>

        {/* Calendar Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="[font-family:'Lexend_Deca',Helvetica] font-semibold text-[#1b1d21] text-4xl tracking-[-1.60px] leading-[46px]">
              May 2025
            </h2>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border border-[#0000001a]"
              >
                <img
                  className="w-3.5 h-2.5"
                  alt="Arrow left"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/arrow-left.png"
                />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border border-[#0000001a]"
              >
                <img
                  className="w-3.5 h-2.5 rotate-180"
                  alt="Arrow right"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/arrow-left-1.png"
                />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Day Headers */}
            {calendarDays.map((col) => (
              <div key={col.day} className="text-center mb-4">
                <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#3549f8] text-[12.9px] tracking-[-0.32px]">
                  {col.day}
                </span>
              </div>
            ))}

            {/* Calendar Dates */}
            {calendarDays.map((col) => (
              <div
                key={`dates-${col.day}`}
                className="flex flex-col items-center space-y-6"
              >
                {col.dates.map((date, index) => (
                  <div
                    key={`${col.day}-${date}`}
                    className={`w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                      date === selectedDate 
                        ? "bg-[#3549f8] rounded-[19.78px/19.74px] text-white" 
                        : "text-black hover:bg-gray-100 hover:rounded-[19.78px/19.74px]"
                    } ${index === 0 ? "opacity-30" : ""}`}
                    onClick={() => handleDateClick(date)}
                  >
                    <span className="[font-family:'Lexend_Deca',Helvetica] font-normal text-[15px]">
                      {date}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-10">
          <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl mb-6">
            Schedule
          </h2>
          <div className="space-y-4">
            {scheduleItems.map((item) => (
              <Card
                key={item.id}
                className="bg-[#f9f9f9] rounded-[14px] border-none"
              >
                <CardContent className="p-3 flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#3549f8] rounded-[3px] mr-8"></div>
                  <div className="flex-1">
                    <h3 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-base">
                      {item.title}
                    </h3>
                    <p className="[font-family:'Lexend_Deca',Helvetica] font-normal text-black text-xs opacity-40">
                      {item.sks} SKS
                    </p>
                  </div>
                  <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h2 className="[font-family:'Lexend_Deca',Helvetica] font-medium text-black text-xl mb-6">
            Events
          </h2>
          <Card className="bg-[#f9f9f9] rounded-3xl border-none">
            <CardContent className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="[font-family:'Lexend_Deca',Helvetica] font-semibold text-white-900 text-base">
                  Rapat Senat Akademik
                </h3>
                <img
                  className="w-[37px] h-[27px]"
                  alt="Google meet"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/google-meet.png"
                />
              </div>
              <div className="flex items-center gap-2.5 mt-5">
                <span className="[font-family:'Lexend_Deca',Helvetica] font-normal text-white-600 text-xs leading-3">
                  Nov 22nd, 2025
                </span>
                <img
                  className="w-px h-[8.5px]"
                  alt="Line"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/line-32.svg"
                />
                <span className="[font-family:'Lexend_Deca',Helvetica] font-normal text-white-600 text-xs leading-3">
                  2-30 - 4:30 pm
                </span>
                <img
                  className="w-px h-[8.5px]"
                  alt="Line"
                  src="https://c.animaapp.com/mbpscubqJ4b9Pt/img/line-32.svg"
                />
                <span className="[font-family:'Lexend_Deca',Helvetica] font-normal text-white-600 text-xs leading-3">
                  Google Meet
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
