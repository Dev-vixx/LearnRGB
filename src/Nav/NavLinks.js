import React from 'react';

export const NavLinks = () =>
{
    let style = {
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "5px",
        color: "#fff",
        li: {
            padding: "0 20px"
        }
    }
    return(
        <div style={style}>
            <ul style={{
                display: "flex",
                listStyle: "none"
            }}>
                {/* react router dom NavLinks here */}
                <li style={style.li}>Easy</li>
                <li style={style.li}>Hard</li>
                <li style={style.li}>Expert</li>
                </ul>
        </div>
    )
}
