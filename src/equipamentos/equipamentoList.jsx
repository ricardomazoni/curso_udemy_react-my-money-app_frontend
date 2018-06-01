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

function onRowSelect(row, isSelected, e, rowIndex) {
    // let rowStr = '';
    // for (const prop in row) {
    //     rowStr += prop + ': "' + row[prop] + '"';
    // }
    // alert(`Selected: ${isSelected}, rowIndex: ${rowIndex}, row: ${rowStr}, array: ` + JSON.stringify(row));
    console.log(JSON.stringify(row));
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
    onSelectAll: onSelectAll
}

const options = {
    clearSearch: true
  };

class EquipamentoList extends Component {

    componentWillMount() {
        /**
         * esse componente trabalha de forma
         * assicrona
         */
        this.props.getList()
    }
    /**
     * render -> metodo obrigatorio no react
     */
    

    // renderRows() {
    //     const list  = this.props.list || []
    //     // console.log(list)

    //     return list.map(eq => (
    //         <tr key = {eq._id}>
    //             <td>{eq.nr_equip}</td>
    //             <td>{eq.descricao}</td>
    //             <td>{eq.observacao}</td>
    //             <td>
    //                 <button className='btn btn-warning' onClick={()=> this.props.showUpdate(eq)} >
    //                     <i className='fa fa-pencil'></i>
    //                 </button>
    //                 <button className='btn btn-danger' onClick={()=> this.props.showDelete(eq)} >
    //                     <i className='fa fa-trash-o'></i>
    //                 </button>
    //             </td>
    //         </tr>
    //     ))
    // }

    renderRows() {
        return (
            <div>
                {/* <button className='btn btn-warning' onClick={()=> this.props.showUpdate(selectRowProp.onSelect)} > */}
                <button className='btn btn-warning' onClick={()=> this.props.showUpdate(onRowSelect)} >
                    <i className='fa fa-pencil'></i>
                </button>
                <button className='btn btn-danger' onClick={()=> this.props.showDelete(selectRowProp.onSelect)} >
                    <i className='fa fa-trash-o'></i>
                </button>
            </div>    
        )
    }

    render() {
        return (
            <div>
                {/* <table className='table'>
                    <thead>
                        <tr>
                            <th>Nr.Equip</th>
                            <th>Descricao</th>
                            <th>Observação</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table> */}
                <BootstrapTable
                        data={ this.props.list }
                        pagination
                        selectRow={ selectRowProp }
                        search={ true }
                        options={ this.options }
                        searchPlaceholder='Procure o equipamento especifico'
                        isKey>
                        <TableHeaderColumn dataField='nr_equip' isKey={ true }>Nr.Equip</TableHeaderColumn>
                        <TableHeaderColumn dataField='descricao'>Descrição</TableHeaderColumn>
                        <TableHeaderColumn dataField='observacao'>Observação</TableHeaderColumn>
                        <TableHeaderColumn dataField='action' dataFormat={ this.renderRows } export={ false }>Ações</TableHeaderColumn>
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