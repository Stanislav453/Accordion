import React, { useState } from "react";
import Header from "../Header/Header";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./MyAccordion.scss";

const MyAccordion = ({ data }) => {
    const [ value, setValue ] = useState(null)

    const myToggle = (e) => {
        if( value === e ) {
         return   setValue(null)
        }

        setValue(e)
    }
    return ( 
        <section className="accordion-container">
            <Header />
        {
            data.map( (item, index) => {
                const { title, desc } = item;
                return (
                        <article className={ value === index ? "article-container active" : "article-container" } key={index} >
                            <header className="article-header" onClick={ () => myToggle(index) }>
                                <h2>{title}</h2>
                                <FaAngleDoubleRight className={ value === index ? "icon move" : "icon" } />
                            </header>
                            <p className={ value === index ? "show" : ""  }>
                                {desc}
                            </p>
                        </article>
                        )                
                    }
                )
            }
    </section>

    )
}

export default MyAccordion;
