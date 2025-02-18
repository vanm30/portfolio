"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/dataMgr/store";

interface IReduxProvider {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: IReduxProvider) {
  return <Provider store={store}>{children}</Provider>;
}
