import "./SkeletonStyle.css"

type SkeletonProps = {
    width: number
    height: number,
    borderRadius?: number
}

export const Skeleton = (props: SkeletonProps) => {
    return (
        <div style={{
            width: `${props.width}px`,
            height: `${props.height}px`,
            borderRadius: `${props.borderRadius}px`
        }} className="SkeletonMain">
        </div>
    )
}