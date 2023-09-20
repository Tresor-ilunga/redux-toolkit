import { useSelector, useDispatch } from "react-redux" 
import { startChrono, reset } from "../../features/chrono.js"

export default function Chrono() {
    const dispatch = useDispatch()
    const chrono = useSelector(state => state.chrono)

    return (
        <div>
            <p className="text-2xl text-slate-100 mb-2">
                Valeur du chrono : {chrono.value}
            </p>
            <button
            onClick={() => dispatch(startChrono())}
            className="p-2 min-w-[125px] bg-slate-100 rounded"
            >Démarrer</button>
            <button
            onClick={() => dispatch(reset())}
            className="p-2 min-w-[125px] bg-slate-100 rounded ml-3"
            >Reset</button>
        </div>
    )
}
