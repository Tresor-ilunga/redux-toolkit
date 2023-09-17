import FruityCart from "./FruityCart.jsx"

export default function Fruity() {
    return (
        <>
            <h1 className="text-4xl text-slate-100 font-bold">Fruit</h1>
            <p className="text-xl text-slate-200 mb-10">Pick your fruits and get delivered the next day. 🍒</p>
            <ul className="flex gap-4 mb-4"></ul>
            <FruityCart />
        </>
    )
}
