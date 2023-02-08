export default function Ops(props) {
    return (
        <>
            <button onClick={() => props.updateCalc(`/`)}>/</button>
            <button onClick={() => props.updateCalc(`*`)}>*</button>
            <button onClick={() => props.updateCalc(`-`)}>-</button>
            <button onClick={() => props.updateCalc(`+`)}>+</button>
        </>
    );
};