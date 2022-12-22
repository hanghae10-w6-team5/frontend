import React from 'react';
import styled from 'styled-components';

const pagination = ({
    currentPage,
    totalPosts,
    postsPerPage,
    setCurrentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <StPageNumbers>
            {pages.map((page, index) => {
                return page === currentPage ? (
                    <StBtn
                        color="#ff7e36"
                        key={index}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </StBtn>
                ) : (
                    <StBtn key={index} onClick={() => setCurrentPage(page)}>
                        {page}
                    </StBtn>
                );
                // return (

                // <StBtn key={index} onClick={() => setCurrentPage(page)}>
                //     {page}
                // </StBtn>
                // );
            })}
        </StPageNumbers>
    );
};

const StPageNumbers = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

const StBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    /* ff7e36 f8daca*/
    background-color: ${(prop) => prop.color || '#f8daca'};
    color: white;
    border-radius: 5px;

    cursor: pointer;

    transition: all 0.3s;

    :hover {
        background-color: #ff7e36;
        font-weight: bold;
    }
`;

export default pagination;
