import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

//  headers: {
//     'X-RapidAPI-Key': '50d4777d2cmshf16c2753d72547bp15f95cjsnf78858ccac3e',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
    headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '50d4777d2cmshf16c2753d72547bp15f95cjsnf78858ccac3e',
    }
    })

    return data
}

