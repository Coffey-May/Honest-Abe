
import { politicianComponent } from "./PoliticiansComponent.js";
import { usePoliticians } from "./PoliticiansDataProvider.js";


const content = document.querySelector(".politiciansSection")
export const politiciansListComponent = () => {
    const politicians = usePoliticians();


    const render = () => {
        content.innerHTML = politicians.map(politician => {

            const html = politicianComponent(politician);
            return html;
        }).join("");

    }
    render();
}