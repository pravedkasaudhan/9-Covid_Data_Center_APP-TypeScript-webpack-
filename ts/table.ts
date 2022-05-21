import { data } from "./data";

export function addData(country?) {
    const table = document.getElementById("data") as HTMLTableElement;
    let head = `<tr id="head">
	<th class="headings">Country</th>
	<th class="headings">Total Cases</th>
	<th class="headings">Active Cases</th>
	<th class="headings">Recovered Cases</th>
	<th class="headings">New Cases</th>
	<th class="headings">Total Tests</th>
	<th class="headings">Deaths</th>
	</tr>`;
    table.innerHTML = head;
    data(country).then(data => {
        data.response.forEach(element => {
            let row = `<tr>
	<td class="content country">${element.country}</td>
	<td class="content">${element.cases.total}</td>
	<td class="content">${element.cases.active}</td>
	<td class="content">${element.cases.recovered}</td>
	<td class="content">${element.cases.new}</td>
	<td class="content">${element.tests.total}</td>
	<td class="content">${element.deaths.total}</td>
	<tr>`;
            table.innerHTML += row;
        })
    }).catch(error => {
        console.log(error);
    })

}