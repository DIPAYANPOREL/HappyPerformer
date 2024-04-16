import React from "react";
import styled from "styled-components";



const Card = (props) => {
    return (
        <div className="Card">
            <div className="Card-Heading">
                <ImageA src={props.image_url1} />
                <div>
                    <h2 className="Card-Body">{props.title1}</h2>
                </div>
                <ImageA src={props.image_url_arrow} />
            </div>
            <ImageA src={props.image_url2} />
        </div>
    );
};

export default Card;
