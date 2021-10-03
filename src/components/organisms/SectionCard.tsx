import React from "react";
import { SectionType } from "../../config/enums";
import {ICard} from "../../interfaces/homeData";
import CarousalCards from "./CarousalCards";
import IconsCard from "./IconsCard";

interface IProps {
    section: ICard;
}
export default function (props: IProps){
    const { section } = props;
    console.log('section card', section)
    switch (section.type) {
        case SectionType.icons:
            return <IconsCard {...section} />;
        case SectionType.carousal:
            return <CarousalCards {...section} />;
        default:
            return null;
    }
}
