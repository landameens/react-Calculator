import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>Кошелек</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div className="container">
          <section className="total">
            <header className="total__header">
              <h3>Баланс</h3>
              <p className="total__balance">0 ₽</p>
            </header>

            <div className="total__main">
              <div className="total__main-item total__income">
                <h4>Доходы</h4>
                <p className="total__money total__money-income">+0 ₽</p>
              </div>

              <div className="total__main-item total__expenses">
                <h4>Расходы</h4>
                <p className="total__money total__money-expenses">-0 ₽</p>
              </div>
            </div>
          </section>

          <section className="history">
            <h3>История расходов</h3>
            <ul className="history__list">
              <li className="history__item history__item-plus">Получил зарплату
                <span className="history__money">+30000 ₽</span>
                  <button className="history__delete">x</button>
              </li>

              <li className="history__item  history__item-minus">Отдал долг
                <span className="history__money">-10000 ₽</span>
                  <button className="history__delete">x</button>
              </li>
            </ul>
          </section>

          <section className="operation">
            <h3>Новая операция</h3>
            <form id="form">
              <label>
                <input type="text" className="operation__fields operation__name" placeholder="Наименование операции" />
              </label>

              <label>
                <input type="number" className="operation__fields operation__amount" placeholder="Введите сумму" />
              </label>
                    
              <div class="operation__btns">
                <button type="submit" className="operation__btn operation__btn-subtract">РАСХОД</button>
                <button type="submit" className="operation__btn operation__btn-add">ДОХОД</button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
