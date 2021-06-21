import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MODAL_TYPE } from '../../app.constants';

export default function FormDialog(props) {
  const { open, handleClose, modalType, isClosable } = props;
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleCloseWrapper = () => {
    handleClose(email, password);
  };
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>disableBackdropClick={!isClosable} */}
      <Dialog
        open={open}
        onClose={handleCloseWrapper}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {modalType === MODAL_TYPE.LOGIN.id ? 'Login' : 'Signup'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login/signup to this website, please enter your email address and
            password here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={email || ''}
            onChange={({ currentTarget }) => setEmail(currentTarget.value)}
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            value={password || ''}
            onChange={({ currentTarget }) => setPassword(currentTarget.value)}
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseWrapper} color="primary">
            {modalType === MODAL_TYPE.LOGIN.id ? 'LOGIN' : 'SIGNUP'}
          </Button>
          {/* <Button onClick={handleCloseWrapper} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
