import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>
        404
      </h1>
      <p className='not-found__subtitle'>
        Страница не найдена
      </p>
      <Link className='not-found__link' to='/'>
        Вернуться на главную
      </Link>
    </section>
  )
};

export default Page404;