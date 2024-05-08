import React from 'react';

function Component2({value_2, change_value_2}) {
	function handleAction() {
		change_value_2(!value_2);
	}

	return (
		<>
			<p>{value_2 ? "Off" : "On"}</p>
			<input type='button' onClick={handleAction} value="Button" />
		</>
	)
};

export default Component2;