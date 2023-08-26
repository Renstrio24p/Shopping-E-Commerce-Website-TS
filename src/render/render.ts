
import { MainRoute } from "../routes/main.router";
import UniqueHash from "../security/hashes";
import Footer from "../ts/Footer";
import Navbar from "../ts/Navbar";

export default function Render(start: HTMLElement) {
  // Get Render's ID
 
  const Nav = start.querySelector('#navbar') as HTMLDivElement | null;
  const Foot = start.querySelector('#footer') as HTMLDivElement | null;

  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {
    
  });

  // Render the JS Component

  {Nav && Navbar(Nav)}
  {Foot && Footer(Foot)}

  // Route
  MainRoute(start);
}
