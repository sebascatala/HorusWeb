import Button from "../Atoms/boton";
import CardTitle from "../Atoms/TituloCard";
import CardText from "../Atoms/TextoCard";


const CardContent =({title, text, primaryTo, secondatTo}) => 
    (
          <div className="p-5 flex flex-col items-center text-center">
    <CardTitle text={title} />
    <CardText text={text} />
    <div className="flex gap-4 mt-2">
      <Button label="Ver más" to={primaryTo} variant="primary" />
      <Button label="Cancelar" to={secondaryTo} variant="secondary" />
    </div>
  </div>
    );
    export default CardContent;