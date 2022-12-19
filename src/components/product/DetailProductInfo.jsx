import React from 'react';
import styled from 'styled-components';

const DetailProductInfo = () => {
    return (
        <ProductSection>
            <ContentButtonWrap>
                <ModifyContentButton>수정</ModifyContentButton>

                <DeleteContentButton>삭제</DeleteContentButton>
            </ContentButtonWrap>
            <TopInfo>
                <Thumbnail></Thumbnail>
                <RightInfo>
                    <ProductTitle>동방신기 탈덕템 판매합니다.</ProductTitle>
                    <Price>
                        50,000
                        <span
                            style={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                marginLeft: '5px',
                            }}
                        >
                            원
                        </span>
                    </Price>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <SellerId>판매자 : subin99</SellerId>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <Date>작성일자 : 2022-12-17 21:07</Date>
                        <Date>수정일자 : 2022-12-17 21:07</Date>
                    </div>
                    <Wish>
                        <span style={{ fontSize: '21px', marginBottom: '5px' }}>
                            ♡
                        </span>
                        <span style={{ fontSize: '21px', marginLeft: '4px' }}>
                            123
                        </span>
                    </Wish>
                </RightInfo>
            </TopInfo>
            <BottomInfo>
                <span style={{ fontSize: '24px' }}>상품정보</span>
                <DetailInfo>
                    10년 동안 모은 동방신기 굿즈 팝니다.
                    <br />
                    싸게 내놓아요~!
                </DetailInfo>
            </BottomInfo>
        </ProductSection>
    );
};

const ProductSection = styled.div`
    max-width: 1200px;
    min-width: 800px;
    /* height: 750px; */
    /* background-color: #797979; */
    margin: 0 100px 0 100px;
    /* border: 1px solid gray; */
`;

const TopInfo = styled.div`
    width: 100%;
    height: 400px;
    /* background-color: #7bff00; */
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #444;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 10px;
    border-bottom: 1px solid #444;
`;

const Thumbnail = styled.div`
    width: 398px;
    height: 398px;
    margin-right: 30px;
    border: 1px solid #ccc;
    /* background-color: aqua; */
`;

const RightInfo = styled.div`
    width: 570px;
    height: 400px;
    /* margin-top: 25px; */
    /* background-color: #ff9100; */
    position: relative;
`;

const ProductTitle = styled.div`
    width: 570px;
    font-size: 26px;
    font-weight: bold;
    /* height: 50px; */
    padding-bottom: 20px;
    /* background-color: #fffb00; */
`;

const Price = styled.div`
    width: 570px;
    height: 70px;
    /* background-color: #94bfff; */
    font-size: 50px;
`;

const SellerId = styled.div`
    font-size: 20px;
    margin-top: 5px;
`;

const Date = styled.div`
    font-size: 15px;
    margin-top: 5px;
    margin-right: 5px;
    color: #7c7c7c;
    /* background-color: aqua; */
`;

const Wish = styled.button`
    width: 120px;
    height: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 35px;
    /* margin-top: 5px;
    margin-right: 5px;
    color: #7c7c7c; */
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    text-align: center;
    border: 0;
    cursor: pointer;
`;

const BottomInfo = styled.div`
    width: 100%;
    /* height: 400px; */
    /* background-color: #ff657f; */
    /* display: flex; */
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 40px;
`;

const DetailInfo = styled.div`
    width: 100%;
    /* background-color: #fffeb3; */
    display: flex;
    margin-top: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    word-break: keep-all;
    line-height: 30px;
    color: #2e2e2e;
`;

const ContentButtonWrap = styled.div`
    width: 100%;
    height: 35px;
    /* background-color: #7644ff; */
    display: flex;
    position: relative;
    text-align: center;
`;

const ModifyContentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #ccc;
    position: absolute;
    border: 0;
    right: 90px;
    cursor: pointer;
`;
const DeleteContentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #ccc;
    position: absolute;
    border: 0;
    right: 0;
    cursor: pointer;
`;

export default DetailProductInfo;
