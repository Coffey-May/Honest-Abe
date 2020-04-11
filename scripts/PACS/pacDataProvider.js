
let pacs = []

export const usePacs = () => pacs.slice()

export const getPacs = () => fetch("http://localhost:3003/pacs")
    .then(res => res.json())
    .then(parsedPacs => pacs = parsedPacs)