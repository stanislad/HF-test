import React, { useState, useEffect } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

const App = () => {
  const [properties, setProperties] = useState([]);

  // this state used for searching by SearchBox
  const [term, setTerm] = useState('');

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

    //mapping properties
    const match_search = properties.map((property,i) => {

      //showing results based on search term
      if(property.short_description.includes(term)) {
        return <PropertyCard
            key={property.property_id}
            id={property.property_id}
            savedProperties={savedProperties}
            setSavedProperties={setSavedProperties}
            property={property}
        />
      }
    })

  return (
    <div className="container mx-auto my-5">
      <Header term={term} setTerm={setTerm}/>
      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties && match_search}
      </div>
    </div>
  );
}

export default App;
