const INITIAL_STATE = {list: []}
/***
 * Evoluir o estado da lista
 * pegar o payload 
 * os componentes serem renderizados
 * Todo action tem que ter um 
 * type
 * Envio do retorno de pagamento
 */

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            /**
             * Criando spread e retornando o 
             * retorno da lista chamada
             * no billingCycleActions
             */
            return { ...state, list: action.payload.data }

        default:
            return state            
    }
}

/* 
  Esse componente sera chamado pelo main/reducers
  Sera importado para ser visualizados
  se toranara um novo estado 
  
 */