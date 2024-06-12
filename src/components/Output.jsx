const Output = (props) => {

    return (
        <div style={{ marginTop: "20px" }}>
            <h2><span className="badge text-bg-secondary">{props.data}</span></h2>
        </div>
    )
}

export { Output }