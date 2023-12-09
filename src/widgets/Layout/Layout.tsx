import theme from "@/entities/antd/theme";
import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Block from "@/shared/ui/Block/Block";
import { format } from "date-fns";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ConfigProvider theme={theme}>
      <div className="p-20 flex w-full gap-20 flex-col fixed bottom-0 top-0 right-0 left-0 md-max:block md-max:relative">
        <Header />
        <main className="flex-grow bg">{children}</main>
        <footer className="flex gap-20 justify-end text-gray-500">
          <Block>
            © {format(new Date(Date.now()), "yyyy")} Powered by by
            SerafimKremnev
          </Block>
        </footer>
      </div>
    </ConfigProvider>
  );
}
