import type { FlatListProps } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import type { BalanceItem } from "../../types";

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
