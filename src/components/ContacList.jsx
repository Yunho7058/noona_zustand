import React, { useState } from "react";
import usePhoneStore from "../store/phoneStore";
import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ModalComponent } from "./ModalComponent";

export const ContacList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { phoneList, selectPhonNumberDelete } = usePhoneStore();
  const [modalName, setModalName] = useState("");
  const [selectNumber, setSelectNumber] = useState([]);
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color =
      "#" +
      ((hash >> 24) & 0xff).toString(16).padStart(2, "0") +
      ((hash >> 16) & 0xff).toString(16).padStart(2, "0") +
      ((hash >> 8) & 0xff).toString(16).padStart(2, "0");
    return color;
  };
  const handelDeleteNumber = (name) => {
    setModalOpen(true);
    setModalName(name);
  };
  const handleSelect = (name) => {
    //만약 이름 있으면 이름 삭제
    //없으면 추가
    let newSelectNumber;
    if (selectNumber.indexOf(name) === -1) {
      newSelectNumber = [...selectNumber, name];
    } else {
      newSelectNumber = selectNumber.filter((el) => el !== name);
    }
    setSelectNumber(newSelectNumber);
    console.log(newSelectNumber);
  };
  const handleSelectAll = () => {
    if (selectNumber.length === phoneList.length) {
      // 모두 선택되어 있으면 해제
      setSelectNumber([]);
    } else {
      // 전체 선택
      const allNames = phoneList.map((el) => el.name);
      setSelectNumber(allNames);
    }
  };
  return (
    <>
      <Grid container rowSpacing={2}>
        <Button onClick={() => handleSelectAll()}>전체선택</Button>
        <Button onClick={() => selectPhonNumberDelete(selectNumber)}>
          선택목록 삭제
        </Button>
        {phoneList?.map((el) => {
          //   const randomColor =
          //     "#" + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <Grid
              container
              key={el.name}
              alignItems="center"
              sx={{ p: 1, border: "1px solid #ddd", borderRadius: 2 }}
              size={12}
            >
              <Grid size={9} sx={{ marginLeft: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Checkbox
                    checked={selectNumber.includes(el.name)}
                    onChange={() => handleSelect(el.name)}
                  />
                  <Avatar sx={{ backgroundColor: stringToColor(el.name) }}>
                    {el.name.charAt(0)}
                  </Avatar>
                  <Stack>
                    <Typography>{el.name}</Typography>
                    <Typography noWrap>{el.phoneNumber}</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={2} justifyItems="center">
                <Stack direction="row" justifyContent="flex-end">
                  <Button
                    color="error"
                    variant="outlined"
                    size="small"
                    onClick={() => handelDeleteNumber(el.name)}
                  >
                    삭제
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {modalOpen && (
        <ModalComponent setModalOpen={setModalOpen} modalName={modalName} />
      )}
    </>
  );
};
