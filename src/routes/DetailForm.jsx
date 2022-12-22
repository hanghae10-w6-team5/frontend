import React from 'react';
import DetailProductForm from '../components/product/DetailProductForm';
import styled from 'styled-components';

const DetailForm = () => {
    return (
        <Wrap>
            <Title>
                <h1 style={{ fontFamily: 'Elice_Regular' }}>상품 등록</h1>
            </Title>
            <DetailProductForm></DetailProductForm>
        </Wrap>
    );
};

const Wrap = styled.div`
    max-width: 1200px;
    min-width: 800px;
    height: 100%;
    /* background-color: gray; */
    /* border: 1px solid gray; */
    margin: auto;
    /* display: 'flex';
    justify-content: center; */
`;

const Title = styled.div`
    /* width: 100%; */
    margin-top: 100px;
    margin-bottom: 50px;
    height: 50px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default DetailForm;
