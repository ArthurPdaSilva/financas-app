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
