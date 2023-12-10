import AnalyzeBlock from "@/widgets/AnalyzeBlock/AnalyzeBlock";
import NewsList from "@/widgets/NewsList/NewsList";
import { axiosInstance } from "@/shared/api/axios";
import { INews } from "@/widgets/NewsList/api/getNews";
import { today } from "@/shared/data/currencyToday";
import { currencyMonth } from "@/shared/data/currency";

type ICourse = {
  CNY: number;
  RUB: number;
  USD: number;
  EUR: number;
};

type IHistoryItem = {
  date: string;
  val: string;
};

export type IVariants = {
  USD: ICourse;
  CNY: ICourse;
  RUB: ICourse;
  EUR: ICourse;
};

export type IHistory = {
  USD: IHistoryItem[];
  CNY: IHistoryItem[];
  EUR: IHistoryItem[];
};

async function getData() {
  // const { data: USD } = await axiosInstance<ICourse>(`/values/?base=USD`);
  // const { data: CNY } = await axiosInstance<ICourse>(`/values/?base=CNY`);
  // const { data: RUB } = await axiosInstance<ICourse>(`/values/?base=RUB`);
  // const { data: EUR } = await axiosInstance<ICourse>(`/values/?base=EUR`);

  // const { data: historyValues } = await axiosInstance<IHistory>(
  //   `/history-values`
  // );
  return {
    variants: today,
    historyValues: currencyMonth,
  };
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="grid gap-20 grid-cols-2 h-full md-max:grid-cols-1">
      <AnalyzeBlock values={data.historyValues} variants={data.variants} />
      <div className="relative">
        <NewsList isMin />
      </div>
    </div>
  );
}
