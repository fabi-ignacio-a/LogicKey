import "./styles.css";

const Title = ({ children, titleClass }) => {
  return <h1 className={`${titleClass} title `}> {children} </h1>;
};
let elements = [
  { name: "React", id: 1 },
  { name: "JavaScript", id: 2 },
  { name: "NestJS", id: 3 },
  { name: "HTML", id: 4 }
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
            {e.name}
          </span>
        );
      })}
      <Title />
    </div>
  );
}
