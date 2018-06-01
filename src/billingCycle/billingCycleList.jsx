import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

/**
 * Criando a lista para ser chamada 
 * na lista nav bar
 * transformando redux
 */
class BillingCycleList extends Component {

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

    renderRows() {
        const list  = this.props.list || []
        return list.map(bc => (
            <tr key = {bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={()=> this.props.showUpdate(bc)} >
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={()=> this.props.showDelete(bc)} >
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>

        ))
    } 

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
/**
 * chamando o decorator
 * passando os componentes para o propriedade
 */
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)