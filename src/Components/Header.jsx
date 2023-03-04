import React from 'react';
import image1 from '../Assets/animated-honey.png';
import image2 from '../Assets/bee-on-sunflower.png';
import beesSmallHome from '../Assets/bees-small-home.png';
import style from '../Styles/Header.module.css';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className={`${style.header}`}>
            <Navigation />
            <div className="container d-sm-flex">
                <div className={`${style.heroHeaderWrapper}`}>
                    <div className={`${style.rightSide}`}>
                        <div className={`${style.img2}`}>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </div>

                <div className={`${style.img1}`}>
                    <img src={image1} alt="" />
                </div>

                <div className={`${style.leftSide}`}>
                    <div className={`${style.leftImage}`}>
                        <img src={beesSmallHome} alt="" />
                    </div>
                    <div className={`${style.sideTitle}`}>
                        <h1>
                            <span>FRESH</span>
                            <br />
                            ORGANIC <br />
                            <span>HONEY</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}
