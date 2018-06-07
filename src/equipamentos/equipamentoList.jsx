import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init, getList, showUpdate, showDelete } from './equipamentoActions'

const ReactBsTable = require('react-bootstrap-table');
const BootstrapTable = ReactBsTable.BootstrapTable;
const TableHeaderColumn = ReactBsTable.TableHeaderColumn;


// import Checkbox from 'rc-checkbox';
// import 'rc-checkbox/assets/index.css';


/**
 * Criando a lista para ser chamada 
 * na lista nav bar
 * transformando redux
 */

//  function selecLinha(pLinha) {
//      console.log(pLinha)
//      showUpdate(pLinha)
//  }

function onRowSelect(row, isSelected, e, rowIndex) {
    // let rowStr = '';
    // for (const prop in row) {
    //     rowStr += prop + ': "' + row[prop] + '"';
    // }
    // alert(`Selected: ${isSelected}, rowIndex: ${rowIndex}, row: ${rowStr}, array: ` + JSON.stringify(row));
    // console.log(row)
    return row
}

function onSelectAll(isSelected, rows) {
    alert(`is select all: ${isSelected}`);
    if (isSelected) {
      alert('Current display and selected data: ');
    } else {
      alert('unselect rows: ');
    }
    for (let i = 0; i < rows.length; i++) {
      alert(rows[i].id);
    }
}

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: onRowSelect,
    onSelectAll: onSelectAll,
    bgColor: 'gray'
}

const options = {
    clearSearch: true,
    sizePerPageList: [ 5, 10, 15, 20 ],
    sizePerPage: 5
  };

class EquipamentoList extends Component {

    componentWillMount() {
        /**
         * esse componente trabalha de forma
         * assicrona
         */
        this.props.getList()
    }

    renderRows(cell, row, parent) {
        return (
            <div>
                {/* <button className='btn btn-warning' onClick={()=> this.props.showUpdate(selectRowProp.onSelect)} > */}
                {/* this.props.showUpdate(onRowSelect)} > */}
                <button className='btn btn-warning' onClick={()=> parent.props.showUpdate(row) } >
                    <i className='fa fa-pencil'></i>
                </button>
                <button className='btn btn-danger' onClick={()=> parent.props.showDelete(row)} >
                    <i className='fa fa-trash-o'></i>
                </button>
            </div>    
        )
    }

    render() {
        return (
            <div>
                <BootstrapTable
                        data={ this.props.list }
                        pagination={ true }
                        selectRow={ selectRowProp }
                        search={ true }
                        options={ options }
                        searchPlaceholder='Procure o equipamento especifico'
                        striped hover condensed
                        isKey>
                        <TableHeaderColumn width='150' dataField='nr_equip' isKey={ true }>Nr.Equip</TableHeaderColumn>
                        <TableHeaderColumn width='200' dataField='descricao'>Descrição</TableHeaderColumn>
                        <TableHeaderColumn witdth='400' dataField='observacao'>Observação</TableHeaderColumn>
                        <TableHeaderColumn width='100' dataField='action' dataFormat={ this.renderRows } formatExtraData={ this } export={ false }>Ações</TableHeaderColumn>
                </BootstrapTable>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.equipamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
/**
 * chamando o decorator
 * passando os componentes para o propriedade
 */
export default connect(mapStateToProps, mapDispatchToProps)(EquipamentoList)