import React, { createContext, useState, useContext } from 'react';
import ModalCamper from "../components/ModalCamper/ModalCamper";


const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (itemId) => {
        setModalContent(itemId)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
            {isModalOpen && <ModalCamper itemId={modalContent}>{children}</ModalCamper>}s
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
