import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions } from 'react-native';
import CheckBox from 'react-native-check-box'
import interests from './interests.json'
import Toast from 'react-native-easy-toast'

const width = Dimensions.get("window"). width


import ViewContainer from '../../ViewContainer'

export default class Interests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({
            dataArray: interests
        })
    }

    onClick(data) {
        data.checked = !data.checked;
        let msg=data.checked? 'you checked ':'you unchecked '
        this.toast.show(msg+data.name);
    }

    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0) return;
        var len = this.state.dataArray.length;
        var views = [];
        for (var i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
            </View>
        )
        return views;

    }

    renderCheckBox(data) {
        var leftText = data.name;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(data)}
                isChecked={data.checked}
                leftText={leftText}
                checkBoxColor={'#42D260'}
            />);
    }

    
    render(){
        return(

            <View style={styles.container}>

                <ScrollView>
                    {this.renderView()}
                </ScrollView>
                <Toast ref={e=>{this.toast=e}}/>

                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - 60,
        marginTop: 15,
        marginBottom: 15
    },
    item: {
        flexDirection: 'row',
        flex: 1,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: '#42D260',
    },
})