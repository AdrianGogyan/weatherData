export function constructApi(weatherApikey, weatherApi_lang, weatherApi_location){
    return `http://api.weatherapi.com/v1/current.json?key=${weatherApikey}&q=${weatherApi_location}&lang=${weatherApi_lang}`;
}

export async function fetchConstructedApi(fullApi){
    
        const res = await fetch(fullApi);
        const data = await res.json();
        return data;
    

}
