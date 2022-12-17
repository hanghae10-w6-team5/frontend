import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StContainer>
      {/* <img /> */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <StBtn>상품등록</StBtn>
      </div>
      <StPosts>
        <StPost>
          <img
            style={{ width: "210px" }}
            src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
          />
          <div>제목</div>
          <div>가격</div>
          <StFlexSpacebtw>
            <div>아이디</div>
            <div>❤️</div>
          </StFlexSpacebtw>
        </StPost>
        <div>
          <img
            style={{ width: "210px" }}
            src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
          />
          <div>제목</div>
          <div>가격</div>
          <StFlexSpacebtw>
            <div>아이디</div>
            <div>❤️</div>
          </StFlexSpacebtw>
        </div>
        <div>
          <img
            style={{ width: "210px" }}
            src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
          />
          <div>제목</div>
          <div>가격</div>
          <StFlexSpacebtw>
            <div>아이디</div>
            <div>❤️</div>
          </StFlexSpacebtw>
        </div>
        <div>
          <img
            style={{ width: "210px" }}
            src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
          />
          <div>제목</div>
          <div>가격</div>
          <StFlexSpacebtw>
            <div>아이디</div>
            <div>❤️</div>
          </StFlexSpacebtw>
        </div>
        <div>
          <img
            style={{ width: "210px" }}
            src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
          />
          <div>제목</div>
          <div>가격</div>
          <StFlexSpacebtw>
            <div>아이디</div>
            <div>❤️</div>
          </StFlexSpacebtw>
        </div>
      </StPosts>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  width: 95%;
  padding: 40px;
  margin: 0 auto;
`;

const StBtn = styled.button`
  width: 150px;
  height: 40px;
  align-items: center;

  margin: 0 10px 20px 0;
`;

const StPosts = styled.div`
  display: flex;

  gap: 35px;
  flex-wrap: wrap;
`;

const StPost = styled.div`
  /* border: 2px solid gray; */
`;

const StFlexSpacebtw = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MainPage;
