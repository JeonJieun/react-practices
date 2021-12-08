/*
 * The Kanban Board React component
 */
import React from 'react';
import KanbanColumn from './KanbanColumn';
import projectList from './assets/json/data.json';

export default class KanbanBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			isLoading: true,
			projects: [],
			draggedOverCol: 0,
		});
		this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
		this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
		this.columns = [
			{name: 'Planning', stage: 1},
			{name: 'Design', stage: 2},
			{name: 'In Progress', stage: 3},
			{name: 'Testing', stage: 4},
			{name: 'Launch', stage: 5},
		];
	}

	componentDidMount() {
		this.setState({ projects: projectList, isLoading: false });
	}

	//this is called when a Kanban card is dragged over a column (called by column)
	handleOnDragEnter(e, stageValue) {
		this.setState({ draggedOverCol: stageValue });
	}

	//this is called when a Kanban card dropped over a column (called by card)
	handleOnDragEnd(e, project) {
		const updatedProjects = this.state.projects.slice(0);
		updatedProjects.find((projectObject) => {return projectObject.name === project.name;}).project_stage = this.state.draggedOverCol;
		this.setState({ projects: updatedProjects });
	}

	render() {
		if (this.state.isLoading) {
			return (<h3>Loading...</h3>);
		}

		return  (
      <div>
				{this.columns.map((column) => {
					return (
						<KanbanColumn
							name={ column.name }
							stage={ column.stage }
							projects={ this.state.projects.filter((project) => {return parseInt(project.project_stage, 10) === column.stage;}) }
							onDragEnter={ this.handleOnDragEnter }
							onDragEnd={ this.handleOnDragEnd }
							key={ column.stage }
						/>
					);
				})}
      </div>
		);
	}
}

  