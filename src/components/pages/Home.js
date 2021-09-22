import React from "react";
import '../../App.css';
import NewsBlock from "../NewsBlock";
import MainBlock from '../MainBlock'
import ContentButton from "../ContentButton";

const Home = () => {
    return (
        <div className='home-page-container'>
            <div className='content'>
                <MainBlock img='images\news-block-img.jpg'
                    title='Test Content Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
            </div>
            <div className='blog'>
                <NewsBlock
                    img='images\news-block-img.jpg'
                    title='Test News Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
                <NewsBlock
                    img='images\news-block-img.jpg'
                    title='Test News Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
                <NewsBlock
                    img='images\news-block-img.jpg'
                    title='Test News Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
            </div>
            <div>
                <ContentButton link='/' name='View more' />
            </div>
        </div>
    );
}

export default Home;