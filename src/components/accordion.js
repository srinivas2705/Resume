import React, { useState, useRef } from "react";
import "../styles/accordion.css";
export default function Accord() {
    const [state, setState] = useState(false)
    // const refer = useRef();

    // const toggle =()=>{
    //     const rfcurrent = refer.current;
    //     rfcurrent.style.maxHeight = "100px";
    //     rfcurrent.style.overflow = "hidden";
    // }


    return (
        <div className="accordination">
            <div className="accord-head">
                <p className="according"><h4>what is accordion?</h4><button onClick={() => setState(!state)}>Click me</button></p>
                {/* <p>accordion is nothing but a collapse.</p> */}
                <div>
                    {state && <div className="accord-container">
                        <p>dnfnjdshfdaskfjljfdasfjoadfkldsafjl</p>
                        <p>dnfnjdshfdaskfjljfdasfjoadfkldsafjl</p>
                        <p>dnfnjdshfdaskfjljfdasfjoadfkldsafjl</p>
                        <p>dnfnjdshfdaskfjljfdasfjoadfkldsafjl</p>
                        <p>dnfnjdshfdaskfjljfdasfjoadfkldsafjl</p>
                        <p>dnfnjdshfdaskfjljfdasfjoadfkldsafjl</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

