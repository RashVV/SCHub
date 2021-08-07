import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField() {
  const [name, setName] = React.useState('Your name');
  const [age, setAge] = React.useState('Your age');
  const [deals, setDeals] = React.useState('Good deals');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeDeals = (event) => {
    setDeals(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="component-name">My Name is___</InputLabel>
        <Input id="component-name" value={name} onChange={handleChange} />
        <FormHelperText id="component-helper-text">Write your Name.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-age">Iam ___years old</InputLabel>
        <Input id="component-age" value={age} onChange={handleChangeAge} />
        <FormHelperText id="component-helper-text">Write How old are you?</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-deals">Your good deals</InputLabel>
        <Input id="component-deals" value={deals} onChange={handleChangeDeals} />
        <FormHelperText id="component-helper-text">What good deals you make this year.</FormHelperText>
      </FormControl>
      <Button variant="outlined" color="secondary">Create and Sent</Button>
      </form>
         
  );
}