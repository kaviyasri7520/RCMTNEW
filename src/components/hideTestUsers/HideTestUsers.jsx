import React from "react"
import './HideTestUsers.css'

const HideTestUsers = ({handleChange,checkboxId,currentState}) => {

    return(
        <div className="test-user-hide-container">
        <input type='checkbox' className="test-user-hide-input" id={checkboxId} onChange={handleChange} value={currentState} /><label className="test-user-hide-label" >Hide Test users</label>
        </div>
    )

}

export default HideTestUsers