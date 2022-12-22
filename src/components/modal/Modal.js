import axios from '../../redux/lib/core/axiosBaseInstance';
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

export default function Modal({
    open,
    children,
    onClose,
    setImageSrc,
    thumbnail,
    input,
    price,
    postId,
    myId,
}) {
    if (!open) return null;

    const token = localStorage.getItem('authentication');
    const closeModal = () => {
        onClose();
        setImageSrc('');
    };

    const sendData = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.put(
                `/posts/${postId}`,
                {
                    id: myId,
                    title: input.title,
                    detail: input.detail,
                    price,
                    thumbnail,
                },
                {
                    headers: {
                        authentication: token,
                    },
                    params: {
                        postId: postId,
                    },
                }
            );
            console.log(res);
            onClose();
            window.location.reload(false);
        } catch (e) {
            console.log(e);
        }
    };
    return ReactDom.createPortal(
        <div>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                <form>
                    <div>{children}</div>
                    <StBtnGroup>
                        <StBtn onClick={sendData}>수정하기</StBtn>
                        <StBtn type="button" color="gray" onClick={closeModal}>
                            닫기
                        </StBtn>
                    </StBtnGroup>
                </form>
            </div>
        </div>,
        document.getElementById('portal')
    );
}

const StBtnGroup = styled.div`
    display: flex;
    justify-content: center;
`;

const StBtn = styled.button`
    font-family: 'Elice_regular';

    background-color: ${(prop) => prop.color || '#ff7e36'};
    color: white;
    border: 0;
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 5px;

    cursor: pointer;
`;

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000,

    display: 'flex',
    flexDirection: 'column',
};

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000,
};
