export default function Home() {
  return (
 <div className="flex gap-8 flex-col min-h-screen">
  <nav className=" w-full shadow-sm flex items-center justify-center px-4 py-2">
    <div className="flex justify-between items-center py-4 container">
    <div className="flex items-center gap-2">
      
         <h1 className="text-2xl font-bold tracking-[-.01em]">
           Logo
         </h1>
       </div>
       <div>
          <div className=" flex lg:hidden gap-4">
            <button className=" cursor-pointer border border-solid border-black/[.08] hover:border-1  transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
            button 1
            </button>
          </div>
       </div>
     <div className="hidden lg:flex gap-4">
    <button className=" cursor-pointer border border-solid border-black/[.08] hover:border-1  transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
     button 1
    </button>
    <button className=" cursor-pointer border border-solid border-black/[.08] hover:border-1  transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
     button 2
    </button>
    <button className=" cursor-pointer border border-solid border-black/[.08] hover:border-1  transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
     button 3
    </button>
    <button className=" cursor-pointer border border-solid border-black/[.08] hover:border-1  transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
     button 4
    </button>
    <button className=" cursor-pointer border border-solid border-black/[.08] hover:border-1  transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
     button 5
    </button>
     </div>
    </div>
  </nav>
    <div className="gap-16  font-[family-name:var(--font-geist-sans)] flex justify-center items-center flex-col">
      <main className="flex flex-col gap-22 row-start-2 p-4  sm:items-start container">
        <div className="flex flex-col gap-[16px] items-center bg-amber-400 w-full h-[500px] rounded-2xl ">
          
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[32px] w-full">
          <div className="w-full h-[170px] lg:h-[300px] bg-blue-900 rounded-2xl"/>
          <div className="w-full h-[170px] lg:h-[300px] bg-amber-500 rounded-2xl"/>
          <div className="w-full h-[170px] lg:h-[300px] bg-amber-400 rounded-2xl"/>
          <div className="w-full h-[170px] lg:h-[300px] bg-purple-800 rounded-2xl"/>
        </div>

        <div>
          <div className="h-[48px] w-full lg:w-[450px] bg-gray-300">

          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[32px] w-full">
          <div className="flex flex-col gap-[28px]">
            <div className="w-full h-[60px]  bg-blue-900 rounded-xl"/>
            <div className="h-[200px] w-full  bg-gray-300" />
            <div className="h-[50px] w-full  bg-gray-300" />
          </div>
          <div className="flex flex-col gap-[28px]">
            <div className="w-full h-[60px]  bg-amber-500 rounded-xl"/>
            <div className="h-[200px] w-full  bg-gray-300" />
            <div className="h-[50px] w-full  bg-gray-300" />
          </div>
          <div className="flex flex-col gap-[28px]">
            <div className="w-full h-[60px]  bg-amber-400 rounded-xl"/>
            <div className="h-[200px] w-full  bg-gray-300" />
            <div className="h-[50px] w-full  bg-gray-300" />
          </div>
          <div className="flex flex-col gap-[28px]">
            <div className="w-full h-[60px]  bg-purple-800 rounded-xl"/>
            <div className="h-[200px] w-full  bg-gray-300" />
            <div className="h-[50px] w-full  bg-gray-300" />
          </div>
         
        </div>
     
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  w-full">
          <div className="flex flex-col gap-[28px]">
          <div className="h-[48px] w-full bg-gray-300"/>
          <div className="h-[80px] w-full bg-gray-300"/>
          </div>
          <div className="h-full w-full flex justify-end items-end">
          <div className="h-[100px] w-full bg-amber-500 flex justify-center items-center px-10">
              <div className="h-[20px] w-full bg-white rounded-2xl"></div>
          </div>
          </div>
        </div>
       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-blue-800 w-full py-8">
       <div className="container">
      <div className="grid grid-cols-1 gap-4 px-4 lg:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
        <div className="flex flex-col gap-6">
                <div className="h-[24px] w-full lg:w-1/3 bg-white"></div>
                <div className="flex gap-4">
                  <div className="h-[54px] w-[54px] bg-white rounded-4xl"/>
                  <div className="h-[54px] w-[54px] bg-white rounded-4xl"/>
                  <div className="h-[54px] w-[54px] bg-white rounded-4xl"/>
                  <div className="h-[54px] w-[54px] bg-white rounded-4xl"/>
                </div>
               
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                <div className="flex flex-col gap-4"> 
                <div className="h-[24px] w-full bg-white"/>
                  <div className="h-[24px] w-2/3 bg-white"/>
                  <div className="h-[24px] w-2/3 bg-white"/>
                  <div className="h-[24px] w-2/3 bg-white"/>
                </div>
                <div className="flex flex-col gap-4"> 
                <div className="h-[24px] w-full bg-white"/>
                  <div className="h-[24px] w-2/3 bg-white"/>
                  <div className="h-[24px] w-2/3 bg-white"/>
                  <div className="h-[24px] w-2/3 bg-white"/>
                </div>
              </div>
        </div>
        <p className="text-white">2025 Portal Fonte. Todos os direitos reservados</p>
      </div>
       </div>
       
      </footer>
    </div>
 </div>
  );
}
