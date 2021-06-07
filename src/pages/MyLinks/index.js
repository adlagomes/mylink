import React, {useState, useEffect} from 'react';

import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import ListItem from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';

import {getLinksSave} from '../../utils/storeLinks';

export default function MyLinks(){

    const isFocused = useIsFocused();
    const [links, setLinks] = useState([]);
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=> {
        async function getLinks(){
            const result = await getLinksSave('sujeitolinks');
            setLinks(result);
        }

        getLinks();

    }, [isFocused])

    return(
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Menu/>

            <Title>Meus Links</Title>

            <ListLinks
                data={links}
                keyExtractor={(item)=> String(item.id)}
                renderItem={({item}) => <ListItem data={item}/>}
                contentContainerStyle={{ paddingBottom: 22 }}
                showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}