import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.png';

import {
    List,
    StreamContainer,
    StreamRow,
    StreamThumbnail,
    StreamColumn,
    StreamHeader,
    StreamAvatar,
    StreamUsername,
    StreamDescription,
    StreamCategory,
    TagRow,
    TagView,
    TagText
} from './styles';

const StreamList: React.FC = () => {

    const StreamItem: React.FC = () => (
        <StreamContainer>
            <StreamThumbnail source={streamThumbnail} />

            <StreamColumn>
                <StreamRow>
                    <StreamHeader>
                        <StreamAvatar />
                        <StreamUsername numberOfLines={1}>vini_coelho</StreamUsername>
                    </StreamHeader>

                    <StreamDescription numberOfLines={1}>
                        Amassando os Global no CS
                    </StreamDescription>

                    <StreamCategory numberOfLines={1}>
                        Counter-Strike: Global Offensive
                    </StreamCategory>
                </StreamRow>

                <TagRow>
                    <TagView>
                        <TagText>Portuguese</TagText>
                    </TagView>
                    <TagView>
                        <TagText>First Person Shooter</TagText>
                    </TagView>
                </TagRow>
            </StreamColumn>
        </StreamContainer>
    );

    return (
        <List>
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
        </List>
    );
}

export default StreamList;