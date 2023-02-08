export default function Digits(props) {

    const digits = [];
    for (let i = 1; i <= 9; i++) {
      digits.push(
        <button
          onClick={() => props.updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>
      );
    }

    digits.push(<button onClick={() => props.updateCalc(`0`)} key={0}>0</button>);
    digits.push(<button onClick={() => props.updateCalc(`.`)}>.</button>);
  
    return (
        <>
          {digits}
        </>
    );
};