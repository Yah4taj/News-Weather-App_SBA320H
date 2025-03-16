

* HTML, Javascript, CSS, React
** I created a React web application project that displays NYC current weather ( obtained from Accuweather API) and current TriState news (obtained from NewsData API). The approach I took was to create three pages utilizing routes (weather, news and main) and set one component for the Navbar to display the News and Weather links. 
***
**** Initially, I wanted to display the weather for the top 50 cities and the national news. However, the location key and parameter of top 50 cities did not yield the desired data thus I opted to streamline data to NYC weather. This change informed my decision to remain in alignment nfor the news page thus the reason for Tristate news data.








# React + Vite


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
