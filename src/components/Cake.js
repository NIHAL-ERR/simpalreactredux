import React from 'react'
import {buyCake} from "../redux/index"
import {connect} from "react-redux"
 function cake(props) {
    return (
        <div>
            <h1>Number of cake-{props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        numOfCakes:state.numOfCakes
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cake);