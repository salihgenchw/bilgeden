import React from 'react'
import { useParams } from 'react-router'

export const CityHouses = ({ allHomes }) => {

    let { city } = useParams();

    let filteredHouses = allHomes.filter((t) => t.city === city);


    return (
        <div>
            <table className="table table-hover mt-2">
                <thead className='bg-secon border-0'>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">İlan Başlığı</th>
                        <th scope="col">m2</th>
                        <th scope="col">Oda Sayısı</th>
                        <th scope="col">İlan Tarihi</th>
                        <th scope="col">Fiyatı</th>
                        <th scope="col">İl</th>
                    </tr>
                </thead>
                <tbody>

                    {filteredHouses.map((home) =>
                        
                        <tr className='align-middle' key={home.id}>
                            <th scope="row">   
                                <img src={home.image} width={120} alt="ilan_foto" /> 
                            </th>
                            <td className='tdtitle'>{home.title}</td>
                            <td>{home.m2}</td>
                            <td>{home.oda_sayisi}</td>
                            <td>{home.date}</td>
                            <td className='tdprice'>{home.price} TL</td>
                            <td>{home.city}</td>
                        </tr>
                        
                    )}
                </tbody>
            </table>

        </div>
    )
}
