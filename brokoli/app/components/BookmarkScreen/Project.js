import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions,
         TouchableWithoutFeedback,
         ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Modal from 'react-native-modal'

const width = Dimensions.get('window').width

export default class Project extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.selectedItem.project}`,
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      })

      constructor(props){
          super(props)

          this.state = {
              projectId : null,
              projectData: { //Format of array being fetched from db
                            projectOwner: 'Alan Andrade',
                            bookmark: true, // Initially bookmark must be true. 
                            brokoliCounter: 2, 
                            totalBrokolis: 17, 
                            applicants: 34, 
                            title: 'Brokoli1',
                            abstract: 'someAbstract',
                            header: 'Tinder for Project. Bringing people and projects together in a virtual environment.',
                            posData: [
                            {pos: 'Java Developer', exp: 4, posNr: 2, open: true, apply: false, posDescription: 'Dicant gloriatur sea te, ad veniam essent sadipscing eum. In has appareat sadipscing, sit impedit necessitatibus id. Sea no erat debet antiopam, quo ex ridens dolorem erroribus, ne sit alia harum nusquam. Nibh soleat perfecto an eam, prima nonumy accusam ea vel. Nec tempor oportere et, doctus alienum detracto ad his.'},
                            {pos: 'React Native Architect', exp: 2,  open: true, apply: false, posNr: 2, posDescription: 'Te erat facer eum, te nisl referrentur ius. Eos tollit doming conceptam te, quis oporteat et eos. Vis ei tritani aperiri platonem, mei option alterum ea. Inimicus prodesset mediocritatem mei at, eam ullum essent detraxit no. Ius cu mucius efficiendi suscipiantur, tamquam suscipit dissentiet ne vel, ad illud mucius contentiones sed. Qui at essent dolores.'},
                            {pos: 'Financial Analyst', exp: 3, posNr: 1,  open: true, apply: false, posDescription: 'Est tibique commune in, et mei erant paulo ullamcorper. Adhuc ubique oportere eum ex, mei no tibique adversarium. Mazim persius ut eum, ei putent oblique mel, ludus equidem ea usu. Quo viderer hendrerit ei, ea nam lorem ullum albucius.'},
                            {pos: 'Managerial Accountant', exp: 5, posNr: 1,  open: true, apply: false, posDescription: 'Ne eros soluta disputando cum, assum mundi disputando his ex, ad elitr mediocrem elaboraret his. Esse explicari ne mel, ne nibh accumsan scaevola duo, dicam scripta molestiae eum cu. Adipiscing scriptorem no pri. Elit intellegat consequuntur ea sit.'},
                            {pos: 'C# Software Engineer', exp: 4, posNr: 1,  open: true, apply: false, posDescription: 'Quo te tale complectitur. At duo hinc vocent ullamcorper, pri dolorem persequeris in, te quot albucius luptatum sed. Et sea aliquid commune. Cum omnes dolore vocent ei. Sea mollis aeterno at.' }]
                             },

              isInfoVisible: false,
              isExceedBrokolisVisible: false,
              brokolis: [true,false,false,false,false],
              isApplyModalVisible: false,
              tempPosDescription: '',
              tempPos: '',
              tempPosIndex: null,
          }
      }

      componentDidMount(){

        this.state.projectId = this.props.navigation.state.params.selectedItem.id
        this.setState(function(prevState, props){
            return { projectId: prevState.projectId }
        })

        console.log('Passed projectId: ', this.state.projectId)

        // Use projectId to sent request to db and fetch the correct project. 
        this._fetchCorrenspondingProject()
      }

      _fetchCorrenspondingProject(){

        //Store the array as the state of projectData define above.
      }

      _toogleBookmark()
      {
        this.state.projectData.bookmark = true
        this.setState(function(prevState, props){
          return {projectData: prevState.projectData}
        })
        console.log('Toogled Bookmark: ', this.state.projectData.bookmark)
      }
  
      _untoogleBookmark()
      {
        this.state.projectData.bookmark = false
        this.setState(function(prevState, props){
          return {projectData: prevState.projectData}
        })
        console.log('Untoogled Bookmark: ', this.state.projectData.bookmark)
      }
      
      _toggleInfoModal()
      {
        this.state.isInfoVisible = !this.state.isInfoVisible
        this.setState(function(prevState, props){
          return { isInfoVisible: prevState.isInfoVisible}
        })
        console.log('isInfoVisible: ', this.state.isInfoVisible)
      }
  
      _renderModalInfo = () =>
      (
  
        <View style={{flex: 1}}>
  
        <View style={styles.infoHeader}>
  
  
                <View style={{flex: 3,flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 10}}> 
  
                  <Image source={require('../../../img/icons/applicants.png')} style={[styles.icon, {tintColor: 'white'}]} />
  
                  <Text style={[styles.title, {color: 'white'}]}> {this.state.projectData.applicants} </Text> 
  
                  </View>
        
                <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#A7333F', justifyContent: 'center', paddingRight: 10,paddingLeft: 10, borderTopRightRadius: 4,}}
                                  onPress={()=> this._toggleInfoModal()}>
        
                          <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
  
                          </TouchableOpacity>
  
  
  
                          </View>
        
        <View style={styles.infoModalContent}>
  
            <View style={{paddingBottom: 10}}>
  
            <Text style={[styles.title, {fontWeight: '600', color: '#254D32'}]}>Project Abstract</Text>
  
            </View>
  
            <View style={{paddingTop: 10,}}>
        
            <Text style={[styles.title, {color: 'grey'}]}>{this.state.projectData.abstract}</Text>
  
            </View>
        
                
        </View>
        </View>
      )

      _giveBrokoli()
      { 
  
        if(this.state.projectData.brokoliCounter < 5)
        {
        //increment if brokoliCounter is less than or equal to 5
        this._incrementBrokoliCounter()
  
        this.state.projectData.totalBrokolis = this.state.projectData.totalBrokolis + 1
        this.setState(function(prevState, props){
          return { projectData: this.state.projectData}
        })
  
        console.log('Brokolis: ', this.state.projectData.totalBrokolis)
        }
        else{
          
          this._toggleExceedBrokolis()
          
        }
      }
  
      _takeBrokoli()
      {
        if(this.state.projectData.brokoliCounter > 0)
        {
        //decrement if brokoliCounter is greater than or equal to 0
        this._decrementBrokoliCounter()
  
        this.state.projectData.totalBrokolis = this.state.projectData.totalBrokolis - 1
        this.setState(function(prevState, props){
          return { projectData: prevState.projectData}
        })
  
        console.log('Brokolis: ', this.state.projectData.brokoliCounter)
        }
      }
  
      
  
      _incrementBrokoliCounter()
      {    
       
        this.state.projectData.brokoliCounter = this.state.projectData.brokoliCounter + 1
          this.setState(function(prevState, props){
            return { projectData: prevState.projectData}
          })
  
          console.log('BrokoliCount: ', this.state.projectData.brokoliCounter)
        
      }
  
      _decrementBrokoliCounter()
      {
        
        this.state.projectData.brokoliCounter = this.state.projectData.brokoliCounter - 1
          this.setState(function(prevState, props){
            return { projectData: prevState.projectData}
          })
  
          console.log('BrokoliCount: ', this.state.projectData.brokoliCounter)
      }
  
      _renderExceedBrokolis = () => (
  
        <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
        
            <Text style={[styles.title, {color: 'white'}]}>No more than 5 brokoli's can be given to a project.</Text>
        
            <View style={{flexDirection: 'row'}}>
        
                                <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                onPress={() => this._toggleExceedBrokolis()}>
                                <Text style={[styles.btnTxt, {color: 'white'}]}>Understood</Text>
                
                                </TouchableOpacity>
        
                            </View>
        
                        </View>
  
  
      )
  
      _toggleExceedBrokolis(){
  
        this.state.isExceedBrokolisVisible = !this.state.isExceedBrokolisVisible
        this.setState(function(prevState, props){
          return { isExceedBrokolisVisible: prevState.isExceedBrokolisVisible}
        })
        console.log('BrokoliModal: ', this.state.isExceedBrokolisVisible)
      }
  
    _renderBrokolis = ({item}) =>{
      var rows = []
      for(let i=1; i <= this.state.brokolis.length; i++)
      {
          rows.push(
  
             <View key = {i}>
  
                 <Image  style = {[styles.brokolIcon,{tintColor: i<=item.exp ? '#42D260' : '#C7C7CD'}]} 
                         source={require('../../../img/icons/broccoli.png')}  />
  
                 </View>
          )
      }
      return(
          <View style={styles.expContainer}>
              {rows}
              </View>
      )
    }
  
    _toggleApplyModal({item, index}){
  
      this.state.isApplyModalVisible = true
      this.setState(function(prevState, props){
        return { isApplyModalVisible: prevState.isApplyModalVisible}
      })
      console.log('isApplyModalVisible: ', this.state.isApplyModalVisible)
  
      this.state.tempPosDescription = item.posDescription
      this.setState(function(prevState, props){
        return { tempPosDescription: prevState.tempPosDescription }
      })
  
      console.log('Teporary PosDescription: ', this.state.tempPosDescription)
  
      this.state.tempPos = item.pos
      this.setState(function(prevState, props){
        return { tempPos: prevState.tempPos }
      })
  
      console.log('Teporary Position: ', this.state.tempPos)
  
      this.state.tempPosIndex = index
      this.setState(function(prevState, props){
        return { tempPosIndex: prevState.tempPosIndex }
      })
  
      console.log('Teporary Position Index: ', this.state.tempPosIndex)
      
    }
  
    _untoggleApplyModal(){
  
      this.state.isApplyModalVisible = false
      this.setState(function(prevState, props){
        return { isApplyModalVisible: prevState.isApplyModalVisible}
      })
      console.log('isApplyModalVisible: ', this.state.isApplyModalVisible)
  
      this.state.tempPosDescription = ''
      this.setState(function(prevState, props){
        return { tempPosDescription: prevState.tempPosDescription }
      })
  
      console.log('Teporary PosDescription: ', this.state.tempPosDescription)
  
      this.state.tempPos = ''
      this.setState(function(prevState, props){
        return { tempPos: prevState.tempPos }
      })
  
      console.log('Teporary Position: ', this.state.tempPos)
  
      this.state.tempPosIndex = ''
      this.setState(function(prevState, props){
        return { tempPosIndex: prevState.tempPosIndex }
      })
  
      console.log('Teporary Position Index: ', this.state.tempPosIndex)
  
      
    }
  
    _renderApplyModal = () => (
  
      
      <View style={{flex: 1}}>
      
            <View style={[styles.infoHeader, {justifyContent: 'flex-end'}]}>
            
                    <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#A7333F', justifyContent: 'center', paddingRight: 10,paddingLeft: 10, borderTopRightRadius: 4,}}
                                      onPress={()=> this._untoggleApplyModal()}>
            
                              <Text style={[styles.btnTxt, {color: 'white', fontSize: 20}]}>Close</Text>
      
                              </TouchableOpacity>
      
      
      
                              </View>
  
                              <View style={{flex: 8}}>
            
            <ScrollView contentContainerStyle ={[styles.infoModalContent, {borderBottomRightRadius: 0,borderBottomLeftRadius: 0}]}>
  
                <View style={{paddingBottom: 10}}>
      
                <Text style={[styles.title, {fontWeight: '600', color: '#254D32'}]}>Position</Text>
      
                </View>
      
                <View style={{paddingTop: 10}}>
            
                <Text style={[styles.title, {color: 'grey'}]}>{this.state.tempPos}</Text>
      
                </View>
      
                <View style={{paddingBottom: 10, paddingTop: 20}}>
      
                <Text style={[styles.title, {fontWeight: '600', color: '#254D32'}]}>Description</Text>
      
                </View>
      
                <View style={{paddingTop: 10}}>
            
                <Text style={[styles.title, {color: 'grey'}]}>{this.state.tempPosDescription}</Text>
      
                </View>
            
                    
            </ScrollView>
  
            </View>
  
            <View style={{flex: 1}}> 
              <TouchableOpacity style={{backgroundColor: '#254D32', alignItems:'center', borderBottomRightRadius: 4, borderBottomLeftRadius: 4}}
                                onPress={()=> this._onApply()}>
                 <Text style={{fontSize: 20, fontWeight: '600', color: 'white', padding: 10}}> Apply </Text>
              </TouchableOpacity>
              </View>
            </View>
  
  
    )
  
    _onApply(){
  
        this.state.projectData.posData[this.state.tempPosIndex].apply = true
      this.setState(function(prevState, props){
        return { projectData: prevState.projectData }
      })
  
      console.log('Apply', this.state.projectData.posData[this.state.tempPosIndex].apply)
  
      this._untoggleApplyModal()
    }

    render(){
        const { params } = this.props.navigation.state;

        return (

            <View style={styles.container}> 

                     <View style={styles.card}>
                  <View style = {styles.header}>

              <TouchableOpacity style={styles.iCont} onPress={() => this._toggleInfoModal()}>
                <Image source={require('../../../img/icons/info.png')} style={styles.icon} />
              </TouchableOpacity> 

              <View style={styles.titleCont}>
                <Text style={styles.title}> {this.state.projectData.title} </Text>
              </View>

              <View style={styles.bookmarkCont}>
                <TouchableWithoutFeedback
                                  onPress={() => this._toogleBookmark()}
                                  onLongPress={() => this._untoogleBookmark()}>

                      <Image source={this.state.projectData.bookmark ? require('../../../img/icons/bookmark-fill.png')
                                      : require('../../../img/icons/bookmark-outline.png') } 
                                    style={styles.icon} />
                </TouchableWithoutFeedback>
              </View>

          
           
          </View>


          <View style={styles.body}>

            <View style={styles.headerCont}>
              <Text style={styles.headerTitle}>{this.state.projectData.header}</Text>
            </View>


            <View style={[styles.posiCont, {paddingTop: 5}]}>
            
            <TouchableWithoutFeedback>

                  <FlatList
                    extraData={this.state}
                    data={this.state.projectData.posData}
                    renderItem={({ item, index }) => (

                <View style={{paddingTop: 5, paddingBottom: 5}}>
 
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

                  <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 5}}>
                  <Text style={styles.itemText}>{item.pos}</Text>
                  </View>
                  {this._renderBrokolis({item})} 
                  </View> 

                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

                 

                  <View style={{paddingLeft: 10,}}>

                  

                    <Image source={require('../../../img/icons/open.png')} 
                           style={{resizeMode: 'center', width: 35, height: 35, tintColor: '#42D260'}}/>

                            

                    </View>

                    

                    

                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 5}}>
                  <Text style={[styles.itemText, {color: '#A7333F', padding: 5, fontWeight: '600'}]}>{item.posNr}</Text>
                 
                  <Image source={require('../../../img/icons/pos-applicant.png')} 
                         style={{resizeMode: 'center', width: 35, height: 35, tintColor: '#A7333F'}}/>
                         
                  </View>
                  

                  <TouchableWithoutFeedback disabled={item.apply}
                                    onPress={() => this._toggleApplyModal({item, index}) }>

                    <View style={{alignContent: 'flex-end', alignItems: 'center', justifyContent: 'center',marginTop: 5, marginRight: 5, borderWidth: 1, borderRadius: 5, borderColor: '#42D260',
                                           backgroundColor: item.apply ? 'white' : '#42D260'}}>

                         <Text style={[styles.itemText, {color: item.apply ? '#42D260' : 'white', padding: 5}]}>{item.apply ? 'Applied' : 'Apply' } </Text>

                  </View>

                  </TouchableWithoutFeedback>
     
                  </View> 
                  

              </View>
          )}
          keyExtractor={item => item.pos}
        />

        </TouchableWithoutFeedback>

          
                   
            </View>
          </View>

          <View style={styles.footer}> 

              <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 5}}>
             
                <Image source={require('../../../img/icons/profile_pic.png')} style={{resizeMode: 'center', width: 40, height: 40}}  />
                <Text style={{fontSize: 20, fontWeight: '100', color: '#C7C7CD', paddingLeft: 5}}> {this.state.projectOwner} </Text>
                     
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10}}> 

                  <Text style={{fontSize: 20, fontWeight: '100',paddingRight: 5, color: this.state.projectData.brokoliCounter == 1 ? '#85c59a' : 
                                                                                        this.state.projectData.brokoliCounter == 2 ? '#5eb179' : 
                                                                                        this.state.projectData.brokoliCounter == 3 ? '#4b9c66' : 
                                                                                        this.state.projectData.brokoliCounter == 4 ? '#38754c' : 
                                                                                        this.state.projectData.brokoliCounter == 5 ? '#2b5a3b' : '#C7C7CD'}}> 
                        {this.state.projectData.totalBrokolis} 
                        </Text>

                  <TouchableWithoutFeedback onPress={() => this._giveBrokoli()}
                                            onLongPress={() => this._takeBrokoli()}
                                            style={{borderWidth: 0.5}}>

                        <Animatable.Image source={require('../../../img/icons/brokoli-counter.png') } 
                                          animation={this.state.projectData.brokoliCounter == 5 ? 'rubberBand' : ''}
                                          style={{resizeMode: 'center', width: 40, height: 40, tintColor: this.state.projectData.brokoliCounter == 1 ? '#85c59a' : 
                                                                                              this.state.projectData.brokoliCounter == 2 ? '#5eb179' : 
                                                                                              this.state.projectData.brokoliCounter == 3 ? '#4b9c66' : 
                                                                                              this.state.projectData.brokoliCounter == 4 ? '#38754c' : 
                                                                                              this.state.projectData.brokoliCounter == 5 ? '#2b5a3b' : '#C7C7CD'}} />
                  </TouchableWithoutFeedback>

                  </View>


                
                </View>



            </View>

          <Modal isVisible = {this.state.isInfoVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}
                         onBackdropPress={() => this.setState({ isInfoVisible: false })}>

                         {this._renderModalInfo()}

                  </Modal>  

            <Modal isVisible = {this.state.isExceedBrokolisVisible}
                   animationIn={'slideInLeft'}
                   animationOut={'slideOutRight'}
                   onBackdropPress={() => this.setState({ isExceedBrokolisVisible: false })}>

                         {this._renderExceedBrokolis()}

                  </Modal> 

                  <Modal isVisible = {this.state.isApplyModalVisible}
                   animationIn={'slideInLeft'}
                   animationOut={'slideOutRight'}
                   onBackdropPress={() => this.setState({ isApplyModalVisible: false })}>

                         {this._renderApplyModal()}

                  </Modal> 

                  </View>

                </View>

        )
    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 40,
      },
      header: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
      },
      body: {
        flex: 8,
      },
      titleCont:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
      },
      posiCont: {
        flex: 6,
      },
      iCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
      },
      bookmarkCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
      },
      icon: {
        width: 25,
        height: 25,
        resizeMode: 'center',
        tintColor: '#42D260'
      },
      title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#42D260'
      },
      button: {
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      infoModalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderColor: '#C7C7CD',
        flex: 3,
      },
      infoHeader: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        height: 40, 
        backgroundColor: '#254D32',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
      },
      footer:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: '#C7C7CD',
        justifyContent: 'space-between'
      
      },
      button: {
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      headerCont: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#C7C7CD',
        width: width - 45,
        paddingLeft: 10,
        paddingRight: 10
      },
      headerTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#C7C7CD',
      },
      brokolIcon:{
        width: 20,
        height: 20,
        resizeMode: 'center'
      },
      itemCont:{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10
      },
      expContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
  
    },
    itemText: {
      fontSize: 17,
      fontWeight: '300',
      color: '#C7C7CD'
    }


}) 