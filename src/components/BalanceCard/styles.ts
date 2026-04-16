import { Text, View } from "react-native";
import styled from "styled-components";

type ContainerProps = {
	backgroundColor: string;
};

export const Container = styled(View)<ContainerProps>`
  background-color: #${({ backgroundColor }) => backgroundColor};
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

export const Label = styled(Text)`
  color: white;
  font-size: 19px;
  font-weight: bold;
`;

export const Balance = styled(Text)`
  color: white;
  font-size: 30px;
`;
