import React,{useState, useEffect} from 'react';
import logo from  "../logo.svg"

// const AddPhotos = () => {
//     const [Background, setBackground] = useState({pranav:""});
//     // const [backgroundText, setbackgroundText] = useState("")

//     useEffect(()=>{
//         setBackground({pranav:"red"})
//     },[])
//     const Back = (event)=>{
//         console.log(event.target.value)
//         setBackground({pranav:event.target.value})
//     }
//     return (
//         <div>
//             <img src={logo} alt="none"
//                 style={{
//                     width:"200px",
//                     background:Background.pranav
//                 }}
//             />
//             {Background.pranav  }
//             <input type="text" name="pranav"
//                 onChange={(event)=> Back(event)} value={Background.pranav} />
//         </div>
//     );
// }


class AddPhotos extends React.Component{
    constructor(){
        super()
        this.state = {
            left:0,
            right:0,
            top:'',
            bottom:'',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
    }
    render(){
        return(
            <>
                <div style={{
                    position:"relative",
                    top:`${this.state.left}px`,
                    right:`${this.state.right}px`,
                    width:'100px',
                    height:"100px",
                    background:"red",
                }}>
                </div>
                {this.state.left}
                {this.state.right}
                <input type="text"
                    onChange={this.handleChange}
                    name="right"
                    value={this.state.right} />
                <input type="text"
                    onChange={this.handleChange}
                    name="left"
                    value={this.state.left} />
            </>
        )
    }
}

function Myf() {
    // const [state, setstate] = useState(initialState);
    return (
        <>
            <div className="border2">
                
            </div>
            <div style={{display:"flex"}}>
                <div className="border3">

                </div>
                <div className="myapp">
                    
                </div>
                <div className="border4">

                </div>
            </div>
            <div className="border">

            </div>
        </>
    )
}


export default AddPhotos;
