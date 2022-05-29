class Check extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			checked: true,
		};
	};
	handleCheck = () => {
		this.setState({checked: !this.state.checked});
        //позволяет менять состояние
	};
	render() {
        var message;
        if(this.state.checked){
            message = 'выбрано';
        }
        else{
            message = 'не выбрано';
        }
		return ( 
        <div className="box">
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
            <p>Чекбокс {message}</p>
            
        </div>
        
        
        ); 
	}
}

const app = document.getElementById("program");

ReactDOM.render(<Check />, app);

