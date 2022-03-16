import { useEffect, useState } from 'react';

const useCustomCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const getRemainingTime = () => countDownDate - new Date().getTime()

    const [countDown, setCountDown] = useState(getRemainingTime());

    useEffect(() => {
        const interval = setInterval(() => {setCountDown(getRemainingTime());}, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return [...getReturnValues(countDown), getRemainingTime()]
};

const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export { useCustomCountdown };
