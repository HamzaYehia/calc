export default function Equal(props) {
    const equals = () => {
        props.setCalc(props.result);
    };
    
    return (
        <button onClick={equals}>=</button>
    );
};