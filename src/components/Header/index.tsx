import React from 'react';
import { 
    MaterialCommunityIcons, 
    MaterialIcons, 
    Feather 
} from '@expo/vector-icons';

import Colors from '../../styles/colors';

import { 
    Container, 
    Avatar, 
    OnlineStatus, 
    RightSide, 
    Button 
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <Avatar>
            <OnlineStatus />
        </Avatar>

        <RightSide>
            <Button>
                <MaterialIcons 
                    name='notifications-none'
                    size={26}
                    color={Colors.black}
                />
            </Button>
            <Button>
                <MaterialCommunityIcons 
                    name='message-outline'
                    size={26}
                    color={Colors.black}
                />
            </Button>
            <Button>
                <Feather 
                    name='search'
                    size={26}
                    color={Colors.black}
                />
            </Button>
        </RightSide>
    </Container>
  )
}

export default Header;