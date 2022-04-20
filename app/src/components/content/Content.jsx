import React, { useState } from "react";
import Container from "./container/Container";
import ContentStyled from "./ContentStyled";
import Select from "./select/Select";
import { useEffect } from "react";
import API from "../../API";
import Loading from "./container/Loading";

const Content = () => {

    const [feed , setFeed] = useState();
    const [type, setType] = useState(0);
    const [isLoading , setLodaing] = useState(true);

    const handlerClick = (e) => {
        const type = e.target.value;
        setType(type);
    }
    //можно сделать лучше
    useEffect( () => {
        setLodaing(true);
        const fetchData = async () =>  { 
            const feed = await API.getNews(type);
            setFeed(feed);
            setLodaing(false);
        }
        fetchData();
    }, [type]);

    return(
        <ContentStyled>
            <Select buttonData={
                [
                    {
                        type:0,
                        onClick:handlerClick,
                        text:'за все время'
                    },
                    {
                        type:1,
                        onClick:handlerClick,
                        text:'за 7 дней'
                    },
                    {
                        type:2,
                        onClick:handlerClick,
                        text:'за 24 часа'
                    },
                ]
            }/>
            {
                !isLoading && feed.map((item, index) => 
                        <Container
                            key={item.title} 
                            title={item.title} 
                            img={item.enclosure.url} 
                            text={item.contentSnippet}
                            author={item.author}
                            link={item.link}
                        />
                )
            }
            {
                isLoading && <Loading />
            }
        </ContentStyled>
    )
}

export default Content;
