import React from 'react'

const Categories = ({ categories, filterItems }) => {
    return (
        <div className='btnContainer'>
            {
                categories.map((category, index) => {
                    return <button type='button' key={index} className="filterBtn" onClick={() => filterItems(category)} >
                        {category}
                    </button>
                })
            }
        </div>
    )
}

export default Categories