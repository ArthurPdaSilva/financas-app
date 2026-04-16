import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { BalanceCard } from "../../components/BalanceCard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import type { BalanceItem } from "../../types";
import { Background, ListBalance } from "./styles";

export const Home = () => {
	const isFocused = useIsFocused();
	const [balances, setBalances] = useState<BalanceItem[]>([]);
	const [dateMovements] = useState(new Date());

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want to trigger this effect only when the date or the screen focus changes, not on every render.
	useEffect(() => {
		let isActive = true;

		const loadBalances = async () => {
			const dateFormatted = format(dateMovements, "dd/MM/yyyy");
			const balance = await api.get(`/balance?date=${dateFormatted}`);

			if (isActive) {
				setBalances(balance.data);
			}
		};

		loadBalances();
		return () => {
			isActive = false;
		};
	}, [dateMovements, isFocused]);

	return (
		<Background>
			<Header title="Minhas Movimentações" />
			<ListBalance
				data={balances}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.tag}
				renderItem={({ item }) => <BalanceCard item={item} />}
			/>
		</Background>
	);
};
