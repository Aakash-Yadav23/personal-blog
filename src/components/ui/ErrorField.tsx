// components/ui/ErrorField.tsx
import React from 'react';

interface ErrorFieldProps {
  message: string | any;
}

const ErrorField: React.FC<ErrorFieldProps> = ({ message }) => {
  if (typeof message === 'string') {
    return <div className="bg-red-200 text-white py-2">{message}</div>;
  } else if (Array.isArray(message)) {
    return (
      <div className="bg-red-200 text-white py-2">
        {message.map((error, index) => (
          <div key={index}>{error.message}</div>
        ))}
      </div>
    );
  }
  return null;
};

export default ErrorField;