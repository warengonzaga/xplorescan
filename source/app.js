import React from 'react';
import {Text, Newline} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

// get the version of database from the handleData.js file
import { 
	dbVersion, 
	projectVersion, 
	projectDescription 
} from './utils/handleData.js';

export default function App() {
	const dbversion = dbVersion();
	const version = projectVersion();
	const description = projectDescription();
	return (
		<>
			<Gradient name='mind'>
				<BigText text="XploreScan" font="block"/>
				{description}
			</Gradient>
			<Text>
				<Newline/>
				Version: <Text color='green'>{version}</Text> | 
				Database: <Text color='yellow'>{dbversion}</Text> | 
				By <Text color='cyan'>Waren Gonzaga</Text>
			</Text>
		</>
	);
}
