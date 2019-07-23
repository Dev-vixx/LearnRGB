import React from 'react'
import { NavLinks as Links} from "./NavLinks";
export const Nav = () =>
{
    // inline styling 
    let style = {
        backgroundColor: "#011627",
        boxShadow: "0 2px 4px 0 #aaa",
        height: "60px",
        width: "100%",
        position: "fixed",
        // this holds the space around the navigation bar
        container: {
            padding: "0 50px"
        },
        // end of the container object
        brand: {
            color: "#fff !important",
            position: "absolute",
            marginTop: "20px",
            fontFamily: "fira sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            textTransform: "uppercase !important"
        }
    }
    
    return(
        <div className="navigation" role="navigation" style={style}>
            {/* displaying the brand at the left coner with a space of 50px from the left and right */}
            <div style={style.container }>
                {/* brand styling  */}
                <div style={style.brand}>
                    <a href="/" style={{ color: "#fff", textDecoration: "none"}}>
                            <span>Learn</span><span>RGB</span>
                    </a>
                </div>
                {/* The basic App routes/links to toggle the game mode  */}
                <Links />
            </div>

        </div>
    )
}