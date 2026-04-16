export type User = {
	id: number;
	name: string;
	email: string;
	token: string;
	createdAt: string;
	updatedAt: string;
	balance: number;
};

type UserAuth = {
	email: string;
	password: string;
};

export type UserLogin = UserAuth;

export type UserRegister = UserAuth & {
	name: string;
};

export type Balance = "saldo" | "receita" | "despesa";

export type BalanceItem = {
	tag: Balance;
	saldo: number;
};

export type Register = {
	label: string;
	value: string;
	type: "receita" | "despesa";
};
