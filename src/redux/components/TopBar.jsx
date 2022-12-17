import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return (
    <StFlex justifyContent="space-between">
      <div style={{ marginLeft: "40px" }}>탈덕마켓</div>
      <div style={{ marginRight: "40px" }}>
        <StBtn mr="10px">로그인</StBtn>
        <StBtn>회원가입</StBtn>
      </div>
    </StFlex>
  );
};

const StFlex = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 10px auto;

  display: flex;
  justify-content: ${(props) => props.justifyContent || "none"};
`;

const StBtn = styled.button`
  background-color: white;
  border: 0;

  margin-right: ${(props) => props.mr || "none"};

  cursor: pointer;
`;

export default TopBar;
