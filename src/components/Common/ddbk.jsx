import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	button: {
		display: "block",
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default function ControlledOpenSelect(props) {
	const classes = useStyles();
	const [age, setAge] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const { label, options } = props;

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={age}
					onChange={handleChange}
				>
					{options.map((item, index) => (
						<MenuItem value={item}>{item}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
