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
  justify-content: center;
  align-items: center;
`;
export const Heading = styled.Text`
  color: ${Colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;
