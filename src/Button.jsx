function Button(props) {

    return (<button className={`text-white p-2 rounded-md ${props.bgColor} active:${props.activeBgColor}`} onClick={props.onclick}>{props.text}</button>)
}

export default Button