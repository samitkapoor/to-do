import "../styles/myForm.css"

export default function MyForm(props) {
    return <form autoComplete="off" onSubmit={props.onSubmit}>
        <input value={props.newItem} onChange={(e) => { props.onChange(e) }} placeholder="Enter Task Title" type="text" id="new-task" />
        <button type="submit">Submit</button>
    </form>;
}