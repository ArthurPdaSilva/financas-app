import type { FlatListProps } from "react-native";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import type { BalanceItem, Receives } from "../../types";

const TypedFlatList = FlatList as new (
	props: FlatListProps<BalanceItem>,
) => FlatList<BalanceItem>;

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
`;

export const ListBalance = styled(TypedFlatList)`
  max-height: 190px;
`;

export const Area = styled(View)`
  margin-top: 24px; 
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-top: 14px;
  padding-right: 14px;
  align-items: end;
`;

export const Title = styled(Text)`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
`;

const TypedReceivesFlatList = FlatList as new (
	props: FlatListProps<Receives>,
) => FlatList<Receives>;

export const ListReceives = styled(TypedReceivesFlatList)`
  flex: 1;
  background-color: white;
`;
