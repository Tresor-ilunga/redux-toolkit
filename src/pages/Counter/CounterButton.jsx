import { useDispatch } from "react-redux"
import { increment, decrement, multiplay, divide } from "../../features/counter.js"

export default function CounterButton() {
    const dispatch = useDispatch()
    

    return (
        <div className="mb-4">
            <p className="text-slate-50 mb-2">Modify the counter value</p>
            <button 
            onClick={() => dispatch(increment())}
            className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
            >
                +1
            </button>

            <button 
            onClick={() => dispatch(decrement())}
            className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
            >
                -1
            </button>

            <button 
            onClick={() => dispatch(multiplay())}
            className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
            >
                x10
            </button>

            <button 
            onClick={() => dispatch(divide())}
            className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
            >
                /10
            </button>
        </div>
    )
}
