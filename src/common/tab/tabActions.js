export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

/**
 * funcao para receber um id 
 * e setar o menu a ser escolhido
 * usando operador spread
 */
export function showTabs(...tabIds) {
    /**
     * varios atributos 
     * se nao tiver atributo da aba
     * a mesma nao ficara habilitada
     * [e] seria o id das abas
     */
    const tabsToShow = {} // criando obj vazio
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}