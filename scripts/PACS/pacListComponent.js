
import { usePacs } from "./pacDataProvider.js"
import { pacComponent } from "./pacComponent.js";

const contentTarget = document.querySelector(".pacsSection");

export const pacListComponent = () => {
    const pacs = usePacs()


    const render = () => {
        contentTarget.innerHTML = pacs.map(pac => {


            const html = pacComponent(pac);
            return html
        }).join("")
    }
    render()
}