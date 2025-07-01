'use client';

import React, { useEffect } from 'react';
import './ErrorToastStyle.css';

type ErrorToastProps = {
  message: string;
  onClose: () => void;
  duration: number;
};

const ErrorToast = (props: ErrorToastProps) => {
  useEffect(() => {
    const timer = setTimeout(props.onClose, props.duration);
    return () => clearTimeout(timer);
  }, [props.onClose, props.duration]);

  return (
    <div className="error-toast">
      Ошибка: {props.message}
    </div>
  );
};

export default ErrorToast;