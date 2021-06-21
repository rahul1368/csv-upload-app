import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Employee from '../models/Employee';

const buttonRef = React.createRef();

export default class CSVReader1 extends Component {
  constructor(props) {
    super(props);
  }

  handleOpenDialog = e => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = data => {
    console.log(data);
    if (data && data.length > 0) {
      const employeesList = [];
      let i = 0;
      for (const row of data) {
        if (i > 0) {
          const name = row.data[0];
          const department = row.data[1];
          const manager = row.data[2];
          const salary = row.data[3];
          const dob = row.data[4];
          const age = row.data[5];
          const employeeObj = new Employee({
            name,
            department,
            manager,
            salary,
            dob,
            age,
          });
          employeesList.push(employeeObj);
        }
        i++;
      }
      this.props.saveEmployees(employeesList);
    }
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = data => {
    console.log(data);
  };

  handleRemoveFile = e => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <Container fixed maxWidth="lg">
        <Box>
          <CSVReader
            ref={buttonRef}
            onFileLoad={this.handleOnFileLoad}
            onError={this.handleOnError}
            noClick
            noDrag
            onRemoveFile={this.handleOnRemoveFile}
          >
            {({ file }) => (
              <aside
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 10,
                  padding: '12px 85px 12px 85px',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleOpenDialog}
                  // style={{
                  //   borderRadius: 0,
                  //   marginLeft: 0,
                  //   marginRight: 0,
                  //   width: '40%',
                  //   paddingLeft: 0,
                  //   paddingRight: 0,
                  // }}
                >
                  Browse file
                </Button>
                <div
                  style={{
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#ccc',
                    height: 45,
                    lineHeight: 2.5,
                    paddingLeft: 13,
                    paddingTop: 3,
                    width: '80%',
                  }}
                >
                  {file && file.name}
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  // style={{
                  //   borderRadius: 0,
                  //   marginLeft: 0,
                  //   marginRight: 0,
                  //   paddingLeft: 20,
                  //   paddingRight: 20,
                  // }}
                  onClick={this.handleRemoveFile}
                >
                  Remove
                </Button>
              </aside>
            )}
          </CSVReader>
        </Box>
      </Container>
    );
  }
}
