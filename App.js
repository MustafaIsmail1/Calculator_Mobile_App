import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {useState} from "react";
import Row from "./components/row";
import Button from "./components/Button";
import calculator, {initialState} from "./components/calculator";

export default function App() {
  const [myState, setMyState] = useState(initialState);

  handleTap = (type, value)=>{
    setMyState(calculator(type,value,myState))
  }

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.value}>{parseFloat(myState.currentValue).toLocaleString()}</Text>
    <Row>
    <Button text="c" onPress={()=> {this.handleTap("clear")}}/>
    <Button text="+/-" theme="primary" onPress={()=> {this.handleTap("posneg")}} />
    <Button text="%" theme="secondary" onPress={()=> {this.handleTap("percentage")}}/>
    <Button text="/" theme="accent" onPress={()=> {this.handleTap("operator", "/")}} />
    </Row>
     <Row>
    <Button text="7" onPress={()=> {this.handleTap("number",7)}}/>
    <Button text="8" onPress={()=> {this.handleTap("number",8)}}/>
    <Button text="9" onPress={()=> {this.handleTap("number",9)}}/>
    <Button text="*" theme="accent" onPress={()=> {this.handleTap("operator", "*")}} />
    </Row>
     <Row>
    <Button text="4" onPress={()=> {this.handleTap("number",4)}}/>
    <Button text="5" onPress={()=> {this.handleTap("number",5)}}/>
    <Button text="6" onPress={()=> {this.handleTap("number",6)}}/>
    <Button text="-" theme="accent" onPress={()=> {this.handleTap("operator", "-")}} />
    </Row>
     <Row>
    <Button text="1" onPress={()=> {this.handleTap("number",1)}}/>
    <Button text="2" onPress={()=> {this.handleTap("number",2)}}/>
    <Button text="3" onPress={()=> {this.handleTap("number",3)}}/>
    <Button text="+" theme="accent" onPress={()=> {this.handleTap("operator", "+")}} />
    </Row>
     <Row>
    <Button text="0" onPress={()=> {this.handleTap("number",0)}}/>
    <Button text="8" onPress={()=> {this.handleTap("number",0)}}/>
    <Button text="9" onPress={()=> {this.handleTap("number",0)}}/>
    <Button text="=" theme="accent" onPress={()=> {this.handleTap("equal")}} />
    </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },

  value: {
    color: "#fff",
    fontSize:42,
    textAlign: "right",
    marginRight:20,
    marginBottom: 10
  }
});
