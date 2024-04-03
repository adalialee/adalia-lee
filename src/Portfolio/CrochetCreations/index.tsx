import React from "react";
import "./index.css";

function CrochetCreations() {
    return (
        <div className="all" style={{justifyContent: "center"}}>
            <p className="header" style={{paddingTop: '172px'}}>Crochet Creations</p>
            <p className="summary">
                I wanted to learn how to crochet because I'd seen lots of cute posts on Instagram and my high school calculus teacher mentioned it. My sign to actually start was my senior year econ final project, where one of the options was to document the process of picking up a new skill. I started with following YouTube tutorials, but eventually picked up on the patterns. Now, I try to be more creative with my work since I can freehand crochet. Some of my facorite things to make are amigurumi plushies, clothes, and other accessories/decorations. Teaching people how to crochet and crocheting with my friends brings me lots of joy, too. In Code4Community, we planned three crochet nights to teach our memberes to make heart decorations for our Valentine's Day Prom, which was super fun and rewarding!
            </p>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="ducks.png" className="img-fluid" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="c4c.png" className="img-fluid" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="bird.png" className="img-fluid" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5vw' }}>
                <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="beanie.png" className="img-fluid" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="shirt.png" className="img-fluid" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="toffee.png" className="img-fluid" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5vw' }}>
            <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="crabs.png" className="img-fluid" style={{ marginBottom: '5vw' }}/>
                    <img src="sun.png" className="img-fluid" style={{ marginBottom: '5vw' }}/>
                    <img src="garlands.png" className="img-fluid"/>
                </div>
                <div style={{ width: '45vw', marginRight: '5vw', height: '100%' }}>
                    <img src="frog.png" className="img-fluid" style={{ marginBottom: '5vw' }} />
                    <img src="headband.png" className="img-fluid" style={{ marginBottom: '5vw' }}/>
                    <img src="bear.png" className="img-fluid" style={{marginBottom: '5vw'}}/>
                </div>
            </div>
        </div>     
    );
}

export default CrochetCreations;