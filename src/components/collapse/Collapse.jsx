import React from "react";
import "./Collapse.css";

import collapseArrow from "../../assets/collapseArrow.png";


function Collapse(props) {    
    const [isCollapsed, setIsCollapsed] = React.useState(true);

    return (
        <div className={"container-collapse"}>    
            <button className="collapse-btn">
                <div className="collapse-div " onClick={() => setIsCollapsed(!isCollapsed)}> {props.titleCollapse} 
                    <span className={`icon-collapse ${ isCollapsed ? "collapsed" : "expanded" }`}>
                        {<img src={collapseArrow} alt="arrow-collapse" />}
                    </span>
                </div>
            </button>

            <div className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`} aria-expanded={isCollapsed}>
                <p>{props.children}</p>
            </div>
        </div>
      );
    };
             
export default Collapse;
      