import React from "react"
import { IButtonGroup } from "../../interfaces/components/IButtonGroup"
import "./styles.css"

const Button: React.FC<IButtonGroup> = ({ buttons }) => {
    return (
        <div className="btn-group">
            {buttons.map(btn => <button key={`key-${btn.text}`} className={btn.isActive ? 'btn-active' : 'btn-inactive'} onClick={btn.action} >{btn.text}</button>)}
        </div>
    )
}

export default React.memo(Button)