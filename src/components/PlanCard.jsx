export default function PlanCard({ plan, onDelete }) {
    const renderTable = (title, data) => (
        <>
            <h4 style={{ marginTop: 15 }} className="titlerubro">{title}</h4>
            <table style={styles.table} className="cardcontainer">
                <thead>
                    <tr>
                        <th style={styles.th}>Servicio</th>
                        <th style={styles.th}>Deducible</th>
                        <th style={styles.th}>Cubierto</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td style={styles.td} className="titletd">{item.servicio}</td>
                            <td style={styles.td}>{item.deducible}</td>
                            <td style={styles.td}>{item.cobertura}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

    return (
        <div style={styles.card} >
            <h3 style={styles.title} className="titleplan">{plan.name}</h3>

            {/* AMBULATORIO */}
            {renderTable("Ambulatorio", plan.ambulatorio)}

            {/* EMERGENCIA */}
            {renderTable("Emergencia", [
                {
                    servicio: "Todo rubro",
                    deducible: plan.emergencia.deducible,
                    cobertura: plan.emergencia.cobertura
                }
            ])}

            {/* HOSPITALARIO */}
            {renderTable("Hospitalario", [
                {
                    servicio: "Todo rubro",
                    deducible: plan.hospitalario.deducible,
                    cobertura: plan.hospitalario.cobertura
                }
            ])}

            {/* OTROS */}
            <div style={styles.simpleBlock}>
                <p><strong>Maternidad:</strong> {plan.maternidad}</p>
                <p><strong>Dental:</strong> {plan.dental}</p>
            </div>

            {/* BOTÓN */}
            <button onClick={onDelete} style={styles.deleteBtn}>
                X
            </button>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        width: 320,
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        position: "relative" // 👈 CLAVE
    },
    title: {
        marginBottom: 10
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 12
    },
    th: {
        borderBottom: "1px solid #ccc",
        textAlign: "left",
        padding: 6,
        background: "#f5f5f5"
    },
    td: {
        padding: 6,
        borderBottom: "1px solid #eee",
    },
    simpleBlock: {
        marginTop: 10,
        fontSize: 13
    },
    deleteBtn: {
        position: "absolute",   // 👈 lo saca del flujo
        top: 10,                // 👈 arriba
        right: 10,              // 👈 derecha
        padding: "6px 10px",
        color: "grey",
        border: "none",
        borderRadius: 20,
        cursor: "pointer",
        fontSize: 12,
    }
};