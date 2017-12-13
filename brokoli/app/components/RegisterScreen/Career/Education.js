import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

const width = Dimensions.get('window').width

export default class Education extends React.Component {

    constructor(props){
        super(props)

        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitSchoolName = this.onSubmitSchoolName.bind(this);
        this.onSubmitLocation = this.onSubmitLocation.bind(this);
        
        this.schoolNameRef = this.updateRef.bind(this, 'schoolName');
        this.locationRef = this.updateRef.bind(this, 'location');
        this.startYearRef = this.updateRef.bind(this, 'startYear');
        this.endYearRef = this.updateRef.bind(this, 'endYear');
        this.degreeRef = this.updateRef.bind(this, 'degree');
        this.specializationRef = this.updateRef.bind(this, 'specialization');

        this.state = {
            schoolName: '',
            location: '',
            startYear: '',
            endYear: '',
            degree: '',
            specialization: '',
        }
    }

    onFocus() {
        let {errors = {}} = this.state
  
        for (let name in errors) {
          let ref = this[name];
  
          if (ref && ref.isFocused()) {
            delete errors[name];
          }
        }
  
        this.setState({ errors });
     }

    onChangeText(text) {
        ['schoolName', 'location', 'startYear', 'endYear', 'degree', 'specialization']
          .map((name) => ({ name, ref: this[name] }))
          .filter(({ ref }) => ref && ref.isFocused())
          .forEach(({ name, ref }) => {
            this.setState({ [name]: text });
          });

          // Updated states 
          console.log("schoolName: ", this.state.schoolName)
          console.log("location: ", this.state.location)
          console.log("startYear: ", this.state.startYear)
          console.log("endYear: ", this.state.endYear)
          console.log("degree: ", this.state.degree)
          console.log("specialization: ", this.state.specialization)

         }
         
  
        updateRef(name, ref) {
        this[name] = ref;
        }

        onSubmitSchoolName(){
            this.schoolName.focus();
        }

        onSubmitLocation(){
            this.location.focus();
        }

        onSubmit() {
            let errors = {};
      
            ['schoolName', 'location']
              .forEach((name) => {
                let value = this[name].value();
      
                if (!value) {
                  errors[name] = 'Should not be empty';
                } 
              });
      
            this.setState({ errors });
      }

    
    render(){

        let { errors = {} } = this.state

        let degreeData = [{
            value: 'Phd',
          }, {
            value: 'Master',
          }, {
            value: 'Bachelor',
          }];

        let specializationData = [{
            value: 'Computer Science',
          }, {
            value: 'Information Science',
        }];

        let yyData = [{
            value: 2017,
        },{
            value: 2016,
        },{
            value: 2015,
        }, {
            value: 2014,
        },{
            value: 2013,
        },{
            value: 2012,
        },{
            value: 2011,
        },{
            value: 2010,
        },{
            value: 2009,
        }, {
            value: 2008,
        },{
            value: 2007,
        },{
            value: 2006,
        }, {
            value: 2005,
        },{
            value: 2004,
        },{
            value: 2003,
        }, {
            value: 2002,
        },{
            value: 2001,
        },{
            value: 2000,
        }, {
            value: 1999,
        },{
            value: 1998,
        }, {
            value: 1997,
        },{
            value: 1996,
        },{
            value: 1995,
        }, {
            value: 1994,
        },{
            value: 1993,
        },{
            value: 1992,
        }, {
            value: 1991,
        },{
            value: 1990,
        }];
    
        return(

            <ViewContainer style={styles.educationCont}>

                <View style={styles.eduTitleCont}>

                    <Text style={styles.eduTitle}> Most recent education </Text>
                    
                </View>

                <View style={styles.topEdu}>

                    <TextField
                            ref={this.schoolNameRef}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitSchoolName}
                            blurOnSubmit={true}
                            label='Name'/>

                </View>

                <View style={styles.middleEdu}>


                    <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>

                       {/*<TextInput style={styles.location} placeholder="location" />*/}

                       <TextField
                       ref={this.schoolNameRef}
                       onFocus={this.onFocus}
                       onChangeText={this.onChangeText}
                       onSubmitEditing={this.onSubmitSchoolName}
                       blurOnSubmit={true}
                       label='Name'/>

                    </View>

                    <View style={styles.yearCont} >

                        <View style={{flex: 1, justifyContent: 'center'}}> 

                            <Dropdown
                                ref={this.startYearRef}
                                label='Start'
                                onChangeText={this.onChangeText}
                                data={yyData}/> 

                        </View>

                        <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>

                            <Text> until </Text>

                        </View>

                        <View style={{flex: 1}}>

                            <Dropdown
                                ref={this.endYearRef}
                                label='End'
                                onChangeText={this.onChangeText}
                                data={yyData}/> 

                        </View>

                    </View>

                </View>

                <View style={styles.bottomEdu}>

                <View style={{flex: 2, marginLeft: 10}}>

                <Dropdown
                    ref={this.degreeRef}
                    label='Degree'
                    onChangeText={this.onChangeText}
                    data={degreeData}/>    

                </View>

                <View style={{flex: 3, marginLeft: 10, marginRight: 10}}>

                <Dropdown
                    ref={this.specializationRef}
                    label='Specialization'
                    onChangeText={this.onChangeText}
                    data={specializationData}/>   

                </View>

                </View>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({

    educationCont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 20,
        backgroundColor: 'white',
        marginTop: 10,
    },
    eduTitleCont: {
        padding: 15,
    },
    eduTitle: {
        fontSize: 16, 
        fontWeight: '600',
        color: 'grey'
    },
    topEdu: {

    },
    name: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        width: width - 40,
        borderColor: 'grey'   
    },
    middleEdu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    yearCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    location: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5, 
        borderColor: 'grey'   
    },
    bottomEdu:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }


})
