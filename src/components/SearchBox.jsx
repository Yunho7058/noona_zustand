import {
  Box,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const SearchBox = () => {
  // 검색한 이름 넘겨서 같은 배열 찾기 한글자 칠때마다 보이게 하기
  // 지금은 전체 리스트를 보여주지만 쇼리스트를 새로 만들고
  // 실시간으로 보이게 하기
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          이름을 검색해주세요.
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

/*
구현할 목록
검색창, 유효성 검사, 모달창 이쁘게 다시 수정, 모바일시 검색창 네이바 구현 -> 최근 삭제함 이름 //
*/
