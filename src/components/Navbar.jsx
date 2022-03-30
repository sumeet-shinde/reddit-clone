import Logo from "../images/Logo.png"
import Avatar from "../images/Avatar.svg"
import { BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon } from "@heroicons/react/outline"


export const Navbar=()=>{
    return (
        <div>
          <header className="flex w-full bg-reddit_dark p-2">
            <div className='mx-4 flex'>
            <img src={Logo} alt="" className="w-8 h-8 mr-4"/>
          
    
               <form action='' className="bg-reddit_dark-brighter px-3 flex rounded-md border border-gray-700 mx-4 flex-grow">
                 <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
                 <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white " placeholder="Search" />
               </form>
    
    
              <button className="px-2 py-1">
                 <ChatIcon className="text-gray-400 w-6 h-6 mx-2" />
              </button>
              <button className="px-2 py-1">
                 <BellIcon className="text-gray-400 w-6 h-6 mx-2" />
              </button>
              <button className="px-2 py-1">
                  <PlusIcon className="text-gray-400 w-6 h-6 mx-2" />
              </button>


              <button className="rounded-md flex ml-6 " >
                <div className="w-8 h-8 bg-gray-600 rounded-md" >
                   <img src={Avatar} alt="" style={{filter: 'invert(100%)'}} className="block" />
               </div>
               <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 ml-1" />
              </button>
              </div>
            </header>
          
        </div>
      );
}