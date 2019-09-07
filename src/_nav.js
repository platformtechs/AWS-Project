import { userType } from "./api";


export const AdminNav = {
  items:[
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-home'
    },
    {
      name: 'Change Password',
      url: '/change-password',
      icon: 'icon-key',

    },
    {
      name: "Logout",
      url: "/logout",
      icon: 'icon-logout',
    }

  ]
};
export const subAdminNav = {
  items: [
    {
      name: 'Home',
      url: '/dashboard13',
      icon: 'icon-home'
    },
    {
      name:'All AWS Accounts',
      url: '/manage-aws',
      icon: 'icon-cursor'
    },
    {
      name: 'Add AWS Account',
      url: '/add-account',
      icon: 'icon-lock'
    },
    {
      name: 'All Instances',
      url: '/manage-instance',
      icon: 'icon-key',

    },
    {
      name: 'Change Password',
      url: '/change-password',
      icon: 'icon-key',

    },
    {
      name: "Logout",
      url: "/logout",
      icon: 'icon-logout',
    }

  ]
};

export const UserNav = {
  items: [
    {
      name: 'Home',
      url: '/dashboard2',
      icon: 'icon-home'
    },
    {
      name: 'Change Password',
      url: '/change-password',
      icon: 'icon-key',

    },
    {
      name: "Logout",
      url: "/logout",
      icon: 'icon-logout',
    }

  ]
};