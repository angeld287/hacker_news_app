import React from "react"
import { IButtonGroup } from "../../interfaces/components/IButtonGroup"
import "./styles.css"

const Button: React.FC<IButtonGroup> = ({ buttons }) => {
    return (
        <div className="btn-group">
            {buttons.map(btn => <button onClick={btn.action} >{btn.text}</button>)}
        </div>
    )
}

export default React.memo(Button)