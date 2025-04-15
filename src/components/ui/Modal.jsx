import React from 'react';
import CloseButton from './CloseButton';

export default function Modal ({isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
            <div onClick={(e) => e.stopPropagation()} className="bg-secondary-light dark:bg-secondary-dark rounded-2xl shadow-xl max-w-md relative
             p-20" >
                <CloseButton onClick={onClose} />
                {children}
            </div>
        </div>
    );
}
