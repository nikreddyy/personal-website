'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from "lucide-react"
import BounceLink from './components/animate-link';

export default function Home() {

  const [readingsOpen, setReadingsOpen] = useState(false)  

  return (
    <div className="min-h-screen bg-[#02040A] p-4">
      <div className="w-full max-w-xl p-6 md:p-8 mx-auto">
        <div className="flex flex-row items-stretch justify-between">
          {/* Left: Name, subtitle, links */}
          <div className="flex flex-col justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-white">Nikhil Reddy</h1>
            <div className="flex flex-col">
              <h2 className="text-white text-m">CS/Finance @{" "}
                <BounceLink href="https://www.stanford.edu/" className="font-bold text-indigo-500 transition hover:text-purple-600 delay-50 ease-in-out hover:scale-110">Stanford</BounceLink>
              </h2>
              <div className="mt-1 flex space-x-4 text-xs">
                <a href="https://github.com/nikreddyy" className="font-medium  text-gray-300 hover:text-violet-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>GitHub</a>
                <a href="https://www.linkedin.com/in/nk-reddy/" className="font-medium  text-gray-300 hover:text-violet-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>LinkedIn</a>
                <a href="https://x.com/rnikhil61" className="font-medium  text-gray-300 hover:text-violet-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>Twitter</a>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <Image
            src="/avatar.png"
            alt="Nikhil Reddy"
            width={96}
            height={96}
            className="rounded-full justify-end-safe"
            priority
          />
        </div>
        <hr className="my-5 border-t border-gray-700 w-full" />
        <p className="text-white text-sm leading-5">Hi there, I'm Nikhil! I study Computer Science (AI track) at Stanford. Passionate about technology & finance with past experiences in software private equity.</p>
        <div className="mt-6 space-y-3 text-xs  text-gray-300">
          <div className="text-sm">
            <div className="font-bold">Current:</div>
            <div className="ml-4">
              Summer Analyst at{" "}
              <BounceLink href="https://ftvcapital.com/" className="inline-block font-bold text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>FTV</BounceLink>{" "}Capital
            </div>
            <div className="ml-4">
              General Partner at{" "}
              <BounceLink href="https://kudlafund.stanford.edu/" className="inline-block font-bold text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>Kudla Fund</BounceLink>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-bold">Past:</div>
            <div className="ml-4">
              Consulting work for{" "}
              <BounceLink href="https://www.tpg.com/platforms/growth/tpg-growth" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>TPG</BounceLink>
              {" "}&{" "}
              <BounceLink href="https://visionfund.com/" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>SoftBank</BounceLink>
            </div>
            <div className="ml-4">
              Competed on the U.S. Economics{" "}
              <BounceLink href="http://www.wyforum.org/#/" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>Team</BounceLink>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-bold">Projects:</div>
            <div className="ml-4">
              • Stock Pitches: 
              UDMY (Short),{" "}
              <BounceLink href="https://drive.google.com/file/d/1aLAJMtVXdV3r1Scap1QE_B057VJtOvjE/view?usp=sharing" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>ASTS</BounceLink>{" "}(Long),{" "}
              <BounceLink href="https://drive.google.com/file/d/1pFTcnPqBi-H6rKRk-HTxTsc4S6UHLpoC/view?usp=drive_link" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>TMDX</BounceLink>{" "}(Long)
            </div>
          </div>






          <div className="flex flex-col justify-between mt-6 text-sm">
            <div className="flex flex-row">
              <div className="font-bold">Readings<span className="ml-2">➤</span></div>
              <button className="ml-auto text-indigo-500 text-m hover:text-purple-600 focus:outline-none"
                onClick={() => setReadingsOpen((prev) => !prev)}
              >
                {readingsOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            {readingsOpen && (
              <div className="flex min-h-0 flex-col gap-y-1 px-4 sm:px-2 py-5">
                <div className="-mt-2 p-3 bg-white/8 rounded text-white">
                  1
                </div>
                <div className="mt-1 p-3 bg-white/8 rounded text-white">
                  2
                </div>
              </div>
            )}












            <div className="flex flex-row mt-0.5">
              <div className="font-bold">Coursework<span className="ml-2">➤</span></div>
              <button className="ml-auto text-indigo-500 text-m hover:text-purple-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-row mt-0.5">
              <div className="font-bold">Thoughts<span className="ml-2">➤</span></div>
              <button className="ml-auto text-indigo-500 text-m hover:text-purple-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 text-sm">
            Contact:{" "}
            <span className="font-semibold select-all  text-white">nikreddy [at] stanford [dot] edu</span>
          </div>
        </div>
        <hr className="my-5 border-t border-gray-700 w-full" />
        <div className="-mt-3 text-xs text-gray-400">© Nikhil Reddy 2025</div>
      </div>
    </div>
  );
}