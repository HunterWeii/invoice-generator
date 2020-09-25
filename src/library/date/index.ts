interface date {
  day: number
  month: number
  year: number
}

const moment = {
  getDate(): date {
    const todayDate = new Date();
    return {
      day: todayDate.getDate(),
      month: todayDate.getMonth() + 1,
      year: todayDate.getFullYear()
    }
  },

  format({ day, month, year }: date): string {
    const _day = day.toString().length === 1 ? `0${day}` : day;
    const _month = month.toString().length === 1 ? `0${month}` : month;
    return `${year}-${_month}-${_day}`
  },

  getTodayDate() {
    return this.format(
      this.getDate()
    )
  }
};

export default moment;