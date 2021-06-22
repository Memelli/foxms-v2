import React, { useState } from 'react'
import NewsHome from '../../components/Content/News'
import Hero from '../../components/Header/Hero'
import data from '../../components/Content/data'

const Home = () => {
    const [news, setNews] = useState(data)
    return (
        <>
            <Hero />
            <div className="flex flex-col items-center mb-16">
                { news.map((info) => (
                    <NewsHome type={info.type} desc={info.desc} date={info.date} title={info.title} key={info.id} />
                )) }
            </div>
        </>
    )
}

export default Home
