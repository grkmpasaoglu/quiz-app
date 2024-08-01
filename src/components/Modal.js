import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ">
            <div className="relative bg-black p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg max-w-sm sm:max-w-md md:max-w-lg w-full transition-transform transform scale-100 duration-300 ease-in-out">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-orange-500">
                        Quiz App'e Hoşgeldin!
                    </h2>
                    <p className="text-base sm:text-lg text-white leading-relaxed mb-4 sm:mb-6">
                        <span className="block mb-2 sm:mb-4">
                            Oyun mantığı ve kurallar çok basit.
                        </span>
                        <span className="block mb-2 sm:mb-4">
                            Çeşit çeşit kategoriden bir tanesini seçebilirsin.
                        </span>
                        <span className="block mb-2 sm:mb-4">
                            Ardından karşılaşacağın sorulardan, 120 saniye içinde doğru cevaplayabildiğin kadar çok cevaplamaya çalış!
                        </span>
                        <span className="block text-lg sm:text-xl font-medium">
                            İyi eğlenceler 😊
                        </span>
                    </p>
                    <button
                        onClick={onClose}
                        className="mt-4 sm:mt-6 px-3 sm:px-4 py-2 sm:py-2.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                        Başlayalım!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
