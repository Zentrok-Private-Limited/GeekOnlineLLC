'use client';

import React from 'react';

export default function RegionSelectPage() {
  const handleSelect = (region: string) => {
    console.log(`Selected region: ${region}`);
    window.location.href = 'https://www.geeksupportpro.com';
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#003b73] via-[#0756a0] to-[#162d8f] flex flex-col justify-between p-6 sm:p-12 text-white">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 sm:w-[30rem] sm:h-[30rem] bg-blue-950/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Section */}
      <div className="relative z-10 max-w-md mx-auto w-full pt-6 sm:pt-12">
        <p className="text-cyan-100 font-medium text-xl sm:text-2xl tracking-wide opacity-90">
          Welcome
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2 leading-snug">
          Select your region <br /> to continue
        </h1>
      </div>

      {/* Center Selection Buttons Container */}
      <div className="relative z-10 max-w-md mx-auto w-full flex flex-col gap-5 my-auto py-8">

        {/* Canada Button */}
        <button
          onClick={() => handleSelect('Canada')}
          className="group relative flex items-center justify-between w-full p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <div className="flex items-center gap-5">

            {/* Canada Flag Image */}
            <div className="w-14 h-10 sm:w-16 sm:h-11 rounded-md overflow-hidden shadow-md flex-shrink-0 border border-white/20 bg-white">
              <img
                src="https://flagcdn.com/w160/ca.png"
                alt="Canada flag"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-2xl sm:text-3xl font-semibold tracking-wide">
              Canada
            </span>
          </div>

          {/* Arrow Indicator */}
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-blue-800 transition-all duration-300">
            <svg
              className="w-5 h-5 translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* United States Button */}
        <button
          onClick={() => handleSelect('United States')}
          className="group relative flex items-center justify-between w-full p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <div className="flex items-center gap-5">

            {/* US Flag Image */}
            <div className="w-14 h-10 sm:w-16 sm:h-11 rounded-md overflow-hidden shadow-md flex-shrink-0 border border-white/20">
              <img
                src="https://flagcdn.com/w160/us.png"
                alt="United States flag"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-2xl sm:text-3xl font-semibold tracking-wide">
              United States
            </span>
          </div>

          {/* Arrow Indicator */}
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-blue-800 transition-all duration-300">
            <svg
              className="w-5 h-5 translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Globe Illustration */}
      <div className="relative w-full flex justify-end pointer-events-none mt-auto overflow-hidden h-[220px] sm:h-[320px]">
        <div className="absolute -right-16 sm:-right-10 -bottom-20 sm:-bottom-28 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] opacity-70">

          {/* Outer Atmospheric Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-500/10 to-transparent blur-xl" />

          {/* Globe */}
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full text-blue-200/20 drop-shadow-[0_0_25px_rgba(0,210,255,0.15)]"
            fill="currentColor"
          >
            <circle
              cx="250"
              cy="250"
              r="220"
              className="text-blue-950/60"
              fill="currentColor"
            />

            <circle
              cx="250"
              cy="250"
              r="220"
              className="text-cyan-400/20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="220"
              ry="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-50"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="90"
              ry="220"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-50"
            />

            <line
              x1="30"
              y1="250"
              x2="470"
              y2="250"
              stroke="currentColor"
              strokeWidth="1.5"
              className="opacity-40"
            />

            <line
              x1="250"
              y1="30"
              x2="250"
              y2="470"
              stroke="currentColor"
              strokeWidth="1.5"
              className="opacity-40"
            />

            <path
              d="M180,140 Q220,110 270,130 T340,180 Q380,220 360,280 T300,360 Q240,380 190,340 T150,260 Q130,190 180,140 Z"
              className="text-cyan-300/20"
              fill="currentColor"
            />

            <path
              d="M280,120 Q330,100 370,140 T410,220 Q390,270 340,250 T280,120 Z"
              className="text-blue-300/20"
              fill="currentColor"
            />

            <path
              d="M120,280 Q160,260 190,310 T140,380 Q100,350 120,280 Z"
              className="text-cyan-200/15"
              fill="currentColor"
            />
          </svg>

          {/* Orbital Rings */}
          <div className="absolute inset-[-20px] rounded-full border border-cyan-300/30 rotate-[-25deg] scale-y-50 pointer-events-none" />

          <div className="absolute inset-[-50px] rounded-full border border-dashed border-white/15 rotate-[15deg] scale-y-40 pointer-events-none" />

          {/* Horizon Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0756a0]/90 via-transparent to-transparent rounded-full pointer-events-none" />
        </div>
      </div>
    </main>
  );
}