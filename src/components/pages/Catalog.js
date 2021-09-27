import React from "react";
import '../../App.css';
import goodsList from "../../data/GoodsList";
import { artists, styles } from "../../data/FilterOptions";
import GoodCard from "../GoodCard";
import SelectDropdown from "../SelectDropdown";

const Catalog = () => {
    const catalogItems = goodsList;

    return (
        <div className='catalog-page-container'>
            <div className='filters'>
                <div className='filter-panel'>
                    <div>
                        <SelectDropdown
                            options={artists}
                            placeholder='Artists...'
                        />
                    </div>
                    <div>
                        <SelectDropdown
                            options={styles}
                            placeholder='Styles...'
                        />
                    </div>
                </div>
                <div>
                    <button className='apply-button-dropdown'>Apply</button>
                </div>
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