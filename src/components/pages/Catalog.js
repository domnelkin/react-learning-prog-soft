import React from "react";
import '../../App.css';
import goodsList from "../../data/GoodsList";
import { artists, styles } from "../../data/FilterOptions";
import GoodCard from "../GoodCard";
import SelectDropdown from "../SelectDropdown";

const Catalog = () => {
    const catalogItems = goodsList;

    return(
        <div className='catalog-page-container'>
            <div className='filters'>
                <div>
                    <SelectDropdown
                        options={artists}
                    />
                </div>
                <div>
                <SelectDropdown
                        options={styles}
                    />
                </div>
                <div>
                    <button className='apply-button'>Apply</button>
                </div>
            </div>
            <div className='catalog-content'>
                <div className='catalog-items'>
                    {catalogItems.map((element, index) => 
                        <div className={`item-${index}`}>
                            <GoodCard
                                good_code={Math.floor(Math.random() * 9999)}
                                img={element.img}
                                title={element.title}
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