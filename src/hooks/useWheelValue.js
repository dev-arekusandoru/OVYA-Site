// src/hooks/useWheelValue.js
import { useState, useEffect } from 'react';

const useWheelValue = () => {
	const [wheelValue, setWheelValue] = useState(0);

	useEffect(() => {
		const handleWheel = (event) => {
			setWheelValue((prevValue) => {
				const newValue = prevValue + event.deltaY;
				return newValue < 0 ? 0 : newValue > 5200 ? 5200 : newValue;
			});
		};

		window.addEventListener('wheel', handleWheel);
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, []);

	return wheelValue;
};

export default useWheelValue;
