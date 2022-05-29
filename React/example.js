class Block extends React.Component {
	render() {
		return ( 
        <div>
            <h3>Cyril Strone</h3> 
            <h4>{10+10} Яиц</h4> 
            <p>Мужик</p>
        </div>
        
        
        ); 
	}
}

const place = document.getElementById("example");

ReactDOM.render(
<div>
    <Block />
    <Block />
    <Block />
</div>
,
place);

