import { useState } from 'react'
import { FaBookmark } from 'react-icons/fa';

function PropertyCard({ property, id, savedProperties, setSavedProperties }) {

    // state used as boolean for hover action
    const [hover, setHover] = useState(false);

    const render_image = () => {
        if(property.photos.length === 0) {
            //house placeholder image
            return 'https://www.homes2offices.in/images/h2o_property_placeholder.jpg'
        }

        return `https://mr0.homeflow.co.uk/${property.photos[0]}`
    }

    //decide icon colour
    const get_icon_colour = () => {
        if (hover) {
            return "text-red-500"
        } else if (savedProperties.includes(id)) {
            return "text-red-400"
        } else {
            return "text-yellow-400";
        }
    }

    //click handler
    const on_click = () => {
        //if already saved
        if(savedProperties.includes(id)){
            //remove from state array
            setSavedProperties(prev => prev.filter(a=>a != id))
        }else{
            //push to state array
            setSavedProperties(prev => [...prev, id])
        }
    }

  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        <img src={render_image()} alt={property.display_address} />

        <button
            className="absolute top-0 right-2"
            title="Click to bookmark this property"
            onClick={on_click}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
          <FaBookmark className={get_icon_colour()} size="45" />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{property.price}</p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
