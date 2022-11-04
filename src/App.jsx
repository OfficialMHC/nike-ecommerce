import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data';

const App = () => {
    return (
      	<>
            <Navbar />
            <Cart />
            <main className='flex flex-col gap-16 relative'>
                <Hero heroapi={heroapi} />
                <Sales endpoint={popularsales} isPopuparSales />
                <FlexContent endpoint={highlight} isHighlight />
                <Sales endpoint={toprateslaes} />
                <FlexContent endpoint={sneaker} />
                <Stories story={story} />
                <Footer footerAPI={footerAPI} />
            </main>
        </>
    )
}

export default App