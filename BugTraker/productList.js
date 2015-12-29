var ProductList = React.createClass({
    getInitialState : function(){
        return {message : []};
    },
    onSave : function(){
          console.log("Save button is clicked");
          var name = this.refs.txtName.value;
          var greetMsg = this.state.message;
          greetMsg.push(name);
          
          this.setState({message : greetMsg});
        },
    render : function(){
        console.log('re rendering');
        var messages = this.state.message.map(function(product){
           return ((<div>{product}</div>))
        });        
        return (
          <div>
              <input type="text" ref="txtName" />
              <input type="button" value="Save" onClick={this.onSave} id="btnSave"/>
              {messages}
          </div>
        );
    }
});

ReactDOM.render(
    <ProductList message="Welcome to react!"></ProductList>,
    document.getElementById("content")
);