import { Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Input = styled(TextInput)`
  height: 50px;
  width: 90%;
  background-color: white;
  font-size: 17px;
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
`;

export const SubmitButton = styled(TouchableOpacity)`
  height: 50px;
  width: 90%;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 4px;
`;

export const SubmitText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 21px;
  font-weight: bold;
`;
