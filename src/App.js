import './style.css';

import { Navbar } from './components/Navbar';
import { Borderheader } from './components/BorderHeader';
import { PostForm } from './components/PostForm';


function App() {
  return (
    <div>
         <Navbar/>
        <Borderheader/>
        <PostForm/>

         <div className="px-6 bg-reddit_dark text-reddit_text ">
           <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md ">
             <h5 className="text-reddit_text-darker text-sm mb-1" >Posted by u/test123 5 hours ago</h5>
             <h2 className="text-xl mb-3">Backend freelancers, where do you find clients?</h2>
             <div className="text-sm leading-6">
             <p>I am a freelancer that prefers backend. I had some clients by referral or
             by contacting them and with luck they needed that kind of website.

             However, except from that, if they don’t contact me, how can I find some with backend needs?
             </p>
             </div>
           </div>
         </div>

    </div>
  );
}

export default App;
