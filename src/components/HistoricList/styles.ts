import { Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  background-color: #F0F3FF;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const TypeView = styled(View)`
  flex-direction: row;
`;

export const TypeText = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

type IconViewProps = {
	type: "receita" | "despesa";
};

export const IconView = styled(View)<IconViewProps>`
  flex-direction: row;
  background-color: ${({ type }) => (type === "receita" ? "#049301" : "#c62c36")};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const ValueText = styled(Text)`
  color: #121212;
  font-size: 22px;
`;
