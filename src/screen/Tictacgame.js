import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Button from '../component/Buttons'

const Game =() => {
  const[btnText1,setBtnText1]=useState('')
  const[btnText2,setBtnText2]=useState('')
  const[btnText3,setBtnText3]=useState('')
  const[btnText4,setBtnText4]=useState('')
  const[btnText5,setBtnText5]=useState('')
  const[btnText6,setBtnText6]=useState('')
  const[btnText7,setBtnText7]=useState('')
  const[btnText8,setBtnText8]=useState('')
  const[btnText9,setBtnText9]=useState('')

const[holdLastValue,setHoldLastValue]=useState('O')
const[placeholder, setPlaceHolder]=useState('')

const handleChangeText =()=>{
  
}
  

  const handleButtonPress =() =>{
    if(btnText1 !== '') return;
  if(holdLastValue==='O'){
setHoldLastValue('X');
setBtnText1('X');

setPlaceHolder('Its player 2 turn');
    }else{
       setHoldLastValue('O');
      setBtnText1('O');
     
setPlaceHolder('Its player 1 turn');
    }
      
  }
    const handleButtonPress2 =() =>{
      if(btnText2 !== '') return;
      if(holdLastValue==='O'){
setHoldLastValue('X');
setBtnText2('X');

setPlaceHolder('Its player 2 turn');
    }else{
           setHoldLastValue('O');
      setBtnText2('O');

setPlaceHolder('Its player 1 turn');
    }
    
  }
   const handleButtonPress3 =() =>{
     if(btnText3 !== '') return;
     if(holdLastValue=='O'){
setBtnText3('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText3('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
   }
   const handleButtonPress4 =() =>{
     if(btnText4 !== '') return;
     if(holdLastValue=='O'){
setBtnText4('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText4('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
  }
   const handleButtonPress5 =() =>{
     if(btnText5 !== '') return;
     if(holdLastValue=='O'){
setBtnText5('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText5('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
  }
  
   const handleButtonPress6 =() =>{
     if(btnText6 !== '') return;
      if(holdLastValue=='O'){
setBtnText6('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText6('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
  }
     
   const handleButtonPress7 =() =>{
     if(btnText7 !== '') return;
     if(holdLastValue=='O'){
setBtnText7('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText7('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
  }
   const handleButtonPress8 =() =>{
     if(btnText8 !== '') return;
     if(holdLastValue=='O'){
setBtnText8('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText8('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
  }
 
   const handleButtonPress9 =() =>{
     if(btnText9 !== '') return;
     if(holdLastValue=='O'){
setBtnText9('X');
setHoldLastValue('X');
setPlaceHolder('Its player 2 turn');
    }else{
      setBtnText9('O');
      setHoldLastValue('O');
setPlaceHolder('Its player 1 turn');
    }
  }

  const handleRestart=()=> {
      setBtnText1('');
      setBtnText2('');
      setBtnText3('');
      setBtnText4('');
      setBtnText5('');
      setBtnText6('');
      setBtnText7('');
      setBtnText8('');
      setBtnText9('');
      setPlaceHolder('')
  }

    return (
        <ScrollView style={style.container1}>
            <View style={style.txtview}>
               <Text style={style.txt}>
             Tic-Tac-Toe
                Game
               </Text>
           </View>
           <TextInput style= {style.txtdisplay}
           placeholder={placeholder}
           placeholderTextColor='white'
           />
          <View style={{marginHorizontal: 54, marginVertical:20}}>
           <View style={{ flexDirection: 'row' }}>
            <Button onPress={handleButtonPress}        btnText={btnText1} /> 
           <Button onPress={handleButtonPress2}        btnText={btnText2} />
           <Button onPress={handleButtonPress3}        btnText={btnText3} />
           </View>

           <View style={{ flexDirection: 'row'}}>
            <Button onPress={handleButtonPress4}        btnText={btnText4} /> 
           <Button onPress={handleButtonPress5}        btnText={btnText5} />
           <Button onPress={handleButtonPress6}        btnText={btnText6} />
           </View>

           <View style={{ flexDirection: 'row'}}>
            <Button onPress={handleButtonPress7}        btnText={btnText7} /> 
           <Button onPress={handleButtonPress8}        btnText={btnText8} />
           <Button onPress={handleButtonPress9}        btnText={btnText9} />
           </View>
          </View>  

           <TouchableOpacity style={style.lastbtn} onPress={handleRestart}>
               <Text style={style.txt2}>Restart</Text>
           </TouchableOpacity>
  
      </ScrollView>

    )
}

const style = StyleSheet.create({
 container1: {
     backgroundColor: '#2f4f4f'
 },
 txtview: {
     height: 150,
     width: 'auto',
     backgroundColor: 'black',
     marginVertical: 30,
     marginHorizontal: 10,
     padding: 10
 },
 txt: {
     color: '#f0e68c',
     fontSize: 50,
     textAlign: 'center'
 },
  txtdisplay: {
       borderColor: 'whitesmoke',
       borderWidth: 1,
       borderRadius: 5,
       height: 70,
       marginHorizontal: 40,
       marginBottom: 20,
      textAlign:'center',
      fontSize: 25
   },
   
 lastbtn: {
     marginHorizontal: 57,
     marginVertical: 30,
     padding: 10,
     borderRadius: 5,
     backgroundColor: 'whitesmoke',

 },
 txt2: {
     textAlign:'center'
 }
});

export default Game;