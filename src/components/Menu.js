import React from 'react'

const Menu = ({ items }) => {

    return (
        <div className='sectionCenter'>
            {items.map((menuItem) => {
                const { id, img, title, price, desc } = menuItem
                return <article key={id} className="menuItem">
                    <img src={img} alt={title} />
                    <div className='itemInfo'>
                        <header>
                            <h4>{title}</h4>
                            <h4 className='price'>{price}₺</h4>
                        </header>
                        <p className='itemText'>{desc}</p>
                    </div>
                </article>
            })}
        </div>
    )
}

export default Menu