import {
	Image,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
`;

// A diferença de view para KeyboardAvoidingView é que o segundo tem a função de evitar que o teclado cubra os inputs, ou seja, ele sobe junto com o teclado. O SafeAreaView é para evitar que o conteúdo fique embaixo da barra de status, por exemplo.
export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  margin-bottom: 25px;
`;

export const AreaInput = styled(View)`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Input = styled(TextInput)`
  background-color: #fff;
  font-size: 17px;
  width: 90%;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
`;

export const SubmitButton = styled(TouchableOpacity)`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled(Text)`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled(TouchableOpacity)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled(Text)`
  color: #171717;
`;
