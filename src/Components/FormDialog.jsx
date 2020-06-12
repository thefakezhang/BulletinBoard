import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.8),
    },
     "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
}));

export default () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();
  const [value, setValue] = React.useState("Paste Youtube link here");

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + Add submission
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Aonahara Translations Clip Submission
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Submit clips and we just might translate them! Note: Anything that
            doesn't strictly follow the given format will greatly lower the
            chance of your clip being translated!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="discord_tag"
            label="Discord username"
            type="text"
            fullWidth
          />
          <form className={classes.root} noValidate autoComplete="off">
            <DialogContentText>
              <br />
              <br />
              Short description of the clip(s) you want translated *
            </DialogContentText>
            <div>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline input type 1"
                multiline
                rowsMax={3}
                value={value}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline input type 2"
                multiline
                rowsMax={4}
                value={value}
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Multiline input type 3"
                multiline
                rows={4}
                defaultValue="Paste Youtube link here"
                variant="outlined"
              />
            </div>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="I want to be credited!"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Perform Sanity check"
              />
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
