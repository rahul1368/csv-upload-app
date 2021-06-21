
  
import { Button, Container } from '@material-ui/core';
import React, { Component } from 'react';
import { CSVDownloader } from 'react-papaparse';


const sampleData = [
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood2',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger2',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck2',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov2',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood2',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Robin Hood',
      'Department': 'Sales',
      'Manager': 'John Doe',
      'Salary': '2000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Arsene Wenger',
      'Department': 'Bar',
      'Manager': 'Friar Tuck',
      'Salary': '5000',
      'DOB':'11/09/1976',
      'AGE':45
    },
    {
      'Name': 'Friar Tuck',
      'Department': 'Foo',
      'Manager': 'Robin Hood',
      'Salary': '8000',
      'DOB':'12/08/1978',
      'AGE':43
    },
    {
      'Name': 'Dimi Berbatov',
      'Department': "Foo",
      'Manager': "Bradly",
      'Salary': 7000,
      'DOB':'12/08/1978',
      'AGE':43
    },
];
export default class CSVDownloader1 extends Component {
  render() {
    return (
        <>
            <CSVDownloader
                data={sampleData}
                type="button"
                filename={'filename'}
            >
                Download CSV Template
            </CSVDownloader>
        </>
    );
  }
}