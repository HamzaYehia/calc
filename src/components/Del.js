export default function Del(props) {

    const deleteLast = () => {
        props.setCalc(props.calc.slice(0, -1));

        props.setResult(eval(props.calc.slice(0, -1)).toString());
    };
    
    return (
        <button onClick={deleteLast}>DEL</button>
    );
};