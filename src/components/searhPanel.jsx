import React, {useEffect, useState} from "react";  
import { useDispatch, useSelector } from "react-redux";
import { startListeningForLocations, setSearchTerm, fetchLocations, setSelectedLocation } from "../store/actions/locationAction";


function SearchPanel() {
    const locations = useSelector((state) => state.locationsData.locations);
   const loading = useSelector((state) => state.locationsData.loading);
   const error = useSelector((state) => state.locationsData.error);
   const searchTerm = useSelector((state) => state.locationsData.searchTerm);
   const status = useSelector((state) => state.locationsData.status);
   const dispatch = useDispatch();
   const [filtered, setFiltered] = useState([]);


   useEffect(() => {
    const unsubscribe = dispatch(startListeningForLocations());

    return () => {
        if (unsubscribe) {
            unsubscribe();
        }
    }
    }, [dispatch]);

    useEffect(() => {
        if (!searchTerm) {
          setFiltered(locations);
          return;
        }
    
        const results = locations.filter(location => {
          // Customize this to search across the fields you want
          return (
            location.name?.toLowerCase().includes(searchTerm.toLowerCase()) 
          );
        });
        setFiltered(results);
      }, [locations, searchTerm]);

      const handleSearch = (e) => {
        const value = e.target.value;
        dispatch(setSearchTerm(value));
      }

      if (loading) {
        return <div className="list-group-item">Loading...</div>;
      }
      if (error) {
        return <div className="list-group-item">Error: {error}</div>;
      }
    
  return (
    <div className="col-12 col-md-3 border-end p-4">
        <div className="p-3">
          <h4>Search</h4>
          <input 
            type="text" 
            className="form-control mb-3" 
            placeholder="Search Location"
            value={searchTerm}
            onChange={handleSearch}
            />
          <ul className="list-group">
           
            {filtered.map(location => (
              <li key={location.id} className="list-group-item list-group-item-action" onClick={() => {
                  dispatch(setSelectedLocation(location));
                  dispatch(setSearchTerm(""));
                }}
              >
                {location.name}
              </li>
            ))}
           
          </ul>
        </div>
      </div>
  );
}

export default SearchPanel;