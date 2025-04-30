import React from "react";
import usePhoneStore from "../store/phoneStore";
import { Avatar, Stack, Typography } from "@mui/material";

export const ContacList = () => {
  const { phoneList } = usePhoneStore();
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
  return (
    // <div>
    //   연락처 리스트
    //   {phoneList?.map((el, idx) => (
    //     <div key={idx}>
    //       <div>{el.name}</div>
    //       <div>{el.phoneNumber}</div>
    //     </div>
    //   ))}
    // </div>
    <>
      <Stack spacing={2}>
        {phoneList?.map((el) => {
          //   const randomColor =
          //     "#" + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <Stack
              key={el.name}
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ p: 1, border: "1px solid #ddd", borderRadius: 2 }}
            >
              <Avatar sx={{ backgroundColor: stringToColor(el.name) }}>
                {el.name.charAt(0)}
              </Avatar>
              <Stack>
                <Typography>{el.name}</Typography>
                <Typography noWrap>{el.phoneNumber}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};
