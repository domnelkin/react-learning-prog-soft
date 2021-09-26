import React from "react";
import '../../App.css';
import goodsList from "../../data/GoodsList";
import GoodCard from "../GoodCard";

const Catalog = () => {
    const catalogItems = goodsList;

    return(
        <div className='catalog-page-container'>
            <div className='filters'>
                FILTERS SHOULD BE THERE!
            </div>
            <div className='catalog-content'>
                <div className='catalog-items'>
                    {catalogItems.map((element, index) => 
                        <div className={`item-${index}`}>
                            <GoodCard
                                good_code={Math.floor(Math.random() * 9999)}
                                img={element.img}
                                title={element.name}
                                text={cutDescription(element.description)}
                                price={element.price}
                                link={`/catalog${element.link}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function cutDescription(text) {
    return text.length < 100 
    ? text 
    : `${text.substring(0, 100)}...`;
}

export default Catalog;