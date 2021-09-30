import React from "react";
import '../../App.css';
import { useParams } from "react-router";
import goodsList from "../../data/GoodsList";
import Breadcrumb from "../Breadcrumb";
import ContentButton from "../ContentButton";
import SelectDropdown from "../SelectDropdown";

const ProductPage = () => {
    const { id } = useParams();
    const product = goodsList.find(prod => prod.id.toString() === id);

    return (
        <div className='product-details'>
            <div className='top-part'>
                <span className='product-image'>
                    <img src={`/${product.img}`} alt='Image' />
                </span>
                <span className='product-info'>
                    <div className='charactersitics'>
                        <Breadcrumb text={product.author} />
                        <Breadcrumb text={product.style} />
                    </div>
                    <div className='prodict-description'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className='order-info'>
                        <div className='count'>
                            <p>Count to order...</p>
                            <input type='text' placeholder='Count to order' className='count-input'/>
                        </div>
                        <div>
                            <p>Size</p>
                            <SelectDropdown
                                options={[
                                    { value: '3x4', label: '3x4' },
                                    { value: '7x8', label: '7x8' },
                                    { value: '50x50', label: '50x50' }
                                ]}
                                placeholder='Select size'
                            />
                        </div>
                    </div>
                </span>
            </div>
            <div className='bottom-part'>
                <span className='price-block'>
                    <span>
                        <p>Price: </p>
                    </span>
                    <span>
                        <p>${product.price}</p>
                    </span>
                </span>
                <span className='actions'>
                    <ContentButton link='/catalog' name='Go back' />
                    <ContentButton link='#' name='Add to cart' />
                </span>
            </div>
        </div>
    )
}

export default ProductPage;