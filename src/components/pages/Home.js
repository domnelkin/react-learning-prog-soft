import React from "react";
import '../../App.css';
import NewsBlock from "../NewsBlock";
import MainBlock from '../MainBlock'
import ContentButton from "../ContentButton";

const Home = () => {
    return (
        <div className='home-page-container'>
            <div className='content'>
                <MainBlock img='images\MainPhoto-1.jpg'
                    title='A picture is a poem without words.'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
            </div>
            <div className='blog'>
                <NewsBlock
                    img='images\Photo-1.jpg'
                    title='Test News Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
                <NewsBlock
                    img='images\Photo-2.jpg'
                    title='Test News Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
                <NewsBlock
                    img='images\Photo-3.jpg'
                    title='Test News Block'
                    text='sufjdsugbdsudjaIDN ASFSDJGBSD SHGBSHDBVDSJ GDSGHFUHASJIR SDGJB'
                    link='/'
                />
            </div>
            <div class="main-btn">
                <ContentButton link='/' name='View more' />
            </div>
        </div>
    );
}

export default Home;