import React from "react"
import Menu from "./Menu"

const Layout = ({ title = 'Title', description = 'description', className, children }) => {//destructive from props 
    return (<div>
       <Menu />
    <div className="jumbotron">
        <h2 className="text-center">
            {title}
                <p>{description}</p>
        </h2>
    </div>
        <div className={className}>{children}</div>
    </div>
    )
}

export default Layout;