function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    } else if (props.celsius === 0) {
        return <p>The water would freeze</p>
    }
    return <p>The water would not boil.</p>
}

export default BoilingVerdict;