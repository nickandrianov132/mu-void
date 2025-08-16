
const MySelect = (initialValue) => {
    const [values, setValues] = useState(initialValue[0])
    return (
        <div className="select_div">
            <span className="first"></span>
        </div>
    );
}

export default MySelect;
