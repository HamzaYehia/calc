export default function Result(props) {
    
    return (
        <div className="result">
          <span>({props.result})</span>

          &nbsp;
        
          {props.calc || `000`}
        </div>
    );
};