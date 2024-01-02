import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import OnBoarding from './OnBoarding';
import GetStarted from './OnBoarding2';

const OnBoard = () => {
    return (
        <PagerView scrollEnabled={true} collapsable={false} orientation={'horizontal'} style={styles.pagerView} initialPage={0}>
            <View key="1">
                <OnBoarding/>
            </View>
            <View key="2">
                <GetStarted />
            </View>
        </PagerView>
    );
};

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
});

export default OnBoard;