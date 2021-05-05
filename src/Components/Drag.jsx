import React, { Component } from 'react'

export class Drag extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pranav: 0,
            x:0,
             y:0
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.handleMouseDown2 = this.handleMouseDown2.bind(this)
    }
    componentDidMount(){
        this.setState({
            x:this.props.top
        })
    }
    handleMouseDown(event){
        console.log("Mouse Down");
        this.setState({
            pranav: 1,
        })
        console.log(this.state.drag);
    }
    handleMouseDown2(event2){
        console.log("Handle Mouse 2",this.state.pranav)
        if(this.state.pranav === 1){
            this.setState({
                x:event2.clientX,
                y: event2.clientY
            })
            console.log("Item Found")
        }
    }
    handleMouseUp(event){
        if(this.state.pranav === 1){
            this.setState({
                x: event.clientX,
                y: event.clientY,
                pranav: 0
            })
        }
        else{
            console.log("Not Movable")
        }
    }
    
    render() {
        // const positioN = this.props.top != null ? 200 : this.state.y
        // const positioNN = this.state.y = null ? this.state.y : this.props.top 
        return (
            <div onMouseUp={(event)=> this.handleMouseUp(event)}
                    onMouseMove={(event2)=> this.handleMouseDown2(event2) }
                style={{width:"100vw", height:"100vh"}}>
                    {console.log(this.state.pranav)}
                {console.log(this.props.top,"Props data")}
                <div onDrag={(event)=> console.log(event,"event drag")}
                style={{
                    position:"relative",
                    top:`${this.state.y}px`,
                    left:`${this.state.x}px`,
                    width:"100px", 
                    height:"100px", 
                    background:"green"}}
                onMouseDown={(event)=> this.handleMouseDown({type:"child", value: event})}
                >

                    </div>
            </div>
        )
    }
}

export default Drag
