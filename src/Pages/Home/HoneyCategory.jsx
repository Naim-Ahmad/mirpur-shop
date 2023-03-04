import React from 'react';
import beeOnSunflower from '../../Assets/bee-on-sunflower.png';
import download1 from '../../Assets/download (1).png';
import download from '../../Assets/download.png';
import honeyPot from '../../Assets/honey-pot.jpg';
import icon from '../../Assets/icon-4.e804394e.png';
import style from '../../Styles/HoneyCategory.module.css';

export default function HoneyCategory() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className={`${style.left} col-lg-6 mb-5`}>
                        <div className={`${style.HoneyCategoryTitle} mb-5`}>
                            <h1 className="fw-bold mb-4">Our Honey Category</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, eos
                                fugit officiis error ipsum, dolor ducimus nam ratione nulla deleniti
                                inventore blanditiis.
                            </p>
                        </div>
                        <div className={`${style.HoneyCategoryItem}`}>
                            <div className={`${style.honeyItemImage}`}>
                                <img src={download} alt="something" />
                            </div>
                            <div className={`${style.HoneyItemText}`}>
                                <h2>Queen Bee Honey</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing industry has
                                    been the industrys standard eos fugit industrys standard
                                    consectetur ipsum.
                                </p>
                            </div>
                        </div>

                        <div className={`${style.HoneyCategoryItem}`}>
                            <div className={`${style.honeyItemImage}`}>
                                <img src={beeOnSunflower} alt="bee on sunflowers" />
                            </div>
                            <div className={`${style.HoneyItemText}`}>
                                <h2>Sunflower Honey</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing industry has
                                    been the industrys standard eos fugit industrys standard
                                    consectetur ipsum.
                                </p>
                            </div>
                        </div>

                        <div className={`${style.HoneyCategoryItem}`}>
                            <div className={`${style.honeyItemImage}`}>
                                <img src={download1} alt="honeyitemimage" />
                            </div>
                            <div className={`${style.HoneyItemText}`}>
                                <h2>Manuka Honey</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing industry has
                                    been the industrys standard eos fugit industrys standard
                                    consectetur ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className={`${style.icon}`}>
                            <img src={icon} alt="" />
                        </div>
                        <img src={honeyPot} alt="Honey Pot" />
                    </div>
                </div>
            </div>
        </section>
    );
}
