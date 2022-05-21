import { Chart, registerables } from '../node_modules/chart.js';
// var Chart=require('chart.js');
Chart.register(...registerables);
let dates: Array<String> = [];
let cases_list: Array<number> = [];
let recovered_list: Array<number> = [];
let deaths_list: Array<number> = [];
let formatedDates = [];
async function calling(country) {
    await fetch(
        "https://api.covid19api.com/total/country/" + country + "/status/confirmed",
        {
            "method": "GET",
            "redirect": "follow",
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            data.forEach((entry) => {
                // console.log(entry);

                dates.push(entry.Date);
                cases_list.push(entry.Cases);
            });
        });

    await fetch(
        "https://api.covid19api.com/total/country/" + country + "/status/recovered",
        {
            "method": "GET",
            "redirect": "follow",
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach((entry) => {
                recovered_list.push(entry.Cases);
            });
        });

    await fetch(
        "https://api.covid19api.com/total/country/" + country + "/status/deaths",
        {
            "method": "GET",
            "redirect": "follow",
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach((entry) => {
                deaths_list.push(entry.Cases);
            });
        });

};

export function graph(country) {
    dates = [];
    recovered_list = [];
    cases_list = [];
    deaths_list = [];
    formatedDates = [];
    calling(country);
    console.log(dates, dates.length);
    console.log(recovered_list);
    console.log(cases_list);
    console.log(deaths_list);
    // console.log(deaths_list[0]);
    // console.log(dates.length);
    setTimeout(() => {
        dates.forEach(function (date) {
            console.log("pp");
            // console.log(date);
            formatedDates.push(formatDate(date));
        });
    }, 5000);
    setTimeout(() => {
        console.log(formatedDates);
        console.log(dates.length);
    }, 6000);
    setTimeout(() => axesLinearChart(), 6000);
}
let my_chart;
let can = document.getElementById('display_chart') as HTMLCanvasElement;

let ctx = can.getContext('2d');
function axesLinearChart() {
    can.style.display = 'block';
    can.style.backgroundColor = 'white';
    document.querySelector('h2').style.display="block";
    if (my_chart) {
        my_chart.destroy();
    }
    my_chart = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Cases",
                    data: cases_list,
                    fill: false,
                    borderColor: "#FF",
                    backgroundColor: "#FF",
                    borderWidth: 1,
                },
                {
                    label: "Recovered",
                    data: recovered_list,
                    fill: false,
                    borderColor: "#009688",
                    backgroundColor: "green",
                    borderWidth: 1,
                },
                {
                    label: "Deaths",
                    data: deaths_list,
                    fill: false,
                    borderColor: "#f44336",
                    backgroundColor: "#f44336",
                    borderWidth: 1,
                },
            ],
            labels: formatedDates,

        },
        options: {
            responsive: true,
            maintainAspectRatio: false,


        },
    });
}

const monthsNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatDate(dateString) {
    let date = new Date(dateString);

    return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
}



