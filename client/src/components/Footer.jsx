

const Footer = () => {
  return (
    <>
    <footer className="py-6  w-full bg-slate-400">
  <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
    <div className="grid grid-cols-12">
      <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
        <a href="#" className="flex justify-center space-x-3 md:justify-start">
        
          <span className="self-center text-2xl font-semibold"><img src="public/logo.svg" alt="" /></span>
        </a>
      </div>
      <div className="col-span-6 text-center md:text-left md:col-span-3">
        <p className="pb-1 text-lg font-medium">IT Services</p>
        <ul>
          <li><a href="#" className="hover:dark:text-white duration-300">Managed Services</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Cybersecurity</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Cloud Services</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Data Backup</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Unified Communications</a></li>
        </ul>
      </div>
      <div className="col-span-6 text-center md:text-left md:col-span-3">
        <p className="pb-1 text-lg font-medium">Industries</p>
        <ul>
          <li><a href="#" className="hover:dark:text-white duration-300">Healthcare</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Education</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Construction</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Retail</a></li>
          <li><a href="#" className="hover:dark:text-white duration-300">Government</a></li>
        </ul>
      </div>
    </div>
    <div className="grid justify-center pt-6 lg:justify-between">
      <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
        <span>© 2025 CMIT Solutions. All rights reserved</span>
        <a href="#" className="hover:dark:text-white duration-300">
          <span>Privacy Policy</span>
        </a>
        <a href="#" className="hover:dark:text-white duration-300">
          <span>Accessibility</span>
        </a>
      </div>
      <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
        <a href="#" title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M22 12l-9-9-9 9h18zm0 0l-9 9-9-9h18z"></path>
          </svg>
        </a>
        <a href="#" title="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
            <path d="M4 12h6v16H4zm4-2c-1.5 0-2.8 1.2-2.8 2.7S6.5 14.7 8 14.7 10 13.5 10 12s-1.2-2.7-2.8-2.7zM18 12h6v16h-6zm4-2c-1.5 0-2.8 1.2-2.8 2.7S22.5 14.7 24 14.7 26 13.5 26 12s-1.2-2.7-2.8-2.7zM32 12h6v16h-6zm4-2c-1.5 0-2.8 1.2-2.8 2.7S36.5 14.7 38 14.7 40 13.5 40 12s-1.2-2.7-2.8-2.7z"></path>
          </svg>
        </a>
        <a href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M22 4.6c-.8.3-1.6.5-2.5.6.9-.6 1.6-1.6 1.9-2.7-.8.5-1.6.8-2.5 1-1.6-.9-3.5-.9-5.2 0-1.7.9-2.7 2.6-2.7 4.4v.6C10 7.3 7.8 6.4 5.6 4.6 4.7 5.5 4.2 6.8 4.2 8c0 1.7.8 3.3 2.2 4.2-1.1 0-2.2-.3-3.1-.8v.1c0 2.1 1.5 4 3.6 4.4-1 .3-2.1.4-3.2.2.9 2.5 3.4 4.2 6.4 4.2 7.7 0 11.9-6.4 11.9-12 0-.2 0-.4-.1-.6.8-.6 1.5-1.3 2.1-2.1z"></path>
          </svg>
        </a>
        <a href="#" title="YouTube" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M10 9.5V14l5.5-2.5zM22 12c0 1.2-.5 2.3-1.3 3.1-1.3.3-2.7.4-4.1.3C15.7 15.2 14 14 12 14s-3.7 1.2-4.6 1.4c-1.4.1-2.8 0-4.1-.3C2.5 14.3 2 13.2 2 12s.5-2.3 1.3-3.1c1.3-.3 2.7-.4 4.1-.3C8.3 8.8 10 10 12 10s3.7-1.2 4.6-1.4c1.4-.1 2.8 0 4.1.3C21.5 9.7 22 10.8 22 12z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer