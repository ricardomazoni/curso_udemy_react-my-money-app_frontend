import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

/**
 * Criar uma lista dos lançamentos
 * Chamada atraves da api para retorno
 * da lista
 * 
 * Requisição 
 */

export function getList() {
    // const request = axios.get(`${BASE_URL}/equipamentos`,{params: {_page: 1}})
    const request = axios.get(`${BASE_URL}/equipamentos/`)
    return {
        type: 'EQUIPAMENTO_FETCHED',
        payload: request
    }   
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/equipamentos/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                
                /**
                 * Carregando a tela list após o Post
                 */
                
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
       
    }
}

export function showUpdate(equipamento) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'), 
        initialize('equipamentoForm', equipamento)
    ]
}

export function showDelete(equipamento) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'), 
        initialize('equipamentoForm', equipamento)
    ]
}


export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('equipamentoForm', {})
   ]
}