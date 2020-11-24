import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import Colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${Colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
    padding-left: 14px;
`;

export const Main = styled.View``;