import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components/native';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
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

const LOGO = 'https://firebasestorage.googleapis.com/v0/b/rn-chat-f5ced.appspot.com/o/logo.png?alt=media';

const Signin = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const refPassword = useRef(null);

    return (
        <Container insets={insets}>
            <Image url={LOGO} />
            <Input
                label="Email"
                placeholder="Email"
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => refPassword.current.focus()}
            />
            <Input
                ref={refPassword}
                label="Password"
                placeholder="Password"
                returnKeyType="done"
                value={password}
                onChangeText={setPassword}
            />
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