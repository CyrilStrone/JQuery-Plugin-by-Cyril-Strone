class Game extends React.Component {
	render() {
		return ( 
        <div>
            <h1>{this.props.name}</h1> 
            <h2>{this.props.age}</h2> 
        </div>
        
        
        ); 
	}
}

const app = document.getElementById("program");

ReactDOM.render(
<div>
   <Game name="Forza" age="18+" />
   <Game name="Minecraft" age="21+" />
   <Game name="GTA 5" age="21+" />
</div>
,
app);

