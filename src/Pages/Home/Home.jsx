import React from 'react';
import Header from '../../Components/Header';
import HoneyCategory from './HoneyCategory';
import Product from './Product';

export default function Home() {
    return (
        <>
            <Header />
            <HoneyCategory />
            <Product />
        </>
    );
}
