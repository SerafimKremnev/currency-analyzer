import { IHistory } from "@/app/page";
import { format } from "date-fns";

export const calculateNextWeekForecast = (history: IHistory): IHistory => {
  const forecast: IHistory = {
    USD: [],
    CNY: [],
    EUR: [],
  };

  // Рассчитываем среднее значение за последнюю неделю
  const lastWeekValuesUSD = history.USD.slice(-7); // Получаем последние 7 значений
  const lastWeekValuesCNY = history.CNY.slice(-7); // Получаем последние 7 значений
  const lastWeekValuesEUR = history.EUR.slice(-7); // Получаем последние 7 значений
  const lastWeekAverageUSD = lastWeekValuesUSD.reduce((sum, item) => sum + parseFloat(item.val), 0) / 7;
  const lastWeekAverageCNY = lastWeekValuesCNY.reduce((sum, item) => sum + parseFloat(item.val), 0) / 7;
  const lastWeekAverageEUR = lastWeekValuesEUR.reduce((sum, item) => sum + parseFloat(item.val), 0) / 7;

  // Применяем среднее значение ко всем дням следующей недели
  const nextWeekStartDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(nextWeekStartDate.getTime() + i * 24 * 60 * 60 * 1000);
    const formattedDate = `Прогноз на след. неделю`
    
    forecast.USD.push({ date: formattedDate, val: lastWeekAverageUSD.toFixed(5) });
    forecast.CNY.push({ date: formattedDate, val: lastWeekAverageCNY.toFixed(5) });
    forecast.EUR.push({ date: formattedDate, val: lastWeekAverageEUR.toFixed(5) });
  }

  return forecast;
};
