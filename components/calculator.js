export const initialState={
  currentValue:"0",
  previousValue:null,
  operator:null
};

export const handleNumber=(value,state)=>{
  if(state.currentValue==="0"){
    return {
      currentValue:`${value}`,
      previousValue: state.previousValue,
      operator: state.operator
    }
  }else{
    return {
      currentValue:`${state.currentValue}${value}`,
      previousValue: state.previousValue,
      operator: state.operator
    };
  }
};

const handleEqual = (state)=>{
  const {currentValue, previousValue, operator} = state;
  const current = parseFloat(currentValue);
  const prev = parseFloat(previousValue);
  const resetState = {previousValue:null, operator:null};

  switch(operator){
    case "+":
    return{
      currentValue: `${prev + current}`,
      ...resetState
    };

    case "-":
    return{
      currentValue: `${prev - current}`,
      ...resetState
    };

    case "*":
    return{
      currentValue: `${prev * current}`,
      ...resetState
    };

    case "/":
    return{
      currentValue: `${prev / current}`,
      ...resetState
    };

    default:
      return state;
  }
};

const calculator = (type, value, state)=>{
  switch(type){
    case "number":
      return handleNumber(value , state);
    case "equal":
      return handleEqual(state);
    case "operator":
      return{
        operator: value,
        previousValue:state.currentValue,
        currentValue: "0"
      };
    case "posneg":
      return{
        currentValue: `${state.currentValue * -1}`,
        previousValue: state.previousValue,
        operator: state.operator
      };
    
    case "percent":
      return{   currentValue: `${state.currentValue * 0.01}`,
        previousValue: state.previousValue,
        operator: state.operator
      };
    case "clear":
      return initialState;
    default:
      return state;
  }
};

export default calculator;






