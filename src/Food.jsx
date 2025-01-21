function Food() {
    const food1 = 'apple';
    const food2 = 'bread';

    return(
        <ul>
            <li>{ food1 }</li>
            <li>{ food2.toUpperCase() }</li>
        </ul>
    );
}

export default Food