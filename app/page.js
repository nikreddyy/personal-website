// test change
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#02040A] p-4">
      <div className="w-full max-w-xl p-6 md:p-8 mx-auto">
        <div className="flex flex-row items-stretch justify-between">
          {/* Left: Name, subtitle, links */}
          <div className="flex flex-col justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-white">Nikhil Reddy</h1>
            <div className="flex flex-col">
              <h2 className="text-white text-m">CS/Finance @{" "}
                <a href="https://www.stanford.edu/" className="font-bold  text-blue-300 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>Stanford</a>
              </h2>
              <div className="mt-1 flex space-x-4 text-xs">
                <a href="https://github.com/nikreddyy" className="font-medium  text-gray-300 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>GitHub</a>
                <a href="https://www.linkedin.com/in/nk-reddy/" className="font-medium  text-gray-300 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>LinkedIn</a>
                <a href="https://x.com/rnikhil61" className="font-medium  text-gray-300 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>Twitter</a>
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
        <p className="text-white text-sm leading-5">Hi, I'm Nikhil! I study Computer Science (AI) at Stanford. Thinking about technology & finance - past experiences in software private equity.</p>
        <div className="mt-6 space-y-3 text-xs  text-gray-300">
          <div className="text-sm">
            <div className="font-bold">Currently:</div>
            <div className="ml-4">
              • Summer Analyst at{" "}
              <a href="https://ftvcapital.com/" className="font-medium  text-gray-300 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>FTV Capital</a>
            </div>
            <div className="ml-4">
              • General Partner at{" "}
              <a href="https://kudlafund.stanford.edu/" className="font-medium  text-gray-300 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer" tabIndex="0" style={{ transform: "none" }}>Kudla Fund</a>
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