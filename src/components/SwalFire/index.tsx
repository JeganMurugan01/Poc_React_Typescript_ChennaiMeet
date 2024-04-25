  /* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

  

  interface ToastParams {
    title: string;
    icon: any;
    buttonText: string;
    successText: string;
    conformationIcon: any;
    successTitle: string;
  }

  export const Toast = async (
    {
      title,
      icon,
      buttonText,
      successText,
      conformationIcon,
      successTitle,
    }: ToastParams,
    languageType: string
  ) => {
    const nav = useNavigate();

    const result = await Swal.fire({
      title: title,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: buttonText,
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: successTitle,
        text: successText,
        icon: conformationIcon,
      });
      nav("/user/domain", {
        state: { value: languageType },
      });
    }
  };
