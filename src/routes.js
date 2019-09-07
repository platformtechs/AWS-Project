import React from 'react';

// const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Dashboard = React.lazy(() => import('./views/Admin/Home'));
const Dashboard2 = React.lazy(() => import('./views/Admin/Home2'));
const Dashboard13 = React.lazy(() => import('./views/Admin/Home3'));
// const Settings = React.lazy(() => import('./views/setting/setting'));
// const Profile = React.lazy(() => import('./views/setting/profile'));
const ChangePassword = React.lazy(() => import('./views/setting/change-password'));
const ManageUsers = React.lazy(()=>import('./views/Admin/ManageUser'));
const ManageKey = React.lazy(()=>import('./views/Admin/ManageKey'));
// const AddUsers = React.lazy(()=>import('./views/Admin/Enquiry'));
// const User = React.lazy(()=>import('./views/Admin/User'));
// const Tabs = React.lazy(()=>import('./views/Admin/Tab'));
const Instance = React.lazy(() => import('./views/Admin/instance'));
const TabUser = React.lazy(()=>import('./views/Admin/TabUser'));
const Form = React.lazy(()=>import('./views/Admin/Form'));
// const FormInstance = React.lazy(() => import('./views/Admin/formInstance'));
const ManageInstance =React.lazy(()=>import('./views/Admin/ManageInstance'));
const ManageUser = React.lazy(() => import('./views/Admin/ManageUser'));
const FormUser = React.lazy(() => import('./views/Admin/FormUser'));
// const KeyEdit = React.lazy(() => import('./views/Admin/KeyEdit'));
const FormInstance = React.lazy(()=> import('./views/Admin/formInstance'));
const LogOut = React.lazy(() => import('./views/Pages/Login/logOut'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard2', exact: true, name: 'Dashboard2', component: Dashboard2 },
   { path: '/dashboard13', exact: true, name: 'Dashboard2', component: Dashboard13 },
  // { path: '/setting', exact:true, name: 'Settings', component: Settings },
  // { path: '/my-profile', exact:true, name: 'Profile', component: Profile },
  { path: '/change-password', name: 'Change-Password', component: ChangePassword },
  { path: '/logout', name: 'Change-Password', component: LogOut },
  { path:'/manage-subadmin', exact:true,name:"ManageUsers",component:ManageUsers},
  { path:'/manage-aws', exact:true,name:"ManageKey",component:ManageKey},
  // { path:'/add-subadmin', exact:true,name:"AddUsers",component:AddUsers},
  // { path:'/tab', exact:true,name:"Tabs",component:Tabs},
  { path:'/instance', exact:true,name:"instance",component:Instance},
  { path:'/tabUser', exact:true,name:"TabUser",component:TabUser},
  // { path:'/user', exact:true,name:"User",component:User},
  { path:'/add-account', exact:true,name:"Form",component:Form},
  { path: '/manage-instance', exact: true, name: "Create VPS", component: ManageInstance },
  { path: '/manage-user', exact: true, name: "ManageUser", component: ManageUser },
  { path: '/formUser', exact: true, name: "FormUser", component: FormUser },
  { path: '/form-instance', exact: true, name: "FormInstance", component: FormInstance },
  // { path: '/keyEdit', exact: true, name: "KeyEdit", component: KeyEdit },
  // { path: '/formInstance', exact: true, name:"FormInstance", component: FormInstance}
];

export default routes;
