import React from 'react';

let Text = ({quote, author, colors}) => {
    return (
        <article className='container-text'>
            <div id='text' className='text-quote'>
                <h4 className=''style={{color: colors}}>{quote}</h4>
            </div>
            <div id='author' className='text-author'>
                <p className=''style={{color: colors}}>{author}</p>
            </div>

        </article>
    )
}

export default Text;

