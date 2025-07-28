'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from "lucide-react"
import BounceLink from './components/animate-link';
import PortalTooltip from './components/PortalTooltip';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {

  const [readingsOpen, setReadingsOpen] = useState(false)
  const [thoughtsOpen, setThoughtsOpen] = useState(false)
  const [shouldShineThoughts, setShouldShineThoughts] = useState(false);
  const [shouldShineReadings, setShouldShineReadings] = useState(false);

  useEffect(() => {
    if (thoughtsOpen) {
      setShouldShineThoughts(true);
    }
    if (readingsOpen) {
      setShouldShineReadings(true);
    }
  }, [thoughtsOpen, readingsOpen]);

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
            <div className="ml-4 flex items-start">
              <span className="font-bold">•</span>
              <span className="ml-1.5">
                Stock Pitches: UDMY (Short),{" "}
                <BounceLink href="https://drive.google.com/file/d/1aLAJMtVXdV3r1Scap1QE_B057VJtOvjE/view?usp=sharing" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>ASTS</BounceLink>{" "}(Long),{" "}
                <BounceLink href="https://drive.google.com/file/d/1pFTcnPqBi-H6rKRk-HTxTsc4S6UHLpoC/view?usp=drive_link" className="inline-block font-bold  text-indigo-500 hover:text-purple-600 delay-50 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>TMDX</BounceLink>{" "}(Long)
              </span>
            </div>
          </div>
          {/* Reading & ThoughtsSection */}
          <div className="flex flex-col justify-between mt-6 text-sm">
            <div className="flex flex-row">
              <div className="font-bold">Readings<span className="ml-2">➤</span></div>
              <button className="ml-auto text-indigo-500 text-m hover:text-purple-600 focus:outline-none"
                onClick={() => setReadingsOpen((prev) => !prev)}
              >
                {readingsOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden
                ${readingsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="flex min-h-0 flex-col gap-y-1 px-4 sm:px-2 py-5">
                <div className={`-mt-2 p-3 h-14 flex items-center bg-white/8 rounded text-white${shouldShineReadings ? ' shiny-appear' : ''}`} onAnimationEnd={() => setShouldShineReadings(false)}>
                  <div className="flex items-center h-full pl-2 w-full" style={{minHeight: '1.75rem'}}>
                    {/* S Rank badge */}
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-rose-300 text-white font-bold text-base shadow">S</div>
                    <div className="h-8 w-px bg-gray-300 ml-6 mr-0" />
                    <div className="flex space-x-4 ml-6 overflow-x-auto max-w-full hide-scrollbar">
                      <PortalTooltip tooltip="The Credit Investor's Handbook">
                        <img src="/s-tier-books/the-credit-investor's-handbook.jpg" alt="The Credit Investor's Handbook" className="h-12 rounded shadow" />
                      </PortalTooltip>
                      <PortalTooltip tooltip="The Power of Habit">
                        <img src="/s-tier-books/the-power-of-habit.jpg" alt="The Power of Habit" className="h-12 rounded shadow" />
                      </PortalTooltip>
                    </div>
                  </div>
                </div>
                <div className={`mt-1 p-3 h-14 flex items-center bg-white/8 rounded text-white${shouldShineReadings ? ' shiny-appear' : ''}`} onAnimationEnd={() => setShouldShineReadings(false)}>
                  <div className="flex items-center h-full pl-2 w-full" style={{minHeight: '1.75rem'}}>
                    {/* A Rank badge */}
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-yellow-300 text-white font-bold text-base shadow">A</div>
                    <div className="h-8 w-px bg-gray-300 ml-6 mr-0" />
                    <div className="flex space-x-4 ml-6 overflow-x-auto max-w-full hide-scrollbar">
                      <PortalTooltip tooltip="The Caesar's Palace Coup">
                        <img src="/a-tier-books/caesar's-palace-coup.jpg" alt="The Caesar's Palace Coup" className="h-12 rounded shadow" />
                      </PortalTooltip>
                      {/* <img src="/a-tier-books/investment-banking-textbook.jpg" alt="Investment Banking Textbook" className="h-12 rounded shadow" /> */}
                      <PortalTooltip tooltip="Investment Banking: Valuation, Leveraged Buyouts, and Mergers and Acquisitions">
                        <img
                          src="/a-tier-books/investment-banking-textbook.jpg"
                          alt="Investment Banking: Valuation, Leveraged Buyouts, and Mergers and Acquisitions"
                          className="h-12 rounded shadow"
                        />
                      </PortalTooltip>
                    </div>
                  </div>
                </div>
                <div className={`mt-1 p-3 h-14 flex items-center bg-white/8 rounded text-white${shouldShineReadings ? ' shiny-appear' : ''}`} onAnimationEnd={() => setShouldShineReadings(false)}>
                  <div className="flex items-center h-full pl-2 w-full" style={{minHeight: '1.75rem'}}>
                    {/* B Rank badge */}
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-sky-300 text-white font-bold text-base shadow">B</div>
                    <div className="h-8 w-px bg-gray-300 ml-6 mr-0" />
                    <div className="flex space-x-4 ml-6 overflow-x-auto max-w-full hide-scrollbar"></div>
                  </div>
                </div>
                <div className={`mt-1 p-3 h-14 flex items-center bg-white/8 rounded text-white${shouldShineReadings ? ' shiny-appear' : ''}`} onAnimationEnd={() => setShouldShineReadings(false)}>
                  <div className="flex items-center h-full pl-2 w-full" style={{minHeight: '1.75rem'}}>
                    {/* C Rank badge */}
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-400 text-white font-bold text-base shadow">C</div>
                    <div className="h-8 w-px bg-gray-300 ml-6 mr-0" />
                    <div className="flex space-x-4 ml-6 overflow-x-auto max-w-full hide-scrollbar">
                      <PortalTooltip tooltip="Barbarians at the Gate">
                        <img src="/c-tier-books/barbarians-at-the-gate.jpg" alt="Barbarians at the Gate" className="h-12 rounded shadow" />
                      </PortalTooltip>
                    </div>
                  </div>
                </div>
                <div className={`mt-1 p-3 h-14 flex items-center bg-white/8 rounded text-white${shouldShineReadings ? ' shiny-appear' : ''}`} onAnimationEnd={() => setShouldShineReadings(false)}>
                  <div className="flex items-center h-full pl-2 w-full" style={{minHeight: '1.75rem'}}>
                    {/* D Rank badge */}
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-700 text-white font-bold text-base shadow">D</div>
                    <div className="h-8 w-px bg-gray-300 ml-6 mr-0" />
                    <div className="flex space-x-4 ml-6 overflow-x-auto max-w-full hide-scrollbar">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-0.5">
              <div className="font-bold">Thoughts<span className="ml-2">➤</span></div>
              <button className="ml-auto text-indigo-500 text-m hover:text-purple-600 focus:outline-none"
                onClick={() => setThoughtsOpen((prev) => !prev)}
              >
                {thoughtsOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden
                ${thoughtsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="flex min-h-0 flex-col gap-y-1 px-4 sm:px-2 pt-5">
                <div className={`-mt-2 p-3 bg-white/8 rounded text-white${shouldShineThoughts ? ' shiny-appear' : ''}`} onAnimationEnd={() => setShouldShineThoughts(false)}>
                  Coming soon...
                </div>
              </div>
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
      <Analytics />
    </div>
  );
}