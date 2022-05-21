// getting countries
export async function country() {
    const a = await fetch("https://covid-193.p.rapidapi.com/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4e7349a545msh5e334f91ada9bf1p167213jsn95a7f13874df",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
    });
    const b = await a.json();
    return b;
}

// getting all data or by countrywise
export async function data(country?) {
    let url = "https://covid-193.p.rapidapi.com/statistics";
    if (country) {
        url = `https://covid-193.p.rapidapi.com/statistics?country=${encodeURI(country)}`;
    }
    const a = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4e7349a545msh5e334f91ada9bf1p167213jsn95a7f13874df",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
    });
    const b = await a.json();
    return b;
}