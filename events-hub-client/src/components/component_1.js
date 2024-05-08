import React from 'react';

function Component1({value_1, change_value_1}) {
	function handleAction() {
		change_value_1(!value_1);
	}

	return (
		<>
			<p>{value_1 ? "Off" : "On"}</p>
			<input type='button' onClick={handleAction} value="Button" />
		</>
	)
};

export default Component1;