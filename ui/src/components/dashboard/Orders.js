import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
  const {columns, data} = props;
  console.log('columns:', columns);
  console.log('data:', data);
  return (
    <React.Fragment>
      <Table size="large">
        <TableHead>
          <TableRow>
            {
              !!columns && columns.map((x, idx) => {return (<TableCell key={idx}>{x['labelName']}</TableCell>);})
            }
            {/*<TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
          <TableCell align="right">Sale Amount</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {!!data && data.map((row, idx) => (
            <TableRow key={idx}>
              {
                !!columns && columns.map((x, idxx) => {
                  if (x['editCell']) {
                    return (<TableCell key={idxx}>{x['editCell'](row)}</TableCell>);
                  }
                  return (<TableCell key={idxx}>{row[x['dataKey']]}</TableCell>);
                })
              }
              {/*<TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{`$${row.amount}`}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
