import { useState } from "react";

function Search() {
  const [value, setValue] = useState("");
  const buscar = (e) => setValue(e.target.value);
  const url = "/results/";
  return (
    <div>
      <center>
        <h1 class="mt-5">Search Movie</h1>

        <form action={url + value} method="POST">
          <input
            type="search"
            class="form-control p-3"
            value={value}
            onChange={buscar}
            placeholder="Digita la pelicula que desea buscar"
          />
        </form>
      </center>
    </div>
  );
}

export default Search;
