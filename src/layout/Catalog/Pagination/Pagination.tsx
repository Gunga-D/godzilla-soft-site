"use client"

import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation"
import "./PaginationStyle.css"
import { addUTM } from "../../../hooks/utm"

type CatalogPaginationProps = {
    page: number
    itemsCurrentCount: number
    itemsLimitCount: number,
    utm_source: string | undefined
}

export const CatalogPagination = (props: CatalogPaginationProps) => {
    const router = useRouter()

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const onLeft = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("p", String(props.page-1))
        router.push(addUTM(pathname + '?' + params.toString(), props.utm_source))
    }
    const onRight = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("p", String(props.page+1))
        router.push(addUTM(pathname + '?' + params.toString(), props.utm_source))
    }
    return (
        <div className="CatalogPaginationContainer">
            <button onClick={onLeft} className="CatalogPaginationButton" style={{display: props.page == 0?'none':'inline-block'}}>Предыдущая</button>
            <button onClick={onRight} className="CatalogPaginationButton CatalogPaginationButtonRight" style={{display: (props.itemsCurrentCount < props.itemsLimitCount || props.itemsCurrentCount == 0)?'none':'inline-block'}}>Следующая</button>
        </div>
    )
}