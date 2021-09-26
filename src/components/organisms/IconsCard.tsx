import React from "react";
import {IListItem} from "../../config/interfaces";
import {Card} from "react-native-paper";

interface IProps {
    title: string;
    list: IListItem[];
}
function IconsCard(props: IProps) {
    const { title, list } = props;
    return (
        <Card>
            <Card.Title title={title} />
            {list.map((item) => {

            })}
        </Card>
    )
}
