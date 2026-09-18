import { ShieldCheck, Zap, Gift, Smartphone, Wallet, Headphones } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Честная и безопасная игра',
    text: 'Куш казино использует сертифицированный генератор случайных чисел, поэтому каждый спин проходит прозрачно, а личные данные игроков надёжно защищены.',
  },
  {
    icon: Zap,
    title: 'Мгновенный запуск',
    text: 'Не нужно ничего скачивать. Куш казино работает прямо в браузере — открываете сайт и сразу попадаете в игру с любого устройства.',
  },
  {
    icon: Gift,
    title: 'Щедрые бонусы',
    text: 'Приветственный пакет, фриспины и регулярные акции. Куш казино поощряет как новичков, так и постоянных игроков.',
  },
  {
    icon: Smartphone,
    title: 'Идеально на телефоне',
    text: 'Куш казино адаптировано под мобильные экраны. Играйте со смартфона где угодно — интерфейс остаётся быстрым и удобным.',
  },
  {
    icon: Wallet,
    title: 'Быстрые выплаты',
    text: 'Вывод выигрышей проходит быстро и без лишних задержек. Поддерживаются популярные платёжные способы для игроков.',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    text: 'Служба поддержки Куш казино всегда на связи и готова помочь с любым вопросом — от регистрации до вывода средств.',
  },
]

export default function Advantages() {
  return (
    <section className="kush-section">
      <div className="kush-wrap">
        <div className="kush-section__head">
          <span className="kush-section__kicker">Почему выбирают нас</span>
          <h2 className="kush-section__title">Преимущества Куш казино</h2>
          <p className="kush-section__lead">
            Куш казино собрало всё, что нужно для комфортной игры: надёжность, скорость и щедрые
            награды. Вот что получает каждый игрок с первой минуты — от честных алгоритмов до
            быстрых выплат и отзывчивой поддержки, которая отвечает в любое время суток.
          </p>
        </div>

        <div className="kush-grid kush-grid--3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article className="kush-tile" key={item.title}>
                <span className="kush-tile__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="kush-tile__title">{item.title}</h3>
                <p className="kush-tile__text">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
