var Calculator = React.createClass({
    getInitialState : function(){
        return {
            selectValue: 'add'
               };
    },
     handleChange:function(e){
         console.log(e.target.value);
        this.setState({selectValue:e.target.value});
    },
    onCalculate : function(){
          console.log("Calculate button is clicked");
          var num1 = parseInt(this.refs.txtNum1.value);
          var num2 = parseInt(this.refs.txtNum2.value);
         
        var opsResult;
         if (this.state.selectValue == "add") {
             opsResult = num1 + num2;
         } else if (this.state.selectValue == "minus") {
             opsResult = num1 - num2;
         }
        console.log(" button is clicked");
         this.setState({message : opsResult});
        },
    render : function(){
        console.log('re rendering');
        return (
          <div>
              <input type="text" ref="txtNum1" />
              <input type="text" ref="txtNum2" />
              <select value={this.state.selectValue} onChange={this.handleChange}>
                  <option value="add">Add</option>
                  <option value="minus">Substract</option>
                </select> 
              <input type="button" value="Calculate" onClick={this.onCalculate} id="btnCalc"/>
              <div>{this.state.message}</div>
          </div>
        );
    }
});

ReactDOM.render(
    <Calculator message="Welcome to react!"></Calculator>,
    document.getElementById("content")
);