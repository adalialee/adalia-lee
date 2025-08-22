import React, { useEffect } from "react";
import "./index.css";

function GraphicDesign() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div className="section">
            <h1 className="g-header">Graphic Design</h1>
            <div className="g-design-list">
                <div className="g-design">
                    <h3 className="p-header">
                        Wallpapers
                    </h3>
                    <p className="g-intro">
                        In most of my middle school and high school years, I was part of my schools' yearbook classes. One of my favorite perks of being in yearbook was gaining access to Adobe programs. I began with making yearbook icons, then added in designing my own phone and laptop wallpapers - these are a few of my favorites!
                    </p>
                    <div className="top-wallpapers">
                        <img src="/adalia-lee/media/balloon.png" alt="balloon" className="img-fluid"  loading="lazy" />
                        <img src="/adalia-lee/media/city.png" alt="city" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/road.png" alt="road" className="img-fluid" loading="lazy" />
                    </div>
                    <img src="/adalia-lee/media/window.png" alt="window" className="img-fluid" style={{ width: "100%" }} loading="lazy" />
                </div>

                <div className="g-design">
                    <h3 className="p-header">
                        Spotify Covers
                    </h3>
                    <p className="g-intro">
                        I love listening to music, so I spend quite some time on Spotify. All of my public playlists' covers are designed by me - I have many more private playlists that I'll turn public once I have a cover I'm satisfied with.
                    </p>
                    <div className="spotify">
                        <img src="/adalia-lee/media/bike.png" alt="bike" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/matcha-drink.png" alt="desk" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/desk.png" alt="desk" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/flowers.png" alt="flowers" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/macarons.png" alt="train" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/train.png" alt="train" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/cafe.png" alt="cafe" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/drink.png" alt="drink" className="img-fluid" loading="lazy" />
                    </div>
                </div>

                <div className="g-design">
                    <h3 className="p-header">
                        More Designs
                    </h3>
                    <p className="g-intro">
                        Here are a few more of my designs, including a flyer and design I made for my Color and Composition Tools course, the first icon I made for yearbook, and one of the designs I made in my free time I had an increased focus on learning/using proper techniques.
                    </p>
                    <div className="others-top">
                        <img src="/adalia-lee/media/flyer.png" alt="flyer" className="img-fluid" loading="lazy" />
                        <div className="others-top-right">
                            <img src="/adalia-lee/media/room.png" alt="room" className="img-fluid" loading="lazy" />
                            <img src="/adalia-lee/media/fruit.png" alt="fruit" className="img-fluid" loading="lazy" />
                        </div>
                    </div>
                    <div className="others-bottom">
                        <img src="/adalia-lee/media/running.png" alt="running" className="img-fluid" loading="lazy" />
                        <img src="/adalia-lee/media/actor.png" alt="actor" className="img-fluid" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default GraphicDesign;