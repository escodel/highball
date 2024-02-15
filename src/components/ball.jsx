import { useEffect, useState } from "preact/hooks"

export function Ball(props) {
    const { number } = props

    return (
        <div className={`ball-${number} grow shrink-0 basis-1/3 -rotate-45`}>
            {number}
        </div>
    )
}
