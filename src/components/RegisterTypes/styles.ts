import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

type RegisterButtonProps = {
	checked: boolean;
};

export const RegisterButton = styled(TouchableOpacity)<RegisterButtonProps>`
  background-color: ${(props) => (props.checked ? "#FFF" : "#E7E7E7")};
  width: 47%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${(props) => (props.checked ? "#3b3dbf" : "transparent")};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled(Text)`
  margin-left: 8px;
  font-size: 17px;
  color: black;
`;
