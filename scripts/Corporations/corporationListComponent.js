import { corporationComponent } from "./corporationComponent.js";
import { useCorporations } from "./corporationDataProvider.js";

const contentTarget = document.querySelector(".corporationsSection")
export const corporationListComponent = () => {
    const corporations = useCorporations()


    const render = () => {
        contentTarget.innerHTML = corporations.map(corporation => {
            const html = corporationComponent(corporation);
            return html
        }).join("")

    }

    render()
}