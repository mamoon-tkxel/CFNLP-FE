import { CustomModal } from "@/components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssignGrantAmount from "./assignGrantAmount";

const AdminGrantDetail = () => {
  const navigate = useNavigate();

  const [SubmitFormBtnText, setSubmitFormBtnText] = useState("Submit Response");

  const [openModal, setModal] = useState(false);

  const modalClose = () => setModal(false);
  const modalOpen = () => setModal(true);

  const handleSuccess = () => {
    modalClose();
    setSubmitFormBtnText("Send Contact Form");
  };

  return (
    <div>
      <div>
        <h1>
          <span onClick={() => navigate(-1)}>{"<---"}</span>Application for:
          Traffic Safety Education Initiative
        </h1>
        <button onClick={modalOpen}>{SubmitFormBtnText}</button>
        <h5>chapter 1</h5>
        <h5>chapter 2</h5>
      </div>

      <CustomModal open={openModal} handleClose={modalClose}>
        <AssignGrantAmount
          handleClose={modalClose}
          handleSuccess={handleSuccess}
        />
      </CustomModal>
    </div>
  );
};
export default AdminGrantDetail;
