import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando</h2>}
      
      {/* otra forma de hacerlo */}
      {/* {isLoading ? <h2>Cargando</h2> : null} */}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem
            key={img.id}
            //de esta forma envio todas las propiedades esparcidas
            {...img}
          />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}