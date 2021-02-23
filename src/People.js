// A functional component example
function People(props) {
    return (
        <div className="people">
            <h1>Hi my name is, {props.person}.</h1>
        </div>
    );
}

export default People;