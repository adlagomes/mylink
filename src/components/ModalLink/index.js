import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';
import { Feather } from '@expo/vector-icons';

export default function ModalLink(){
    return(
        <ModalContainer>
            <Container>
                <Header>
                    <TouchableOpacity>
                        <Feather
                         name="x"
                         color="#212743"
                         size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather
                         name="share"
                         color="#212743"
                         size={30}
                        />
                    </TouchableOpacity>
                </Header>
                <LinkArea>
                    <Title>Link encurtado</Title>
                    <LongUrl>https://sujeitoprogramador.com</LongUrl>
                    <ShortLinkArea>
                        <ShortLinkUrl>https://bit.ly/4il1you</ShortLinkUrl>
                        <TouchableOpacity>
                            <Feather
                            name="copy"
                            color="#FFF"
                            size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}