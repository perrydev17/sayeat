import { Stack } from "expo-router";
import './globals.css';
import { ThemeProvider } from "./providers/ThemeProvider";

export default function RootLayout() {
  return <ThemeProvider><Stack /></ThemeProvider>;
}
