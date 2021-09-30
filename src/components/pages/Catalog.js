import React, { useState } from "react";
import './Catalog.css'
import '../../App.css';
import goodsList from "../../data/GoodsList";
import { artists, styles } from "../../data/FilterOptions";
import GoodCard from "../GoodCard";
import SelectDropdown from "../SelectDropdown";
import SearchField from "../SearchField";

const Catalog = () => {
    const [catalogItems, setCatalogItems] = useState(goodsList);

    const searchData = (pattern) => {
        if (!pattern) {
            setCatalogItems(goodsList);
            return;
        }

        const result = catalogItems.filter(item =>
            item.name.toUpperCase().includes(pattern.toUpperCase())
            || item.description.toUpperCase().includes(pattern.toUpperCase())
        );
        const matches = [];
        if (!result.length) {
            setCatalogItems([]);
        } else {
            result.forEach(item => {
                matches.push(item);
            });
            setCatalogItems(matches);
        }
    }

    const filterBy = (fieldName, option) => {
        if (!option) {
            setCatalogItems(goodsList);
            return;
        }

        if (option.value == "All") {
            setCatalogItems(goodsList);
            return;
        }

        const result = goodsList.filter(item => item[fieldName].toUpperCase().includes(option.value.toUpperCase()));
        const matches = [];
        if (!result.length) {
            setCatalogItems([]);
        } else {
            result.forEach(item => {
                matches.push(item);
            });
            setCatalogItems(matches);
        }
    }

    return (
        <div className='catalog-page-container'>
            <SearchField onChange={(e) => searchData(e.target.value)} />
            <div className='filters'>
                <div className='filter-panel'>
                    <div>
                        <SelectDropdown
                            options={artists}
                            onChange={option => filterBy("author", option)}
                            placeholder='Artists...'
                        />
                    </div>
                    <div>
                        <SelectDropdown
                            options={styles}
                            onChange={option => filterBy("style", option)}
                            placeholder='Styles...'
                        />
                    </div>
                </div>
            </div>
            <div className='catalog-content'>
                <div className='catalog-items'>
                    {catalogItems.map((element, index) =>
                        <div className={`item-${index}`} key={`item-${index}`}>
                            <GoodCard
                                good_code={element.id}
                                img={element.img}
                                title={element.name}
                                text={cutDescription(element.description)}
                                price={element.price}
                                link={`/catalog/${element.id}`}
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