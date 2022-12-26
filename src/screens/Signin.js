import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import styled from 'styled-components/native';
import { Button, Image } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 0 20px;
    padding-top: ${({ insets: {top} }) => top}px;
    padding-bottom: ${({ insets: {bottom} }) => bottom}px;
`;
const StyledText = styled.Text`
    font-size: 30px;
    color: #111111;
`;

// const LOGO = 'https://thumbs.dreamstime.com/b/web-141700918.jpg';
const LOGO = 'https://firebasestorage.googleapis.com/v0/b/rn-chat-f5ced.appspot.com/o/logo.png?alt=media';
// const LOGO = 'https://firebasestorage.googleapis.com/v0/b/rn-chat-f5ced.appspot.com/o/logo.png?alt=media&token=3c60d2b7-17e0-4183-b83a-43446f0744a2';

const Signin = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);

    return (
        <Container insets={insets}>
            <Image url={LOGO} />
            <StyledText>Signin</StyledText>
            <Button title="Sign up" onPress={() => console.log('signin')} />
            <Button
                title="or sign up"
                onPress={() => navigation.navigate('Signup')}
                containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
                textStyle={{color: theme.btnTextLine, fontSize: 18}}
            />
        </Container>
    );
};

export default Signin;