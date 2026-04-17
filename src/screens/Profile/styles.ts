import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`;

export const Message = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Name = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: #121212;
`;

export const NewLink = styled(TouchableOpacity)`
  background-color: #3b3dbf;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const NewText = styled(Text)`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

export const LogoutButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #c62c36;
`;

export const LogoutText = styled(Text)`
  color: #c62c36;
  font-size: 18px;
  font-weight: bold;
`;
