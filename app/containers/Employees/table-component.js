import React from 'react';
import MUIDataTable from "mui-datatables";
const columns = [
 {
  name: "name",
  label: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "department",
  label: "Department",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "manager",
  label: "Manager",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "salary",
  label: "Salary",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "dob",
  label: "DOB",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "age",
  label: "Age",
  options: {
   filter: true,
   sort: true,
  }
 },
];

export default function(props){
    const {employees,pageNo,totalPages,requestNewPage} = props;
    const [page,setPage] = React.useState(pageNo || 0);
    const options = {
      filterType: 'checkbox',
      onChangePage:(currPage)=>{setPage(currPage);requestNewPage(currPage);},
      count:(25 * totalPages),
      page:page,
      pagination:true,
      rowsPerPageOptions:[25,50,100,500],
      rowsPerPage:25
    };
    return(
        <MUIDataTable
            title={"Employees List"}
            data={employees}
            columns={columns}
            options={options}
        />
    )
}