import { useEffect, useState } from "react"


const useCheckInput = (initValue ) => {
    const [string, setString] = useState(initValue.string)
    const [regExp, setRegExp] = useState(initValue.regExp)
    const [check, setCheck] = useState(initValue.check)
    const [className, setClassName] = useState(initValue.className)
    const [isDispatch, setIsDispatch] = useState(initValue.isDispatch)
    useEffect(() => {
        setCheck(regExp.test(string))
    }, [string])
    useEffect(() => {
        if(check & string.length > 0) {
           setIsDispatch(true)
        } else {
            setIsDispatch(false)
        }
    }, [string])
    // const check = value.regExp.test(value.string)
    // let className = "input";
    // let isDispatch = false;
    // if(check) {
    //     className = "input input_success"
    // } else {
    //     className = "input input_invalid"
    // }

    // if(check & value.string.length > 0) {
    //     setValue({...value, isDispatch: true})
    // } else {
    //     setValue({...value, isDispatch: false})
    // }
    return [
        {value: string, check: check, className: className, isDispatch: isDispatch, onChange: (e) => setString(e.target.value)}, () => setString(initValue.string)
    ]
}
export default useCheckInput;
// const loginRegexp = /^[A-Za-z\d]{4,10}$/;
// const passRegexp = /^[A-Za-z\d]{6,12}$/;
// console.log(useCheckInput({str:"", regExp: loginRegexp}));