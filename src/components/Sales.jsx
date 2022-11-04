import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({ endpoint, isPopuparSales = false }) => {

    const { title, items } = endpoint || {};

    return (
        <div className='nike-container'>
            <Title title={title} />
            <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ isPopuparSales ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1' }`}>
                {
                    items?.map((item, i) => (
                        <Item key={i} {...item} isPopuparSales={isPopuparSales} />
                    ))
                }
            </div>
        </div>
    )
}

export default Sales