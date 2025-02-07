
const Bio2 = () => {
    return (
      <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          
          <figure className="mt-10">
         <div className="flex items-center justify-center text-center p-4">
         <p className="text-2xl text-slate-800">IT Services</p>
         </div>
            <blockquote className="text-center text-3xl font-semibold text-gray-900 sm:text-2xl/9">
              <p className="md:text-6xl">
              The Right Fit
              </p>
              <p className="text-lg text-slate-500 mt-4">
              As an award-winning managed services provider, our team delivers fast, dependable IT support and help desk services.
              We offer a range of coverage options to give you the level of support that’s best for your business.
              </p>
            </blockquote>
           <div className="flex items-center justify-center text-center p-4">
           <button className="bg-orange-600  py-2 rounded-2xl text-white text-2xl px-[70px] hover:bg-blue-900 duration-300 hover:border border ">Export Options</button>
           </div>
            
          </figure>
        </div>
      </section>
      </>
    )
  }
  
  export default Bio2