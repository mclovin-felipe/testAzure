const Resumen = ({ companero, equipo }) => {
    const json = {
        "persona": companero,
        "email": "johndoe@example.com"
    };

    const PrettyJson = () => {
        return (
            <pre style={{ marginTop: 5 }} >{JSON.stringify(json, null, 2)}</pre>
        );
    };
    return (<PrettyJson />)
}
export default Resumen;