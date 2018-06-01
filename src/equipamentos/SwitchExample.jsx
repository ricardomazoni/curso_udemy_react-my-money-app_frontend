import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'

const ReactBsTable = require('react-bootstrap-table');
const BootstrapTable = ReactBsTable.BootstrapTable;
const TableHeaderColumn = ReactBsTable.TableHeaderColumn;

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(70);

class Paginacao extends Component {

  
      render() {
            return ( 
                <div>
                  <ContentHeader title='Exemplos ' small='testes' />
                  <BootstrapTable
                      data={ products }
                      pagination
                      options={ this.options }>
                      <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                  </BootstrapTable>                         
                </div>  
            )
      }
}

export default Paginacao