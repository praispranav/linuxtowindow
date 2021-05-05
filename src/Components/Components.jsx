

//Custom Scroll Bar 

//custom scroll bar 



import  Button  from '@material-ui/core/Button';
import React,{ useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Route, Switch } from "react-router-dom"

function Components() {
    const [Count, setCount] = useState(0);
    useEffect(() => {
        // window.addEventListener('scroll'?, setCount(Count + 1))
        AOS.init({duration:2000})
    }, [])
    const cont = React.createRef()

    const handleClick = () => {
        const Scc = document.getElementById('pranav');
        Scc.scrollBy(100,0)
    }

    const handleClick2 = () => {
        const Scc = document.getElementById('pranav');
        Scc.scrollBy(-100,0)
    }
    
    return (
        <div style={{overflowX:"scroll",overflowY:"hidden", width:"100vw"}} id="pranav" className="ScrollSample">
            
            <Button onClick={handleClick} style={{position:"fixed", right:"0", top:"200px"}}>Click Me To Scroll Left</Button>
            <Button onClick={handleClick2} style={{position:"fixed", left:"0", top:"200px"}}>Click Me To Scroll Right</Button>
            {/* <div onScroll={(event)=> console.log(event)} style={{width:"10vw", height:"10vh", overflow:"scroll"}} id="pranav">
                <button onClick={handleClick} style={{position:"fixed"}}>Scroll</button>
            <h2 style={{background:"red", position:"fixed"}}>Count - {Count}, {window.scrollBy(10000,100)}</h2>
            <h1 ref={cont}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia possimus doloremque at similique error eaque soluta earum, vitae fuga quod nostrum nesciunt aliquam. Illum hic illo pariatur aperiam nemo asperiores quod temporibus. Vel deleniti incidunt animi tenetur unde, iure, fugiat culpa quidem sit aut architecto laboriosam eius libero quis modi repellat ullam, recusandae quasi molestias minus possimus alias vitae? Repellendus ex, asperiores quos vel ut ad eaque sit in velit est autem ab. Ad aliquid perferendis beatae modi necessitatibus labore sequi, alias assumenda quia ipsa accusantium eius consequatur omnis accusamus. Officiis consequuntur voluptas sed exercitationem praesentium eum dolorum at magnam sint autem, fugit veniam doloribus velit a eveniet ab rem dolorem non ipsum doloremque iure reprehenderit. Nulla repudiandae dolore temporibus voluptatum facere, quos dolorum quisquam! Est odio voluptatum sapiente officiis nemo architecto sed incidunt pariatur repudiandae? Tempora neque molestias, dicta voluptatibus animi facilis soluta aliquid nam est numquam consectetur repudiandae dolorem ducimus mollitia, odit dolorum qui similique deserunt consequatur optio eos distinctio. Provident, optio, cum ipsam voluptas laborum placeat rerum, iure assumenda excepturi eum amet dolorem vitae perferendis ea blanditiis. Omnis rem nam nemo, necessitatibus, modi qui iste fugit minima laudantium non temporibus veniam dolorum id. Optio quos nobis deserunt soluta fuga in rem est reiciendis quas. Quos recusandae porro quam tenetur est dignissimos vitae voluptatum ipsa repudiandae, consectetur, eum dolore reprehenderit ex modi. Magni natus, mollitia maxime laudantium odio nulla pariatur deserunt sit reprehenderit possimus vero, labore eius ratione. Odio quasi expedita iste nihil, ipsam non sunt accusantium perspiciatis! Explicabo voluptatibus velit et at dignissimos quam minima, blanditiis delectus quaerat saepe totam aliquam repellendus neque quae, veniam est sapiente excepturi ad animi accusantium. Rerum nulla sit eum optio ad dignissimos libero consectetur corporis quod fugit inventore adipisci aut voluptatibus molestias dolore reprehenderit corrupti laudantium eaque suscipit, laboriosam alias cum a doloribus officiis? Beatae deleniti aperiam aspernatur modi ipsam est corrupti, similique quisquam nesciunt expedita. Natus libero quidem, omnis maxime impedit facere ipsum inventore id non magni asperiores cupiditate dolorem voluptatum facilis ipsam aspernatur accusantium quaerat. Laboriosam aspernatur quibusdam explicabo consectetur beatae expedita! Sed asperiores aliquam officiis, quisquam vitae culpa dolorum modi expedita maxime ducimus. Inventore non excepturi consectetur incidunt ipsum necessitatibus exercitationem rerum nisi, quos perferendis quibusdam sint numquam, illum dignissimos saepe, nam adipisci delectus iusto doloribus? Unde illo excepturi ab deserunt nobis. Non, libero odio illo suscipit dolore aperiam adipisci dolores sit eos fuga ut quo, eveniet eius recusandae culpa incidunt commodi esse necessitatibus reiciendis doloremque labore. Cum tenetur id quas esse cumque? Culpa cumque possimus quo deserunt iure animi soluta quas voluptatibus, repellendus voluptates maxime ad distinctio libero? Ea atque nam hic harum praesentium vitae reiciendis officia dolorem fuga, eum repellendus delectus cumque incidunt quia dolor corporis laboriosam sint repudiandae dolores molestiae veritatis non minima culpa? Voluptatem tempore sit dolores dolor explicabo atque odit maiores iste dolorem repellat expedita recusandae asperiores blanditiis perferendis, vitae cum debitis fuga eos, optio rerum voluptate veniam ex. Odio, minima rem.</h1>
            </div> */}
        <div style={{display:"inline-flex"}}>
            <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
            </div>
            <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>
        <div data-aos={'fade-up'} style={{width:"100px", height:"100px", background:"red", margin:"1em"}}>
            
        </div>  
        </div>

        </div>
    )
}

export default Components
