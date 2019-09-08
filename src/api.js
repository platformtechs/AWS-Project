import wretch from "wretch";

// const ROOT_URL = "https://shrouded-crag-73220.herokuapp.com";
const ROOT_URL = "http://localhost:5000"
// const ROOT_URL = "http://172.16.8.255:5000";

export const awsApi = wretch(ROOT_URL);

export const UserApi= awsApi.url('/api/user');

export const createUserApi= UserApi.url('/create/user');

export const createKeyApi= UserApi.url('/create/accesskey');

export const createSubAdminApi = UserApi.url('/create/subadmin');

export const listResourceApi = UserApi.url('/all');

export const deleteUserApi = UserApi.url('/delete');

export const getUserApi = UserApi.url('/get');

export const loginApi = UserApi.url('/login');

export const changePassword = UserApi.url('/changepass');

export const serviceApi = awsApi.url('/api/aws');

export const createInstanceApi = serviceApi.url('/create');

export const getPassApi = serviceApi.url('/getpass');

export const getInstanceApi = serviceApi.url('/getinstance');

export const startInstanceApi = serviceApi.url('/start');

export const stopInstanceApi = serviceApi.url('/stop');

export const rebootInstanceApi = serviceApi.url('/reboot');

export const deleteInstanceApi = serviceApi.url('/delete');

export const renewPack = UserApi.url('/renew');

export const authToken = "aws/authToken"

export const userInfo = "aws/userInfo";

export const userType = "aws/usertype";
