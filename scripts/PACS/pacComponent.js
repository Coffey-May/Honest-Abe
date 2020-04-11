
export const pacComponent = (pacs) => {
    return `
    <article class="pacs">
      <section class="pac">
          <header class="pac__name">
              <h1>${pacs.registeredName}</h1>
          </header>
          <div class="pac__info">
              <div>${pacs.address}</div>
          </div>
          <div class="pac__donors">
              <h4>Donors</h4>
              <ul>
              
              </ul>
          </div>
      </section>
  </article>
    `
}