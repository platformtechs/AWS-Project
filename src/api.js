import wretch from "wretch";

const ROOT_URL = "https://peaceful-brook-33524.herokuapp.com";

export const awsApi = wretch(ROOT_URL);

export const UserApi= awsApi.url('/api/user');

export const User = awsApi.url('/api/user');

export const createUser= UserApi.url('/create');

export const listAllUser= UserApi.url('/all');

export const getUser = UserApi.url();

export const updateUser = UserApi.url('/id');

export const deleteUser = UserApi.url('/delete');

export const loginUser = UserApi.url('/login');



