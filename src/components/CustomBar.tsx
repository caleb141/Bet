
import React, { FC } from 'react'
import { StatusBar, StatusBarStyle, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    backgroundColor: string;
    barStyle?: StatusBarStyle;
}

const CustomBar: FC<Props> = ({ backgroundColor, barStyle = 'light-content' }) => {
    const insets = useSafeAreaInsets();
    return (

        <StatusBar backgroundColor={backgroundColor} barStyle={'dark-content'} />

    )
}

export default CustomBar