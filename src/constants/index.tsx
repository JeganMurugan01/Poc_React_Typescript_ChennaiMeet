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
    label: "JavaScript",
  },
  {
    label: "C#",
  },
  {
    label: "Java",
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
