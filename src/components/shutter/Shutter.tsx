import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface ShutterProps {
  message: string;
  onClose: () => void;
}

export const Shutter: React.FC<ShutterProps> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!isVisible) return null;

  return (
    <ShutterContainer>
      <ShutterContent>
        <span>{message}</span>
        <CloseButton onClick={() => setIsVisible(false)}>×</CloseButton>
      </ShutterContent>
    </ShutterContainer>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ShutterContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff4444;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;
`;

const ShutterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
`;