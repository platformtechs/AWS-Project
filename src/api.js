import wretch from "wretch";

const ROOT_URL = "http://localhost:5000";
// const ROOT_URL = "https: //peaceful-brook-33524.herokuapp.com/"

export const awsApi = wretch(ROOT_URL);

export const UserApi= awsApi.url('/api/user');

export const createUserApi= UserApi.url('/create/user');

export const createKeyApi= UserApi.url('/create/accesskey');

export const createSubAdminApi = UserApi.url('/create/subadmin');

export const listResourceApi = UserApi.url('/all');

export const getUser = UserApi.url('/get');

export const loginApi = UserApi.url('/login');

export const authToken = "aws/authToken"

export const userInfo = "aws/userInfo";

export const createInstance = awsApi.url('/api/aws/create');