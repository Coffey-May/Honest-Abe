
import { getPoliticians } from "./Politicians/PoliticiansDataProvider.js";
import { politiciansListComponent } from "./Politicians/politiciansListComponent.js";
import { getCorporations } from "./Corporations/corporationDataProvider.js";
import { corporationListComponent } from "./Corporations/corporationListComponent.js";
import { getPacs } from "./PACS/pacDataProvider.js";
import { pacListComponent } from "./PACS/pacListComponent.js";

getPoliticians()
    .then(getCorporations)
    .then(getPacs)
    .then(politiciansListComponent)
    .then(corporationListComponent)
    .then(pacListComponent)