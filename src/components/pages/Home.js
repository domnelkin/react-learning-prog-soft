import React, { useState } from "react";
import '../../App.css';
import NewsBlock from "../NewsBlock";
import MainBlock from '../MainBlock'
import ContentButton from "../ContentButton";
import newsList from "../../data/NewsList";
import ActionButton from "../ActionButton";

const Home = () => {
    const [newsItems, setNewsItems] = useState(newsList);
    const [newsCount, setNewsCount] = useState(3);

    console.log(newsItems.length)
    console.log(newsCount)

    const showMore = () => {
        if (newsItems.length >= newsCount + 6) {
            setNewsCount(newsCount + 6);
        } else {
            setNewsCount(newsCount + (newsItems.length - newsCount));
            document.querySelector(".action-button").style.display = "none";
        }
    }

    return (
        <div className='home-page-container'>
            <div className='content'>
                <MainBlock img='images\MainPhoto-1.jpg'
                    title='A picture is a poem without words.'
                    text='Art is a highly diverse range of human activities engaged in creating visual, auditory, or performed artifacts— artworks—that express the author’s imaginative or technical skill, and are intended to be appreciated for their beauty or emotional power.

                    The oldest documented forms of art are visual arts, which include images or objects in fields like painting, sculpture, printmaking , photography, and other visual media . Architecture is often included as one of the visual arts; however, like the decorative arts, it involves the creation of objects where the practical considerations of use are essential, in a way that they usually are not in another visual art, like a painting.
                    
                    Art may be characterized in terms of mimesis (its representation of reality), expression, communication of emotion, or other qualities. Though the definition of what constitutes art is disputed and has changed over time, general descriptions center on the idea of imaginative or technical skill stemming from human agency and creation. When it comes to visually identifying a work of art, there is no single set of values or aesthetic traits. A Baroque painting will not necessarily share much with a contemporary performance piece, but they are both considered art.
                    
                    Despite the seemingly indefinable nature of art, there have always existed certain formal guidelines for its aesthetic judgment and analysis. Formalism is a concept in art theory in which an artwork’s artistic value is determined solely by its form, or how it is made. Formalism evaluates works on a purely visual level, considering medium and compositional elements as opposed to any reference to realism , context, or content.
                    
                    Art is often examined through the interaction of the principles and elements of art. The principles of art include movement, unity, harmony, variety, balance, contrast, proportion and pattern. The elements include texture, form, space, shape, color, value and line. The various interactions between the elements and principles of art help artists to organize sensorially pleasing works of art while also giving viewers a framework within which to analyze and discuss aesthetic ideas.'                    link='/'
                />
            </div>
            <div className='main-text-content'><h1>The best shop of ARTS</h1></div>
            <div className='blog'>
                {
                    newsItems.slice(0, newsCount).map(item =>
                        <NewsBlock
                            img={item.img}
                            title={item.title}
                            text={item.description}
                            link={`/${item.title.replace(" ", "-")}`}
                        />)
                }
            </div>
            <div class="main-btn">
                <ActionButton title="View more" onClick={showMore} />
            </div>
        </div>
    );
}

export default Home;