import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, Typography, Container, Box } from '@material-ui/core';
import CSVReader from '../../components/csv-reader';

import { deleteEmployeesAction, saveEmployeesAction } from './actions';

function HomePage(props) {
  const { isLoggedIn } = props;
  const [employeesList, setEmployeesList] = React.useState(null);

  const saveEmployees = employeesList => {
    setEmployeesList(employeesList);
  };
  const uploadHandler = () => {
    if (employeesList && employeesList.length > 0) {
      props.saveEmployeesAction(employeesList);
    }
  };

  return (
    <Container style={{ position: 'absolute', bottom: '50%' }}>
      <Box>
        <h1 style={{ textAlign: 'center' }}>
          <Typography>CSV File Uploader</Typography>
        </h1>
      </Box>
      {isLoggedIn && (
        <>
          <Box>
            <CSVReader saveEmployees={saveEmployees} />
          </Box>
          <Box
            style={{
              textAlign: 'center',
              marginTop: '23px',
              padding: '0 23px 0 0',
            }}
          >
            <Button
              variant="contained"
              color="default"
              size="large"
              component="div"
              onClick={uploadHandler}
            >
              {'Upload'}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component="div"
              onClick={() => {
                props.deleteEmployeesAction();
              }}
            >
              {'Reset'}
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.homeReducer.isLoggedIn,
  isFetching: state.homeReducer.isFetching,
});

function mapDispatchToProps(dispatch) {
  return {
    saveEmployeesAction: employeesList =>
      dispatch(saveEmployeesAction(employeesList)),
    deleteEmployeesAction: () => dispatch(deleteEmployeesAction()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
