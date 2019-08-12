import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Settings = React.lazy(() => import('./views/setting/setting'));
const Profile = React.lazy(() => import('./views/setting/profile'));
const ChangePassword = React.lazy(() => import('./views/setting/change-password'));
const ManageUsers = React.lazy(()=>import('./views/Admin/ManageUser'));
const ManageRoles = React.lazy(()=>import('./views/Admin/ManageRoles'));
const AddUsers = React.lazy(()=>import('./views/Admin/Enquiry'));
const User = React.lazy(()=>import('./views/Admin/User'));
const Tabs = React.lazy(()=>import('./views/Admin/Tab'));
const TabUser = React.lazy(()=>import('./views/Admin/TabUser'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/setting', exact:true, name: 'Settings', component: Settings },
  { path: '/my-profile', exact:true, name: 'Profile', component: Profile },
  { path: '/change-password', name: 'Change-Password', component: ChangePassword },
  { path:'/manage-users', exact:true,name:"ManageUsers",component:ManageUsers},
  { path:'/manage-roles', exact:true,name:"ManageRoles",component:ManageRoles},
  { path:'/add-users', exact:true,name:"AddUsers",component:AddUsers},
  { path:'/tab', exact:true,name:"Tabs",component:Tabs},
  { path:'/tabUser', exact:true,name:"Tabs",component:TabUser},
  { path:'/user', exact:true,name:"User",component:User}
];

export default routes;
