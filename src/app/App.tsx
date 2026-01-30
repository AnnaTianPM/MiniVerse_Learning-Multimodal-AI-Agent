import backgroundImage from "figma:asset/70a70123e8e085d363282bc5fe065d72952f55ee.png";
import remixImage from "figma:asset/e32a73c097e216d02f470d8fc2e0b7dcef563692.png";
import { Eye, MessageCircle, Shield } from 'lucide-react';
import { MissionSection } from "@/app/components/mission-section";
import { UserStorySection } from "@/app/components/user-story-section";

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Background with silk texture - Fixed */}
      <div className="fixed inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark overlay for better text readability - Enhanced */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-blue-900/60 to-purple-950/70"></div>
      </div>

      {/* HEAD SECTION - Navigation Bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-[1920px] mx-auto px-12 py-4 flex items-center justify-between">
          
          {/* Left - Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-white/40">
              <img 
                src="https://miniverse-ai.vercel.app/icons/miniverse.png" 
                alt="Miniverse Logo" 
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">Miniverse</span>
          </div>

          {/* Center - Navigation Links */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Home</a>
            <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Pricing</a>
            <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">About Us</a>
            <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">Contact</a>
          </nav>

          {/* Right - Start Button */}
          <a 
            href="https://miniverse-ai.com/explore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-[#5c56f2] to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#5c56f2]/50 transition-all transform hover:scale-105 inline-block text-center"
          >
            Start Free
          </a>

        </div>
      </div>

      {/* NEW MISSION SECTION */}
      <MissionSection />

      {/* INTRO SECTION - Content Container - 1920x1080 YouTube Cover */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-12">
        <div className="w-full max-w-[1920px] h-[1080px] grid grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 flex flex-col justify-center pl-8">
            {/* Top Label - Miniverse */}
            <div className="inline-flex items-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-lg font-bold text-white/90">Miniverse</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent max-w-[100px]"></div>
            </div>

            {/* Main Headline - First Real-Time Agent (重点) */}
            <div className="space-y-4">
              <h1 className="text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
                First Real-Time<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                  Vision & Audio
                </span><br />
                Adaptive Learning Agent
              </h1>
              
              {/* Small Badge */}
              <div className="inline-block">
                <div className="px-3 py-1.5 bg-gradient-to-r from-[#5c56f2]/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-lg">
                  <p className="text-sm font-semibold text-blue-100">Bridges the Audio-Visual Gap</p>
                </div>
              </div>
            </div>

            {/* Three Core Features - Simplified */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold">Custom Courseware in Seconds</p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <p className="text-white text-xl font-semibold">Live Vision & Voice Interaction</p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold">Personal Adaptive AI Agent</p>
              </div>
            </div>
          </div>

          {/* Right Side - Lumi Live Classroom Demo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[700px]">
              {/* Glow effects - Enhanced */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#5c56f2]/50 to-blue-500/50 rounded-3xl blur-[60px] opacity-80"></div>
              
              {/* Main Demo Container - Enhanced Shadow & Border */}
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-4 shadow-[0_25px_80px_-15px_rgba(92,86,242,0.6)] border-2 border-white/70 ring-1 ring-white/30 ring-inset">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Lumi Live Classroom</h3>
                      <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">Real-time Multimodal Teaching</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold border border-indigo-200">
                      {/* Breathing Light Dot */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        <div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                      </div>
                      <Eye className="w-3 h-3" />
                      LUMI IS WATCHING
                    </div>
                  </div>
                </div>

                {/* Content Area with Grid */}
                <div className="grid grid-cols-12 gap-3">
                  {/* Main Content - Left Side */}
                  <div className="col-span-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 relative">
                    {/* Scanning Line Animation - 扫描线特效 */}
                    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#5c56f2]/60 to-transparent animate-scan-down shadow-lg shadow-[#5c56f2]/50"></div>
                    </div>
                    
                    {/* Pulsing Border - 脉冲边框 */}
                    <div className="absolute inset-0 pointer-events-none z-20 rounded-2xl animate-pulse-border"></div>
                    
                    {/* AI Generating Badge - 生成中标签 */}
                    <div className="absolute top-2 right-2 z-30 flex items-center gap-2 bg-[#5c56f2]/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/30">
                      {/* Breathing Light Dot - Cyan/Purple Glow */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <div className="absolute w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-wider">AI Generating...</span>
                    </div>
                    
                    {/* Header Bar */}
                    <div className="bg-[#3b82f6] p-6 text-center text-white relative">
                      <h2 className="font-bold text-2xl mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>I am the Boss of My Body!</h2>
                      <p className="opacity-90 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>Learning how to stay safe and happy.</p>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>Rule #1: My Body Belongs to Me</h3>
                        <p className="text-slate-600 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>Just like your toys belong to you, your body is yours!</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-xl border-2 border-blue-200 flex flex-col items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full mb-2 flex items-center justify-center text-2xl">👕</div>
                          <p className="text-xs font-bold text-slate-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>Swimsuit Rule</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border-2 border-slate-200 flex flex-col items-center">
                          <div className="w-12 h-12 bg-amber-100 rounded-full mb-2 flex items-center justify-center text-2xl">🩺</div>
                          <p className="text-xs font-bold text-slate-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>The Exception</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="col-span-4 space-y-3">
                    {/* Teacher Card */}
                    <div className="bg-white rounded-2xl p-3 text-center border border-slate-200 shadow-sm">
                      <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-2 flex items-center justify-center relative text-3xl">
                        🐻
                        <div className="absolute -bottom-1 -right-1 bg-[#22c55e] w-4 h-4 rounded-full border-2 border-white"></div>
                      </div>
                      <h4 className="font-bold text-sm mb-2">Teacher Lumi</h4>
                      <div className="p-2 bg-slate-50 rounded-lg text-left text-[10px] text-slate-600 border border-slate-100">
                        <p className="mb-1 italic font-medium">Lumi is thinking...</p>
                        <p className="leading-relaxed">"I see the student is looking at the swimsuit rule..."</p>
                        {/* Waveform */}
                        <div className="mt-2 flex gap-1 items-end h-3">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 bg-[#5c56f2] rounded-full animate-pulse"
                              style={{ 
                                height: `${Math.random() * 12 + 4}px`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Chat Bubble */}
                    <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none text-xs shadow-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      "Excellent choice! That's the Swimsuit Rule. Can you tell me what colors are on those shorts?"
                      <div className="mt-2 flex justify-end">
                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">Speaking...</span>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200">
                        <MessageCircle className="w-4 h-4 mb-1" />
                        <span className="text-[9px] font-bold">Mic On</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-500 border border-slate-200">
                        <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="text-[9px] font-bold">Finish</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Vision Scan</p>
                  <p className="text-xs font-extrabold text-gray-900">Analyzing Content</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/50">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Multimodal AI</p>
                  <p className="text-xs font-extrabold text-gray-900">Active Reasoning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COURSE SECTION - Interactive Courseware Agent */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-12 py-20">
        <div className="w-full max-w-[1920px] grid grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col justify-center pl-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold text-white leading-tight drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                  Interactive Courseware
                </span><br />
                Agent
              </h2>
              
              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed max-w-[500px]">
                Generates personalized, professional-grade interactive animated learning materials from a single prompt.
              </p>
            </div>
          </div>

          {/* Right Side - Courseware Generation Demo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[800px]">
              {/* Glow effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#5c56f2]/50 to-blue-500/50 rounded-3xl blur-[60px] opacity-80"></div>
              
              {/* Main Container */}
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-5 shadow-[0_25px_80px_-15px_rgba(92,86,242,0.6)] border-2 border-white/70 ring-1 ring-white/30 ring-inset">
                
                {/* Grid Layout - Left: Editor, Right: Preview */}
                <div className="grid grid-cols-12 gap-5">
                  
                  {/* Left Side - Prompt & Agent Reasoning - WIDENED */}
                  <div className="col-span-7 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-gray-900">Courseware Agent</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#5c56f2] rounded-full animate-pulse shadow-[0_0_8px_rgba(92,86,242,0.6)]"></div>
                        <span className="text-xs text-slate-500 font-semibold">Generating...</span>
                      </div>
                    </div>

                    {/* User Prompt - Simplified */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 shadow-sm">
                      <div className="flex items-start gap-2">
                        <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">User Input</p>
                          <p className="text-xs text-slate-600 leading-relaxed">6-year-old boy learns body safety in a colorful, interactive, interesting way.</p>
                        </div>
                      </div>
                    </div>

                    {/* Agent Reasoning Timeline */}
                    <div className="relative pl-6">
                      {/* Vertical Timeline Line */}
                      <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#5c56f2] via-blue-400 to-purple-400"></div>

                      {/* Timeline Steps */}
                      <div className="space-y-4">
                        {/* Step 1: Analysis */}
                        <div className="relative">
                          <div className="absolute -left-[22px] top-1 w-4 h-4 bg-[#5c56f2] rounded-full border-4 border-white shadow-lg shadow-[#5c56f2]/40"></div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-4 h-4 text-[#5c56f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                              <span className="text-xs font-bold text-slate-700">Analyzing Requirements</span>
                              <span className="ml-auto text-[10px] text-green-600 font-semibold">✓ Complete</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">Identified target: 6-year-old, topic: body safety, style: colorful & interactive</p>
                          </div>
                        </div>

                        {/* Step 2: Structuring */}
                        <div className="relative">
                          <div className="absolute -left-[22px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg shadow-blue-500/40"></div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                              <span className="text-xs font-bold text-slate-700">Building Structure</span>
                              <span className="ml-auto text-[10px] text-green-600 font-semibold">✓ Complete</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">Created 3-level progression: Swimsuit Rule → Touch Distinction → Safety Protocol</p>
                          </div>
                        </div>

                        {/* Step 3: Content Generation */}
                        <div className="relative">
                          <div className="absolute -left-[22px] top-1 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg shadow-purple-500/40 animate-pulse"></div>
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-3 border-2 border-purple-300/50 shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                              </svg>
                              <span className="text-xs font-bold text-purple-700">Generating Interactive UI</span>
                              <div className="ml-auto flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] text-purple-600 font-semibold">In Progress</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed font-medium">Rendering Level 1: Character design, swimsuit zones, interactive quiz...</p>
                            {/* Progress Bar */}
                            <div className="mt-2 h-1.5 bg-white/60 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ width: '68%' }}></div>
                            </div>
                          </div>
                        </div>

                        {/* Step 4: Pending */}
                        <div className="relative opacity-40">
                          <div className="absolute -left-[22px] top-1 w-4 h-4 bg-slate-300 rounded-full border-4 border-white"></div>
                          <div className="bg-white/40 rounded-xl p-3 border border-slate-200/60">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-xs font-bold text-slate-500">Optimization & Testing</span>
                              <span className="ml-auto text-[10px] text-slate-400 font-semibold">Pending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Canvas Preview - NARROWED */}
                  <div className="col-span-5 relative flex flex-col">
                    {/* Preview Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Preview</span>
                      </div>
                      <div className="flex gap-1">
                        <button className="w-6 h-6 rounded-md bg-slate-100/80 hover:bg-slate-200 flex items-center justify-center transition-colors">
                          <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Preview Window - Waiting State */}
                    <div className="flex-1 bg-gradient-to-br from-slate-50/80 to-blue-50/20 rounded-2xl border-2 border-dashed border-slate-300/60 overflow-hidden shadow-inner relative p-8">
                      {/* Subtle Grid Pattern */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #94a3b8 19px, #94a3b8 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #94a3b8 19px, #94a3b8 20px)',
                        backgroundSize: '20px 20px'
                      }}></div>

                      {/* Scanning Effect */}
                      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-scan-down"></div>
                      </div>

                      {/* Generating Badge */}
                      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-purple-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <div className="relative flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-200 rounded-full animate-pulse"></div>
                          <div className="absolute w-2 h-2 bg-white rounded-full animate-ping"></div>
                        </div>
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider">Generating</span>
                      </div>

                      {/* Waiting State Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
                        {/* Main Icon - Pulsing */}
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#5c56f2]/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
                            <svg className="w-10 h-10 text-[#5c56f2] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          {/* Orbit Ring */}
                          <div className="absolute inset-0 border-2 border-purple-400/30 rounded-2xl animate-ping"></div>
                        </div>

                        {/* Status Text */}
                        <div className="text-center space-y-2">
                          <p className="text-sm font-bold text-slate-700">Agent is crafting your course...</p>
                          <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                            Generating immersive learning experience
                          </p>
                        </div>

                        {/* Capability Icons - What might be generated */}
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          {/* Interactive Courseware */}
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200/50 shadow-sm text-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                              </svg>
                            </div>
                            <p className="text-[9px] font-semibold text-slate-600">Interactive</p>
                          </div>

                          {/* 3D Experience */}
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200/50 shadow-sm text-center">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                            <p className="text-[9px] font-semibold text-slate-600">3D</p>
                          </div>

                          {/* Animated */}
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200/50 shadow-sm text-center">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-[9px] font-semibold text-slate-600">Animated</p>
                          </div>
                        </div>

                        {/* Loading Dots */}
                        <div className="flex items-center justify-center gap-1.5 pt-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TEACHER SECTION - AI Realtime Teacher */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-12 py-20">
        <div className="w-full max-w-[1920px] grid grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col justify-center pl-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold text-white leading-tight drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                  AI Realtime Teacher
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-2xl text-white/90 leading-relaxed font-semibold">
                Real-Time Vision & Audio Adaptive Learning Agent
              </p>

              {/* Unique Value Badge */}
              <div className="inline-block">
                <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-300/30 rounded-lg">
                  <p className="text-sm font-bold text-amber-200 uppercase tracking-wider">Unique Value</p>
                </div>
              </div>
            </div>

            {/* Core Capabilities - 5 Items */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <p className="text-white text-xl font-semibold">Live Vision Understanding</p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold">Personalized Tone & Emotional Awareness</p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-white text-xl font-semibold">Barge-in Interaction</p>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold">Learning Issue Detection</p>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold">Vision & Voice-Guided, Hands-On Learning</p>
              </div>
            </div>
          </div>

          {/* Right Side - Reuse Lumi Live Classroom Demo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[700px]">
              {/* Glow effects - Enhanced */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#5c56f2]/50 to-blue-500/50 rounded-3xl blur-[60px] opacity-80"></div>
              
              {/* Main Demo Container - Enhanced Shadow & Border */}
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-4 shadow-[0_25px_80px_-15px_rgba(92,86,242,0.6)] border-2 border-white/70 ring-1 ring-white/30 ring-inset">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Lumi Live Classroom</h3>
                      <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">Real-time Multimodal Teaching</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold border border-indigo-200">
                      {/* Breathing Light Dot */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        <div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                      </div>
                      <Eye className="w-3 h-3" />
                      LUMI IS WATCHING
                    </div>
                  </div>
                </div>

                {/* Content Area with Grid */}
                <div className="grid grid-cols-12 gap-3">
                  {/* Main Content - Left Side */}
                  <div className="col-span-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 relative">
                    {/* Scanning Line Animation - 扫描线特效 */}
                    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#5c56f2]/60 to-transparent animate-scan-down shadow-lg shadow-[#5c56f2]/50"></div>
                    </div>
                    
                    {/* Pulsing Border - 脉冲边框 */}
                    <div className="absolute inset-0 pointer-events-none z-20 rounded-2xl animate-pulse-border"></div>
                    
                    {/* AI Generating Badge - 生成中标签 */}
                    <div className="absolute top-2 right-2 z-30 flex items-center gap-2 bg-[#5c56f2]/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/30">
                      {/* Breathing Light Dot - Cyan/Purple Glow */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <div className="absolute w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-wider">AI Generating...</span>
                    </div>
                    
                    {/* Header Bar */}
                    <div className="bg-[#3b82f6] p-6 text-center text-white relative">
                      <h2 className="font-bold text-2xl mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>I am the Boss of My Body!</h2>
                      <p className="opacity-90 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>Learning how to stay safe and happy.</p>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>Rule #1: My Body Belongs to Me</h3>
                        <p className="text-slate-600 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>Just like your toys belong to you, your body is yours!</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-xl border-2 border-blue-200 flex flex-col items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full mb-2 flex items-center justify-center text-2xl">👕</div>
                          <p className="text-xs font-bold text-slate-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>Swimsuit Rule</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border-2 border-slate-200 flex flex-col items-center">
                          <div className="w-12 h-12 bg-amber-100 rounded-full mb-2 flex items-center justify-center text-2xl">🩺</div>
                          <p className="text-xs font-bold text-slate-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>The Exception</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="col-span-4 space-y-3">
                    {/* Teacher Card */}
                    <div className="bg-white rounded-2xl p-3 text-center border border-slate-200 shadow-sm">
                      <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-2 flex items-center justify-center relative text-3xl">
                        🐻
                        <div className="absolute -bottom-1 -right-1 bg-[#22c55e] w-4 h-4 rounded-full border-2 border-white"></div>
                      </div>
                      <h4 className="font-bold text-sm mb-2">Teacher Lumi</h4>
                      <div className="p-2 bg-slate-50 rounded-lg text-left text-[10px] text-slate-600 border border-slate-100">
                        <p className="mb-1 italic font-medium">Lumi is thinking...</p>
                        <p className="leading-relaxed">"I see the student is looking at the swimsuit rule..."</p>
                        {/* Waveform */}
                        <div className="mt-2 flex gap-1 items-end h-3">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 bg-[#5c56f2] rounded-full animate-pulse"
                              style={{ 
                                height: `${Math.random() * 12 + 4}px`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Chat Bubble */}
                    <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none text-xs shadow-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      "Excellent choice! That's the Swimsuit Rule. Can you tell me what colors are on those shorts?"
                      <div className="mt-2 flex justify-end">
                        <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">Speaking...</span>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200">
                        <MessageCircle className="w-4 h-4 mb-1" />
                        <span className="text-[9px] font-bold">Mic On</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-500 border border-slate-200">
                        <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="text-[9px] font-bold">Finish</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Vision Scan</p>
                  <p className="text-xs font-extrabold text-gray-900">Analyzing Content</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/50">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Multimodal AI</p>
                  <p className="text-xs font-extrabold text-gray-900">Active Reasoning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FEED SECTION - Learning Community */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-12 py-20">
        <div className="w-full max-w-[1920px] grid grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col justify-center pl-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold text-white leading-tight drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                  Learning Community
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed max-w-[500px]">
                Organizes content by subject and topic Enabling discovery, creation, and sharing
              </p>
            </div>
          </div>

          {/* Right Side - Feed Interface Demo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[650px]">
              {/* Subtle Glow - 不太突出 */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#5c56f2]/30 to-blue-500/30 rounded-3xl blur-[50px] opacity-50"></div>
              
              {/* Main Container - 简洁设计 */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-[0_20px_60px_-15px_rgba(92,86,242,0.3)] border border-white/50">
                
                {/* Search Bar */}
                <div className="mb-4">
                  <div className="relative">
                    <svg className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Search topics, courses, community..." 
                      className="w-full pl-11 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                      readOnly
                    />
                  </div>
                </div>

                {/* Subject Filter Tabs */}
                <div className="mb-3 flex items-center gap-2">
                  <button className="px-4 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                    All
                  </button>
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
                    Math
                  </button>
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
                    English
                  </button>
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
                    Chinese
                  </button>
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
                    Physics
                  </button>
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
                    Computer
                  </button>
                </div>

                {/* Topic Filter Tabs */}
                <div className="mb-4 flex items-center gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    Trending
                  </button>
                  <button className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors">
                    Latest
                  </button>
                </div>

                {/* Content Cards Grid - 简化版 */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-24 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                      <div className="text-xs text-slate-500 font-medium">HTML Course Preview</div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-slate-800 mb-1 line-clamp-2">Fruit English words...</h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                        <span>Anna</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-24 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
             
                      <div className="text-xs text-slate-500 font-medium">3D Course Preview</div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-slate-800 mb-1 line-clamp-2">Solar System </h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                        <span>Xueyun</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-24 bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center">
                      <div className="text-xs text-slate-500 font-medium">Virtual Hands-on Lab </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-slate-800 mb-1 line-clamp-2">Do CircuitLab Experiment!</h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                        <span>Gang</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-24 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                      <div className="text-xs text-slate-500 font-medium">Immersive spatial class </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-slate-800 mb-1 line-clamp-2">Art Monet Water Lilies</h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                        <span>Rickie Zheng</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Badge - 不突出 */}
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-slate-500">Community Feed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* LIBRARY SECTION - Remix · Clone & Customize */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-12 py-20">
        <div className="w-full max-w-[1920px] grid grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col justify-center pl-8">
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold text-white leading-tight drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                  Remix · Clone & Customize
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed max-w-[500px]">
                Prompt library for easy start  one-click Customization from high-quality creations
              </p>
            </div>
          </div>

          {/* Right Side - Remix Interface */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[800px]">
              {/* Glow effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#5c56f2]/50 to-blue-500/50 rounded-3xl blur-[60px] opacity-80"></div>
              
              {/* Main Container */}
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-[0_25px_80px_-15px_rgba(92,86,242,0.6)] border-2 border-white/70 ring-1 ring-white/30 ring-inset">
                
                {/* Remix Options */}
                <div className="space-y-4 mb-6">
                  <div className="text-slate-600 text-base py-3 px-4 bg-slate-50 rounded-xl border border-slate-200">
                    Replace images or text
                  </div>
                  <div className="text-slate-600 text-base py-3 px-4 bg-slate-50 rounded-xl border border-slate-200">
                    Try a new layout or color theme
                  </div>
                  <div className="text-slate-600 text-base py-3 px-4 bg-slate-50 rounded-xl border border-slate-200">
                    Tell me your favourite Cartoon characters
                  </div>
                </div>

                {/* Input Field */}
                <div className="mb-6">
                  <input 
                    type="text" 
                    placeholder="Enter your remix requirements..." 
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5c56f2]/50"
                    readOnly
                  />
                </div>

                {/* Bottom Toolbar */}
                <div className="flex items-center justify-between py-3 border-t border-slate-200">
                  {/* Left Actions */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>170</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                      <span>😂🎉</span>
                      <span>3</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span>23</span>
                    </div>
                  </div>

                  {/* Center - Remix Button */}
                  <button className="px-6 py-2 bg-gradient-to-r from-[#5c56f2] to-blue-500 text-white font-semibold rounded-full hover:shadow-lg transition-shadow">
                    Remix
                  </button>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                    <button className="text-slate-600 hover:text-slate-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="text-slate-600 hover:text-slate-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                    <button className="text-slate-600 hover:text-slate-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* USER STORIES SECTION */}
      <UserStorySection />

      {/* FOOTER SECTION */}
      <div className="relative z-10 w-full py-12 px-12">
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Footer Container */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-12">
            <div className="grid grid-cols-4 gap-8 mb-8">
              {/* Brand Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#5c56f2] to-blue-500 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                    M
                  </div>
                  <span className="text-xl font-bold text-white">Miniverse</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  First Real-Time Vision & Audio Adaptive Learning Agent
                </p>
              </div>

              {/* Product Column */}
              <div>
                <h4 className="text-white font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Features</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Demo</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Contact</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <p className="text-sm text-white/60">
                © 2026 Miniverse. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/20 z-0"></div>
    </div>
  );
}