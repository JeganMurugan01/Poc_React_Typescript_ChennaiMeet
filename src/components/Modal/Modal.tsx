/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface Ilayout {
  children: any;
  Title: string;
  SubmitBtn: string;
  ModalBtn?: string;
  onClick?: (data: any) => void;
  show?: boolean;
  size?: string;
  btnClassName?:string;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  children,
  Title,
  SubmitBtn,
  ModalBtn,
  onClick,
  size,
  show,
  setShow,
  btnClassName,
}: Ilayout) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    setShow(false);
  };

  useEffect(() => {
    if (show) setShowModal(show);
  }, [show]);

  return (
    <>
      {ModalBtn?.length && (
        <button
          type="button"
          className={`btn bg-212529 text-white ${btnClassName}`}
          onClick={handleModalToggle}
        >
          {ModalBtn}
        </button>
      )}
      {showModal && (
        <div className="modal" role="dialog" style={{ display: "block" }}>
          <div className={`modal-dialog ${size} overflow-auto`} role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{Title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalToggle}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalToggle}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    onClick();
                    handleModalToggle();
                  }}
                >
                  {SubmitBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};
