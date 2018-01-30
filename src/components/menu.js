import React from "react";
import { NavBar } from "antd-mobile";

function PageHead(props){
    return (
        <NavBar>
            {props.title}
        </NavBar>
    )
}

export default PageHead;
