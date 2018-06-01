import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'


import { init } from './equipamentoActions'
import LabelAndInput from '../common/form/labelAndInput'


class EquipamentoForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className='boxy-body'>
                    <Field
                        label="Nº Equipamento"
                        name="nr_equip"
                        component={LabelAndInput}
                        type="text"
                        placeholder="Numero do Equipamento"
                        className="form-control"
                    />
                    <Field
                        label="Descrição"
                        name="descricao"
                        component={LabelAndInput}
                        type="text"
                        placeholder="Digite o nome do equipamento"
                        className="form-control"
                    />
                    <Field 
                        label="Observação"
                        name="observacao" 
                        component={LabelAndInput}
                        placeholder="Descrição do equipamento"
                        className="form-control" />

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }

}

EquipamentoForm = reduxForm({ form: 'equipamentoForm', destroyOnUnmount: false })(EquipamentoForm)
const selector = formValueSelector('equipamentoForm')

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(EquipamentoForm)