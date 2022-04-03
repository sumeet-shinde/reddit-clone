
export const Borderheader=()=>{
    return (
        <>
          <div >
          <section  className="h-20 max-w-xl bg-cover"  style={
            {backgroundImage: 'url("https://styles.redditmedia.com/t5_2qs0q/styles/bannerBackgroundImage_7glcgg5ymxp21.png?width=4000&s=9684bc66e812b8730ad694c3f454da8c00a493d7")'}
          }>
          
          </section>
        </div>



        <div className="bg-reddit_dark-brighter" >
          <div className="mx-4 relative flex">
             <div className="h-20 w-20 rounded-full overflow-hidden relative -top-4">
               <img 
               src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?width=256&format=pjpg&s=0a2e472f6fae0712fee4a3b5d44920fe35dbcdaa" alt="" className="w-full"/>
               </div>

               <div className="pt-2 pl-4">
                 <h1 className="text-gray-300 text-2xl">webdev: reddit for web developers</h1>
                 <h5 className="text-gray-500">r/webdev</h5>
               </div>
          </div>
        </div>
        </>
    )
}