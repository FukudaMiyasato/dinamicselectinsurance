import { useState } from "react";
import PlanCard from "./components/PlanCard";
import { plansData } from "./data/plans";
const precios = {
  mensual: {
    "<30": 35,
    "<50": 50,
    "<60": 65,
    ">59": 160
  },
  anual: {
    "<30": 350,
    "<50": 520,
    "<60": 720,
    ">59": 1700
  }
};
export default function App() {
  const [rangoEtario, setRangoEtario] = useState("<30");
  const [modalidad, setModalidad] = useState("mensual");
  const [plans, setPlans] = useState(plansData);
  const monto = precios[modalidad][rangoEtario];

  const eliminarPlan = (index) => {
    const nuevos = plans.filter((_, i) => i !== index);
    setPlans(nuevos);
  };

  return (
    <div style={{ padding: 20 }}>
      <div id="filtros-container">

        <div className="filtro">
          <select
            value={rangoEtario}
            onChange={(e) => setRangoEtario(e.target.value)}
          >
            <option value="<30">Menor de 30</option>
            <option value="<50">Menor de 50</option>
            <option value="<60">Menor de 60</option>
            <option value=">59">Mayor igual de 60</option>
          </select>
        </div>

        <div className="filtro">
          <select
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
          >
            <option value="mensual">Mensual</option>
            <option value="anual">Anual</option>
          </select>
        </div>

      </div>
      <h2>Planes de S/ {monto} ({modalidad})</h2>

      <div id="planes-container">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            onDelete={() => eliminarPlan(index)}
          />
        ))}
      </div>
    </div>
  );
}