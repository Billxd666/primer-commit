import React from "react";
import '../styles.css/main.css';

export default function Nav_bar () {
    return(
        <div className="main_bar">
            <div className="downmenu">
                <button className="downbtn">Menu</button>
                <div className="content">
                    <a href="#">nav1</a>
                    <a href="#">nav1</a>
                    <a href="#">nav1</a>
                </div>
            </div>
        </div>
    )
}