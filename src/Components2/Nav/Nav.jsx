import Typography  from '@material-ui/core/Typography'
import MoreVert from '@material-ui/icons/MoreVert'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import React,{ useContext } from 'react'
import { UserContext } from "../../App2"

export default function Nav() {
    const context = useContext(UserContext)
    const Mynav = context.state.scroll > 0 ? {display:"block"} : {visibility:"hidden"}
    return (
        <div style={Mynav}>
            <div className="nav">
                <div className="nav-extra">

                </div>
                <div className="nav-left">
                    
                        <MoreHoriz style={{positon:"absolute"}} className="morehoriz" />
                        <MoreVert className="morevert"/>
                    <Typography variant="h5">
                        Pranav
                    </Typography>
                </div>
                <div className="nav-right">
                    <Typography variant="h6" className="nav-text">Home</Typography>
                    <Typography variant="h6" className="nav-text">Home</Typography>
                    <Typography variant="h6" className="nav-text">Home</Typography>
                    <Typography variant="h6" className="nav-text">Home</Typography>
                </div>
            </div>
        </div>
    )
}
