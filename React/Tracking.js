class Task extends React.Component {
    constructor(props) {
		super(props)
		this.state = {change: false,}
		this.Edit = this.Edit.bind(this)
	  
		this.Delete = this.Delete.bind(this)
	 
		this.Save = this.Save.bind(this) 
 
	};
    Edit  () {
		this.setState({change:true})
	};
	
	Delete  (){
	
		this.props.deleteBlock(this.props.index);
	};
    Save  () {
	

        this.props.update(this.refs.newTxt.value,this.props.index);
		
		this.setState({change:false});

	};
    rendNorm  (){
        return ( 
            <div className="box">
                <div className="text">{this.props.children}</div>
                <button className="btn light"  onClick={this.Edit}>
                    Редактировать
                </button>
                <button className="btn red"  onClick={this.Delete}>
                    Удалить
                </button>
            </div>
            
            
            ); 
    };
    rendEdit (){
        return ( 
            <div className="box">
                <textarea ref="newTxt" defaultValue={this.props.children}></textarea>
                <button className="btn succes"  onClick={this.Save}>
                    Сохранить
                </button>
            </div>
            
            
            ); 
    };
	render() {
        if(this.state.change){
            return this.rendEdit();
        }
        else{
            return this.rendNorm();
        }
	}
}
class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				'Необходимо купить молоко!',
				'Надо почистить зубы',
				'Просто отдохнуть'
			]
		};
		this.deleteBlock = this.deleteBlock.bind(this)
		this.updateText = this.updateText.bind(this)
		this.eachTask = this.eachTask.bind(this)
		this.add = this.add.bind(this)
	};
	add(text) {
		var arr = this.state.tasks;
		arr.push (text);
		this.setState ({tasks: arr});
	};
	deleteBlock(i) {
		var arr = this.state.tasks;
		arr.splice (i, 1);
		this.setState ({tasks: arr});
	};
	
	updateText(text, i){
		var arr = this.state.tasks;
		arr[i] = text;
		this.setState ({tasks: arr});
	};
	
	eachTask(item, i){
		
		return(<Task key={i} index={i} deleteBlock={this.deleteBlock} update={this.updateText}>{item}</Task>)
	};
	
	render() {
		return (
			<div className="field">
				<button onClick={this.add.bind (null, 'Простое задание')} className="btn new"  >
                    Новое задание
                </button>
				{this.state.tasks.map (this.eachTask)}
			</div>
		);
	}
}
const app = document.getElementById("program");




ReactDOM.render(<Field />,app)