import avatar2 from "../images/avatar2.png"

export const PostForm=()=>{
    return (
        <>
     <div className="bg-reddit_dark px-6 py-4 text-gray-400 max-w-xl" >
      <div className="border border-reddit_border p-2 rounded-md flex border-reddit_brighter">
    <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10" >
       <img src={avatar2} alt="" style={{filter:'invert(100%)'}}/>
    </div>
  
     <form className="flex-grow bg-reddit_dark-brighter  border border-reddit_border ml-4 mr-2 rounded-md  " >
       <input type="text" placeholder="New Post" 
            className="bg-reddit_dark-brightest p-2 px-3 w-full text-sm block  rounded-md" />
     </form>

    </div>


   </div>
        </>
    )
}