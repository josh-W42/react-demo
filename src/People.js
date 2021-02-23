// A functional component example
function People(props) {
    return (
        <div className="people">
            <h1>Hello World, I'm a {props.person}.</h1>
        </div>
    );
}

export default People;