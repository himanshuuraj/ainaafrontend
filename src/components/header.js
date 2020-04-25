import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
    StatusBar
} from "react-native";
import { Header, Body, Title } from "native-base";
import { Color } from '../global/util';

class HeaderSection extends Component {

    render() {
        return (
            <Header style={{ backgroundColor : Color.themeColor, justifyContent : 'center', alignItems : 'center' }}>
                <Body style={{ justifyContent : 'center', alignItems : 'center' }}>
                <Title> { this.props.title } </Title>
                </Body>
            </Header>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        data : state.testReducer.test
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);

