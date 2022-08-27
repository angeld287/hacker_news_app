import React from "react"
import "./styles.css"

const Button: React.FC = () => {
    return (
        <div className="btn-group">
            <button>Apple</button>
            <button>Samsung</button>
            <button>Samsung</button>
            <button>Samsung</button>
            <button>Sony</button>
        </div>
    )
}

export default React.memo(Button)