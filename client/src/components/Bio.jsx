
const Bio = () => {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        
        <figure className="mt-10">
          <blockquote className="text-center text-3xl font-semibold text-gray-900 sm:text-2xl/9">
            <p className="md:text-6xl">
            Business IT and Security Services
            </p>
            <p className="text-sm text-slate-500 mt-4">
            Today, businesses need agility, mobility, and efficiency like never before. It’s time for a different kind of IT service provider—one that will meet your business where it is now and take you anywhere you want to go.
            </p>
          </blockquote>
         <div className="flex items-center justify-center text-center p-4">
         <button className="bg-orange-600  py-2 rounded-2xl text-white text-2xl px-4 md:px-[70px] font-bold hover:bg-blue-900 duration-300 hover:border border">Export Options</button>
         </div>
          
        </figure>
      </div>
    </section>
    </>
  )
}

export default Bio