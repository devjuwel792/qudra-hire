import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./index";

/** Typed version of useDispatch */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Typed version of useSelector */
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);
