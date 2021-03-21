const CustomLabel = ({ viewBox, value1, value2 }) => {
    const { cx, cy } = viewBox;
    return (
        <text x={cx} y={cy} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
            <tspan alignmentBaseline="middle" fontSize="26">{value1}</tspan>
            <tspan fontSize="14">{value2}</tspan>
        </text>
    )
}

export default CustomLabel;