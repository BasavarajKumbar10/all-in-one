import * as React from 'react';
import { Avatar } from 'react-native-paper';

interface IProps {
    imageUrl: string;
    initials: string;
    size?: number;
}

export function AvatarInitials(props: IProps){
  const {imageUrl, initials, size} = props;
  return <Avatar.Image size={size} source={{uri: imageUrl}} />
};