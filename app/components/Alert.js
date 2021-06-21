import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ColorAlerts(props) {
  const {color,msg,severity} = props;
  const classes = useStyles();
  if(!msg){
    return null;
  }
  return (
    <div className={classes.root}>
      <Alert severity={severity} color={color}>
        {msg}
      </Alert>
    </div>
  );
}