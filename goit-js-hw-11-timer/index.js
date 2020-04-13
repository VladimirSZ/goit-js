// Создай плагин настраиваемого таймера, который ведет обратный 
// отсчет до предварительно определенной даты. Такой плагин может 
// использоваться в блогах и интернет-магазинах, страницах регистрации событий, 
// во время технического обслуживания и т. д.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
class CountdownTimer {
    constructor({
      selector,
      targetDate
    }) {
      this.selector = document.querySelector(`${selector}`);
      this.targetDate = targetDate;
      this.days = this.selector.querySelector(`span[data-value="days"]`);
      this.hours = this.selector.querySelector(`span[data-value="hours"]`);
      this.mins = this.selector.querySelector(`span[data-value="mins"]`);
      this.secs = this.selector.querySelector(`span[data-value="secs"]`);
      this.timer();
      this.firstTime();
    }
  
    firstTime() {
      const timeOther = this.targetDate.getTime() - Date.now();
      if (timeOther <= 0) {
        this.lastTime(0)
      }
    }
  
    lastTime(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      this.displayTimer(days, hours, mins, secs)
    }
  
    displayTimer(days, hours, mins, secs) {
      this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;
    }
  
    timer() {
      const timerId = setInterval(() => {
        const timeOther = this.targetDate.getTime() - Date.now();
        if (timeOther <= 0) {
          clearInterval(timerId);
          this.lastTime(0);
          return
        }
        this.lastTime(timeOther);
      }, 1000)
    }
  };
  
  
  const counter = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
    // targetDate: new Date(2020,3,10,17,2),
  });
  // console.log(counter);
  
  
  
  
  //   Для подсчета значений используй следующие готовые формулы, 
  //   где time - разница между targetDate и текущей датой.
  
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  // const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  
  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  // const secs = Math.floor((time % (1000 * 60)) / 1000);