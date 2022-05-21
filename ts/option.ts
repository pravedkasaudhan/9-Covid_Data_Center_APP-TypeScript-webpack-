import { country } from "./data";
import { addData } from "./table";
import { graph} from "./graph";

export function addCountry() {
    let op = document.getElementById("options");
    country().then(data => {
        let x = data.response;
        x.forEach(element => {
            let l = document.createElement("option");
            l.value = `${element}`;
            l.text = `${element}`;
            op.append(l);
        })
    });
    op.onchange = (e) => {
        addData((e.target as HTMLSelectElement).value);
        graph((e.target as HTMLSelectElement).value);
    }
}

