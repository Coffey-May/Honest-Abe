export const corporationComponent = (corporation) => {

    return `
    <article class="corporations">
      <section class="corporation">
          <header class="corporation__name">
              <h1>${corporation.company}</h1>
          </header>
          <div class="corporation__info">
              <div>${corporation.address}</div>
          </div>
      </section>
  </article>
  `
}