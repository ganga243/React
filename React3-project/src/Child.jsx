function child({onClick}){

    console.log("child rendered");

    return(
        <button onClick={onClick}>Child Button</button>
    );
}

export default child;