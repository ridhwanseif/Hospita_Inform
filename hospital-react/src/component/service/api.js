import axios from 'axios';

const API_URL ='http://localhost:8080/doctor'

export const getDoctor = async (data) =>{
    try{
        return await axios.get('${API_URL}/${data}');
    } catch(error){
        console.log('error in edit api', error.message);
    }
}