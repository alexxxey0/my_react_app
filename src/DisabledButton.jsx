function Button(props) {

    return (<button className={`text-white p-2 rounded-md ${props.bgColor}`} disabled>{props.text}</button>)
}

export default Button