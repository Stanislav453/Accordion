import React, { useState } from "react";
import "./MyAccordion.scss";

const MyAccordion = ({ data }) => {

    return ( 
        <section className="accordion-container">
        {
            data.map( (item, index) => {
                const { title, desct } = item;
                return (
                        <article className="article-container">
                            <header>
                                <h2>{title}</h2>
                            </header>
                        </article>
                        )                
                    }
                )
            }
    </section>
    
    )
}

export default MyAccordion;
