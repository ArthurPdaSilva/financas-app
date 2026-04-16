import { useMemo } from "react";
import type { BalanceItem } from "../../types";
import { Balance, Container, Label } from "./styles";

export const BalanceCard = ({ item }: { item: BalanceItem }) => {
	const labelName = useMemo(() => {
		if (item.tag === "saldo") {
			return {
				label: "Saldo Atual",
				color: "3b3dbf",
			};
		}

		if (item.tag === "receita") {
			return {
				label: "Entradas de hoje",
				color: "00b94a",
			};
		}

		return {
			label: "Saídas de hoje",
			color: "EF463a",
		};
	}, [item]);
	return (
		<Container backgroundColor={labelName.color}>
			<Label>{labelName.label}</Label>
			<Balance>R$ {item.saldo.toFixed(2)}</Balance>
		</Container>
	);
};
