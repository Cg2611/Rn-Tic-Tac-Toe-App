import { StyleSheet, Text, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
    name:string;
}>



const Icons= ( {name} : IconProps) => {
  switch (name) {
    case 'circle':
        return <FontAwesome  name="circle-thin" size={38} color="#F7CD2E" />
        break;

    case 'cross':
        return <FontAwesome  name="times" size={38} color="#38CC77" />
        break;
    
    default:
        return <FontAwesome name="pencil" size={38} color="0D0D0D" />

  }
}

export default Icons

