'use client'

import { useState } from "react"

type Props = {
    value: number
}

export default function CartPage({value}: Props) {
    const [counter, setCounter] = useState(value)

    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
                    onClick={() =>  setCounter(counter + 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2 cursor-pointer">
                    +1
                </button>
                <button
                    onClick={() =>  setCounter(counter - 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2 cursor-pointer">
                    -1
                </button>
            </div>
        </>
    )
}
