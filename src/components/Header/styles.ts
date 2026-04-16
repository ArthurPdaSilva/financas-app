import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const Container = styled(SafeAreaView)`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Title = styled(Text)`
  font-size: 22px;
  margin-left: 8px;
`;

export const ButtonMenu = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;
