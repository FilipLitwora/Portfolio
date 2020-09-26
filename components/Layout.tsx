import { ReactElement } from "react";
import Head from "next/head";

interface Props {
  title: string;
  children: ReactElement | ReactElement[];
}

export const Layout = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>{children}</div>
  </>
);
