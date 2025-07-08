import Data from './Api/Data.json';
import '../App.css';
import { useState } from 'react';


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
                <input type='text' placeholder='Search Country...' className='form-control input mb-4' onChange={getData} />
            </div>
            <ul className='list-group'>
                {filterOut.map((Data) => (
                    <li key={Data.id} className='list-group-item'>
                        <table className='table'>
                            <thead>
                                <tr className='country'>{Data.country}</tr>
                            </thead>
                            <tbody className=''>
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
                                <tr className='tlast'>
                                    <td><b>Urban Population:</b> {Data.urban_population}</td>
                                    <td><b>World Share:</b> {Data.world_share}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <span><h5>Country: {Data.country}</h5></span>
                        <span>Population: {Data.population}</span>
                        <span>Yearly Change: {Data.yearly_change}</span>
                        <span>Net Change: {Data.net_change}</span>
                        <span>Density Per Square KM: {Data.density_per_square_km}</span>
                        <span>Land Are In Square KM: {Data.land_are_in_square_km}</span>
                        <span>Migrants Net: {Data.migrants_net}</span>
                        <span>Fertility Rate: {Data.fertility_rate}</span>
                        <span>Median Age: {Data.median_age}</span>
                        <span>Urban Population: {Data.urban_population}</span>
                        <span>World Share: {Data.world_share}</span> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopulationData;