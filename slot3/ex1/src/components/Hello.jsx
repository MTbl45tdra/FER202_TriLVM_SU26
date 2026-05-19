function Hello () { 
    const helloStyle = {
        color: 'black',
        fontSize: '36px',
        fontWeight: 'normal',
    };
    const reactStyle = {
        color: 'blue',
        fontSize: '48px',
        fontWeight: 'bold',
    };
    return (
        <div> 
            <p style={helloStyle}>Hello <strong style={reactStyle}>React</strong></p>
        </div>
    );
}


export default Hello;