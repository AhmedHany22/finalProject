export default function MessageBox(props){
    return(
        <div className={`alert alert-${props.error|| 'info'} border border-danger`}>
            {props.error}
        </div>
    )
}