import React from "react";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/entities/antd/AntdRegistry";

import "@/shared/styles/globals.css";
import Layout from "@/widgets/Layout/Layout";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Анализ валют",
  description:
    "Построение информационной панели для анализа и прогнозирования изменений курса рубля доллара евро юани",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={clsx(inter.className, "bg-gray-100")}>
      <StyledComponentsRegistry>
        <Layout>{children}</Layout>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
