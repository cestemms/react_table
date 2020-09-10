import React from 'react';
import { Container, StyledTable } from './styles'

const Thead = ({ keys, head }) => {

  const tablehead = head || {};

  return (
    <thead>
      <tr>
      {keys.map(key => <th>{tablehead[key] || key}</th>)}
      <th>Ações</th>
      </tr>
    </thead>
  )
}

const Trow = ({ record }) => {
  const keys = Object.keys(record)

  return ( 
    <tr key={record.id}>
      {keys.map(key => <td key={key}>{record[key]}</td> )}
      <div>
        <button/>
        <button/>
        <button/>
      </div>
    </tr>
  )
}

const Table = ({ data, head }) => {
  const keys = Object.keys(data[0])

  return (
    <Container>
      <StyledTable>
      <Thead keys={keys} head={head}/>
      <tbody>
        { data.map(record => <Trow record={record}/>)}   
      </tbody>
    </StyledTable>
    </Container>
  )
}

export default Table;