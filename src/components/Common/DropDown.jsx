import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = (theme) => ({
	button: {
		display: "block",
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
});

class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleChange = (event) => {
		this.props.changeChoice(event.target.value);
	};

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	handleOpen = () => {
		this.setState({
			open: true,
		});
	};

	render() {
		const { classes } = this.props;

		const { label, options, selectedChoice } = this.props;

		return (
			<div>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-controlled-open-select-label">
						{label}
					</InputLabel>
					<Select
						labelId="demo-controlled-open-select-label"
						id="demo-controlled-open-select"
						open={this.open}
						onClose={this.handleClose}
						onOpen={this.handleOpen}
						value={selectedChoice}
						onChange={this.handleChange}
					>
						{options.map((item, index) => (
							<MenuItem value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		);
	}
}

export default withStyles(useStyles)(DropDown);
