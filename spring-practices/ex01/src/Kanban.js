/*
 * The Kanban React component
 */
import React from 'react';
import KanbanBoard from './KanbanBoard';

export default class Kanban extends React.Component {
	render(){
		const style = {
			'padding': '30px',
			'paddingTop': '5px',
		};
    
		return(
      		<div style={ style }>
        		<h1>Project Kanban Board</h1>
				<KanbanBoard />
      		</div>
		);
	}
}
