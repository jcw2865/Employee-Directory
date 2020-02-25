import React from 'react';
import MaterialTable from 'material-table';
import "./table.css";

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Employee ID', field: 'employeeId', type: 'numeric' },
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            { title: 'Job Title', field: 'title' },
            { title: 'Interesting Fact', field: 'interestingFact' },
        ],
        data: [
            { employeeId: 77, firstName: 'Jack', lastName: 'Torrance', title: 'Caretaker', interestingFact: 'Always been the caretaker' },
            { employeeId: 78, firstName: 'Roland', lastName: 'Deschain', title: 'Tower Security', interestingFact: 'Does NOT like lobsters' },
            { employeeId: 79, firstName: 'Frank', lastName: 'Callahan', title: 'Chaplain', interestingFact: 'Believes in vampires' },
            { employeeId: 18, firstName: 'Ralph', lastName: 'Anderson', title: 'Detective', interestingFact: 'Does not believe in vampires' },
        ],
    });

    return (
        <MaterialTable
            title="Employees List"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}