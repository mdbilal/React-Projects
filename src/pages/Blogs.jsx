import airtable from '../airtable.jsx';
import { useEffect, useState } from 'react';

function Blogs(){
    const [records, setRecords] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
        try {
            const response = await airtable.get('/blogs');
            console.log(response.data.records);
            setRecords(response.data.records);
        } catch (error) {
            console.error('Error fetching data from Airtable:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1>Blogs Data</h1>
                <ul>
                    {records.map(record => (
                        <li key={record.id}>{record.fields.Title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Blogs;