import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField() {
  const [name, setName] = React.useState('Your name');
  const [aeg, setAeg] = React.useState('Your aeg');
  const [deals, setDeals] = React.useState('Good deals');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
    setAeg(event.target.value);
    setDeals(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="component-simple">My Name is___</InputLabel>
        <Input id="component-simple" value={name} onChange={handleChange} />
        <FormHelperText id="component-helper-text">Write your Name.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Iam ___years old</InputLabel>
        <Input id="component-simple" value={aeg} onChange={handleChange} />
        <FormHelperText id="component-helper-text">Write How old are you?</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-simple">Your good deals</InputLabel>
        <Input id="component-simple" value={deals} onChange={handleChange} />
        <FormHelperText id="component-helper-text">What good deals you make this year.</FormHelperText>
      </FormControl>
        </form>
  );
}