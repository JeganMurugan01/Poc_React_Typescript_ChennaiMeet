import { useState } from "react";

interface Ilayout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  Title: string;
  SubmitBtn: string;
  ModalBtn: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (data: any) => void;
}

export const Modal = ({ children, Title, SubmitBtn, ModalBtn,onClick }: Ilayout) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        type="button"
        className="btn bg-212529 text-white"
        onClick={handleModalToggle}
      >
        {ModalBtn}
      </button>
      {showModal && (
        <div className="modal" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
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
                <button type="button" className="btn btn-primary" onClick={onClick}>
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
