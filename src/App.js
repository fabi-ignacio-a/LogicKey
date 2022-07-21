import "./styles.css";

const Title = ({ children, titleClass }) => {
  return <h1 className={`${titleClass} title `}> {children} </h1>;
};
let elements = [
  { name: "React", id: 1, level: "Luffy" },
  { name: "JavaScript", id: 2, level: "Luffy G2" },
  { name: "NestJS", id: 3, level: "Luffy G3" },
  { name: "HTML", id: 4, level: "Luffy G4" },
  { name: "C#", id: 5, level: "Luffy G5" }
];
export default function App() {
  return (
    <div className="App">
      <Title titleClass="green" />
      Me gusta
      {elements.map((e) => {
        //Las key o llaves, deben ser unicas. No se pueden repetir los hijos
        //Se aplica, generalmente, en las listas
        //Usar index solo es cuando las listas no varian o cambian.
        return (
          <span key={e.id} style={{ marginRight: 2, marginLeft: 2 }}>
            {`${e.name} ${e.level}`}
          </span>
        );
      })}
      <Title />
    </div>
  );
}
