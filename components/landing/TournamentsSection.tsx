export default function TournamentsSection() {
  return (
    <section className="kush-section kush-section--soft" id="tournaments">
      <div className="kush-wrap">
        <div className="kush-section__head">
          <span className="kush-section__kicker">Соревнуйтесь и выигрывайте</span>
          <h2 className="kush-section__title">Турниры и акции Куш казино</h2>
          <p className="kush-section__lead">
            Куш казино регулярно проводит турниры, в которых игроки соревнуются за призовые места и
            крупные награды. Это отличный способ добавить азарта и получить дополнительные шансы на
            выигрыш.
          </p>
          <p className="kush-section__lead">
            Участие в турнирах обычно не требует дополнительных затрат: вы просто играете в любимые
            слоты, а очки начисляются автоматически. Чем больше выигрышей и ставок, тем выше позиция
            в турнирной таблице и тем солиднее приз.
          </p>
        </div>

        <div className="kush-grid kush-grid--3">
          <article className="kush-tile">
            <h3 className="kush-tile__title">Слотовые турниры</h3>
            <p className="kush-tile__text">
              Соревнования на определённых слотах, где побеждает игрок с наибольшим суммарным
              выигрышем. Призовой фонд распределяется между лидерами таблицы.
            </p>
          </article>
          <article className="kush-tile">
            <h3 className="kush-tile__title">Еженедельные акции</h3>
            <p className="kush-tile__text">
              Куш казино обновляет предложения каждую неделю: фриспины, бонусы на депозит и
              кешбэк. Следите за новостями, чтобы ничего не пропустить.
            </p>
          </article>
          <article className="kush-tile">
            <h3 className="kush-tile__title">Сезонные розыгрыши</h3>
            <p className="kush-tile__text">
              К праздникам и особым датам Куш казино запускает крупные розыгрыши с ценными призами.
              Участие открыто для всех зарегистрированных игроков.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
