import Data from './Api/Data.json';
import { motion } from 'framer-motion';
import { useState } from 'react';
import '../App.css';

const PopulationData = () => {
    const [country] = useState(Data);
    const [search, setSearch] = useState("");

    const getData = (e) => {
        setSearch(e.target.value);
    }
    let filterOut = country.filter((filterData) => {
        return filterData.country.toLowerCase().includes(search.toLowerCase());
    })
    return (
        <div className='container'>
            <h1 className='title pt-4 pb-4'>World Population Data</h1>
            <div className='col-md-6 offset-md-3'>
                <motion.input
                    type="text"
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className='form-control input mb-4'
                    placeholder="Search a country..."
                    onChange={getData}
                />
            </div>
            <ul className='list-group'>
                {filterOut.length === 0 ? (
                    <li className='list-group-item text-center nodata'>No data found</li>
                ) : (
                    filterOut.map((Data) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="p-2 shadow-md rounded-xl"
                        >
                            <li key={Data.id} className='list-group-item'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th className='country'>{Data.country} <img src={Data.image} alt={Data.country} className='flag' /></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Population:</b> {Data.population}</td>
                                            <td><b>Yearly Change:</b> {Data.yearly_change}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Net Change:</b> {Data.net_change}</td>
                                            <td><b>Density Per Square KM:</b> {Data.density_per_square_km}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Land Are In Square KM:</b> {Data.land_are_in_square_km}</td>
                                            <td><b>Migrants Net:</b> {Data.migrants_net}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Fertility Rate:</b> {Data.fertility_rate}</td>
                                            <td><b>Median Age:</b> {Data.median_age}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Urban Population:</b> {Data.urban_population}</td>
                                            <td><b>World Share:</b> {Data.world_share}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </motion.div>
                    ))
                )}
            </ul>
        </div>
    );
}

export default PopulationData;