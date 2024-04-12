export const LOGIN = {
  RUN: "Run",
  SUBMIT: "Submit",
  LOGINPAGEHEADING: "Login",
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
    pathName: "/admin/dashboad",
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
    label: "Config",
    pathName: "/admin/config",
  },
];

interface UserHeaderLabel {
  label: string;
  pathName: string;
}

export const UserHeaderLable: UserHeaderLabel[] = [
  {
    label: "Dashboard",
    pathName: "/user/dashboad",
  },
  {
    label: "Compiler",
    pathName: "/user/compiler",
  },
  {
    label: "Compiler",
    pathName: "/user/compiler",
  },
];
