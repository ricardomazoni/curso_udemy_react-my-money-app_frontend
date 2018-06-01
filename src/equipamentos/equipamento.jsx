import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import List from './equipamentoList'
// import List from './equipamentoListExample'
import Form from './equipamentoForm'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import { init, create, update, remove } from './equipamentoActions'

class Equipamentos extends Component {
    /**
     * Fazendo a relação com Redux
     * e Carregando a chamada default da lista
     * no caso vai chamar o List de forma padrão
     */
    componentWillMount() {
        this.props.init()
        // this.props.selectTab('tabList')
        // this.props.showTabs('tabList', 'tabCreate')
    }    
    render() {
        return (
            <div>
                <ContentHeader title='Equipamentos ' small='Lista' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Cadastrar' icon='bars' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                            <TabsContent>
                                <TabContent id='tabList'>
                                    <List />
                                </TabContent>
                                <TabContent id='tabCreate'>
                                    <Form onSubmit={this.props.create}
                                        submitLabel='Incluir' submitClass='primary'/>
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info'/>
                                </TabContent>
                                <TabContent id='tabDelete'>
                                    <Form onSubmit={this.props.remove} readOnly={true}
                                        submitLabel='Excluir' submitClass='danger'/>
                                </TabContent>
                            </TabsContent>
                        </TabsHeader>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch)

export default connect(null, mapDispatchToProps)(Equipamentos)