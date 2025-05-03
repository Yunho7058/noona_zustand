import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import usePhoneStore from "../store/phoneStore";

export const ModalComponent = ({ setModalOpen, modalName }) => {
  const handleClose = () => {
    setModalOpen(false);
  };
  const { phonNumberDelete } = usePhoneStore();
  const handlePhonNumberDelete = (name) => {
    phonNumberDelete(modalName);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        justifyContent="center"
        sx={{
          width: "300px",
          padding: "10px",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalName}님의 연락처를 삭제 하시겠습니까?
        </Typography>
        <div>
          <Button
            onClick={() => {
              handlePhonNumberDelete(modalName);
            }}
          >
            네
          </Button>
          <Button onClose={handleClose}>아니요</Button>
        </div>
      </Box>
    </Modal>
  );
};
