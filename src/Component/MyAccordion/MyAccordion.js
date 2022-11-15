import React, { useState } from "react";
import Header from "../Header/Header";
import { BsArrowDownCircleFill } from "react-icons/bs";
import "./MyAccordion.scss";

const MyAccordion = ({ data }) => {
    return ( 
        <section className="accordion-container">
            <Header />
        {
            data.map( (item, index) => {
                const { title, desct } = item;
                return (
                        <article className="article-container">
                            <header className="article-header">
                                <h2>{title}</h2>
                                <BsArrowDownCircleFill className="icon" />
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
