import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField() {
  const {register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form  noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <InputLabel htmlFor="component-name">My Name is___</InputLabel>
        <Input {...register("name")} />
        <FormHelperText id="component-helper-text">Write your Name.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-age">Iam ___years old</InputLabel>
        <Input {...register("age")} />
        <FormHelperText id="component-helper-text">Write How old are you?</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-deals">Your good deals</InputLabel>
        <Input {...register("deals")} />
        <FormHelperText id="component-helper-text">What good deals you make this year.</FormHelperText>
      </FormControl>
      <Button variant="outlined" type="submit" color="secondary">Create and Sent</Button>
      </form>
       );
}