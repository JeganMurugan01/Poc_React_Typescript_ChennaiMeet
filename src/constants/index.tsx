/* eslint-disable react-refresh/only-export-components */
import { FaCuttlefish, FaJava } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiJavascript } from "react-icons/si";
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

interface SignupField {
  id: number;
  label: string;
  apiKey: string;
}

export const SignupData: SignupField[] = [
  {
    id: 1,
    label: "FirstName",
    apiKey: "firstName",
  },
  {
    id: 2,
    label: "LastName",
    apiKey: "lastName",
  },
  {
    id: 3,
    label: "Email",
    apiKey: "email",
  },
  {
    id: 4,
    label: "Password",
    apiKey: "password",
  },
  {
    id: 5,
    label: "UserType",
    apiKey: "userType",
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
  {
    label: "Logout",
    pathName: "/",
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
  {
    label: "Questions",
    pathName: "/user/questions",
  },
  {
    label: "My Files",
    pathName: "/user/folders",
  },
  {
    label: "Logout",
    pathName: "/",
  },
];

export const DashboardLable = {
  WELCOME: "Welcome back",
  LOGOUT: "Logout",
};
export const SignupPageConstant = {
  SIGNUPPAGEHEADING: "Signup Page",
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

export const UserDashboardLabel = {
  PREPARE: "PREPARE BY TOPICS",
};

export const IconReturn = (IconName: string) => {
  switch (IconName) {
    case "C":
      return <FaCuttlefish size={50} />;

    case "C#":
      return <SiCsharp size={50} />;

    case "Java":
      return <FaJava size={50} />;

    case "Javascript":
      return <SiJavascript size={50} />;
    case "C++":
      return <SiCplusplus size={50} />;
  }
};

export const DifficultyLevel = [
  {
    label: "Easy",
    value: 1,
  },
  { label: "Medium", value: 2 },
  { label: "Hard", value: 3 },
];

export const codeLevel = (level: number) => {
  switch (level) {
    case 1:
      return (
        <span>
          DIFFICULTY <span className="text-success">Easy</span>
        </span>
      );
    case 2:
      return (
        <span>
          DIFFICULTY <span className="text-warning">Medium</span>
        </span>
      );

    case 3:
      return (
        <span>
          DIFFICULTY <span className="text-danger">Hard</span>
        </span>
      );
  }
};
