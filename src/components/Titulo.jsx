import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ subtitulo }) => {
  const [msj, setMsj] = useState();

  const Click = () => {
    if (msj) {
      setMsj(null);
    } else {
      setMsj("(from changed state)!");
    }
  };

  return (
    <section className="text-center py-5">
      <h1>
        Hello {subtitulo} {msj}
      </h1>
      <Button variant="dark my-2" onClick={Click}>
        Click me
      </Button>
    </section>
  );
};

export default Titulo;
