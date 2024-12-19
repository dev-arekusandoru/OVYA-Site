import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useWheelValue from '../hooks/useWheelValue';

const FadeInSection = ({ children, start, end, className, id, animated }) => {
	if (!end) end = start + 200;
	const wheelValue = useWheelValue();
	const controls = useAnimation();

	useEffect(() => {
		if (animated) {
			const timer = setTimeout(() => {
				controls.start({ opacity: 1, transition: { duration: 0.5 } });
			}, start);

			return () => clearTimeout(timer); // Clean up the timer on unmount
		}
	}, [animated, start, controls]);

	// Calculate the opacity based on the wheel value
	const opacity = animated
		? undefined
		: Math.min(1, Math.max(0, (wheelValue - start) / (end - start)));

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={animated ? controls : { opacity }}
			className={className}
			id={id}
		>
			{children}
		</motion.div>
	);
};

export default FadeInSection;
