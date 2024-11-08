interface LightProps {
    color: string
    on: boolean
}
const Light = ({ color, on }: LightProps) => {
    let backgroundColor = "black";
    on && (backgroundColor = color);
    return (
        <div style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            marginBottom: 20,
            backgroundColor: backgroundColor
        }}></div >
    );
}

export default Light;