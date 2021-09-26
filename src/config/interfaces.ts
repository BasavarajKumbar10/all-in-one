
export enum IconsType {
    ionicons,
    materialIcon,
}

export enum SectionType {
    banner,
    icons
}
export interface IIcon {
    name: string;
    size?: number;
    color?: string;
    type: IconsType;
}

export interface IListItem {
    icon?: IIcon;
    label: string;
    imageUrl?: string;
}

export interface ICard {
    title: string;
    type: SectionType;
    list: IListItem[];
}
