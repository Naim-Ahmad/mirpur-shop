import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import image from '../../Assets/honey pure.png';
import style from '../../Styles/Product.module.css';

export default function Product() {
    return (
        <section className={style.section}>
            <div className="container">
                <div className={`${style.productTitle} text-center m-auto mb-5`}>
                    <h1>
                        100% Fresh <span>Honey</span>
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        has been the industrys standard consectetur adipisicing elit.
                    </p>
                </div>

                <div className="row gap-3 p-3">
                    <div className={`${style.productItem} col-xlg-3 col-md-6`}>
                        <div className={`${style.img} mb-3`}>
                            <img src={image} alt="" />
                        </div>
                        <div className={`${style.content} p-3`}>
                            <h2>Manuka Honey </h2>
                            <div
                                className={`${style.contentBtm} d-flex justify-content-between align-items-center`}
                            >
                                <div className={`${style.price}`}>
                                    <p>
                                        <span>&#2547;100 </span>
                                        <s>&#2547;200</s>
                                    </p>
                                </div>
                                <div className={`${style.review}`}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.productItem} col-xlg-3 col-md-6`}>
                        <div className={`${style.img} mb-3`}>
                            <img src={image} alt="" />
                        </div>
                        <div className={`${style.content} p-3`}>
                            <h2>Manuka Honey </h2>
                            <div
                                className={`${style.contentBtm} d-flex justify-content-between align-items-center`}
                            >
                                <div className={`${style.price}`}>
                                    <p>
                                        <span>&#2547;100 </span>&#2547;200
                                    </p>
                                </div>
                                <div className={`${style.review}`}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.productItem} col-xlg-3 col-md-6`}>
                        <div className={`${style.img} mb-3`}>
                            <img src={image} alt="" />
                        </div>
                        <div className={`${style.content} p-3`}>
                            <h2>Manuka Honey </h2>
                            <div
                                className={`${style.contentBtm} d-flex justify-content-between align-items-center`}
                            >
                                <div className={`${style.price}`}>
                                    <p>
                                        <span>&#2547;100 </span>&#2547;200
                                    </p>
                                </div>
                                <div className={`${style.review}`}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.productItem} col-xlg-3 col-md-6`}>
                        <div className={`${style.img} mb-3`}>
                            <img src={image} alt="" />
                        </div>
                        <div className={`${style.content} p-3`}>
                            <h2>Manuka Honey </h2>
                            <div
                                className={`${style.contentBtm} d-flex justify-content-between align-items-center`}
                            >
                                <div className={`${style.price}`}>
                                    <p>
                                        <span>&#2547;100 </span>&#2547;200
                                    </p>
                                </div>
                                <div className={`${style.review}`}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
