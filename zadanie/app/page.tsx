'use client';

import React, { useState } from 'react';
import InputForm from './feature/InputForm';
import { formInputs } from './feature/data/data';

const Home = () => {
	const [output, setOutput] = useState<Record<string, string>>();
	const handleFormOutput = (data: Record<string, string>) => {
		setOutput(data);
	};

	return (
		<div className='p-4 mx-[75px]'>
			<InputForm
				title='Reusable Form'
				inputs={formInputs}
				output={handleFormOutput}
			/>
			{JSON.stringify(output)}
		</div>
	);
};

export default Home;
