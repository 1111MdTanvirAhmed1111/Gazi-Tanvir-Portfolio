

import { submitContactForm } from "@/utils/actions/contact-actions";




export  function Contact() {



  return (
    
    <div className="min-h-[600px]  text-white font-sans p-8 mx-auto flex flex-col items-center justify-between">

      <div className="w-[50%] mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-light mb-1 text-[#0ff5d4] relative">
            Contact
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0ff5d4] mt-1 rounded-full">
              <div className="absolute w-2 h-2 bg-[#0ff5d4] rounded-full -top-[3px] left-0"></div>
              <div className="absolute w-2 h-2 bg-[#0ff5d4] rounded-full -top-[3px] right-0"></div>
            </div>
          </h2>
          <p className="text-gray-400 mt-4 font-mono text-sm text-center sm:text-left">
            I'm currently available for freelance work
          </p>
        </div>

        {/* Remove method="POST" */}
        <form action={submitContactForm} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[#0ff5d4] text-sm mb-2">
                Your name <span className="text-[#0ff5d4]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="bg-transparent border-b border-gray-600 py-2 focus:border-[#0ff5d4] outline-none transition-colors hover:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#0ff5d4] text-sm mb-2">
                Your email <span className="text-[#0ff5d4]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-transparent border-b border-gray-600 py-2 focus:border-[#0ff5d4] outline-none transition-colors hover:border-gray-400"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-[#0ff5d4] text-sm mb-2">
                Your message <span className="text-[#0ff5d4]">*</span>
              </label>
              <input
                type="text"
                id="message"
                name="message"
                required
                placeholder="Enter your needs"
                className="bg-transparent border-b border-gray-600 py-2 focus:border-[#0ff5d4] outline-none transition-colors hover:border-gray-400"
              />
            </div>
          </div>

          <div className="mb-12 mt-4">
            <button
              type="submit"
              className="bg-[#0ff5d4] text-[#1a1e23] font-medium py-3 px-8 rounded-full flex items-center transition-all hover:shadow-[0_0_20px_rgba(15,245,212,0.4)] transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}