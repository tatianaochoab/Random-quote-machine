import React from 'react';
import Text from './Text';
import ButtonAll from './Button';

const Container = ({ quote, author, colors, changeQuote }) => {
    return (
        <section id='quote-box' className='container-all'>
            <Text
                quote={quote}
                author={author}
                colors={colors}
                />
            <ButtonAll
                changeQuote={changeQuote}
                quote={quote}
                colors={colors}
            />
        </section>
    )
}

export default Container;

