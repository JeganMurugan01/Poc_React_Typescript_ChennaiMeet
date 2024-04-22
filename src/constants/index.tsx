import { useNavigate } from "react-router-dom";

export const LOGIN = {
  RUN: "Run",
  SUBMIT: "Submit",
  LOGINPAGEHEADING: "Login",
};
export const USERS = {
  ADDUSER: "Add User",
  ACTIVEUSERS: "Active Users List:",
};
export const COMPILER = {
  HEADING: "Online Compiler",
};

export const Language = [
  {
    label: "javascript",
  },
  {
    label: "C#",
  },
  {
    label: "java",
  },
];

export const themColor = [
  {
    them: "light",
  },
  {
    them: "vs-dark",
  },
];

interface LoginField {
  id: number;
  label: string;
  apiKey: string;
}

export const Logindata: LoginField[] = [
  {
    id: 1,
    label: "Email",
    apiKey: "email",
  },
  {
    id: 2,
    label: "Password",
    apiKey: "password",
  },
];

interface AdminHeaderLabel {
  label: string;
  pathName: string;
}

export const AdminHeaderLable: AdminHeaderLabel[] = [
  {
    label: "Dashboard",
    pathName: "/admin/dashboard",
  },
  {
    label: "Users",
    pathName: "/admin/users",
  },
  {
    label: "Files",
    pathName: "/admin/files",
  },
  {
    label: "Permission",
    pathName: "/admin/Permission",
  },
];

interface UserHeaderLabel {
  label: string;
  pathName: string;
}

export const UserHeaderLable: UserHeaderLabel[] = [
  {
    label: "Dashboard",
    pathName: "/user/dashboard",
  },
  {
    label: "Compiler",
    pathName: "/user/compiler",
  },
];

export const DashboardLable = {
  WELCOME: "Welcome back",
  LOGOUT: "Logout",
};

export const PermissionLabel = {
  USERPERMISSION: "User Permissions",
};

export const UserProfileLabel = {
  USERDETAILSHEADING: "User Details",
  FIRSTNAME: "FirstName :",
  LASTNAME: "LastName :",
  ADDRESS: "Address :",
  PHONENUMBER: "PhoneNumber :",
  PINCODE: "PinCode :",
  STATE: "State :",
  ACTIVE: "UserStatus:",
};

export const Logout = () => {
  const nav = useNavigate();
  localStorage.clear();
  nav("/");
};
