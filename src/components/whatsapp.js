export default function Whatsapp (props) {
    return (
        <div className="row d-flex justify-content-center align-items-center backButtom p-2">
            <div>📱</div>
            <div className="col-auto">{props.text}</div>
        </div>
    )
}