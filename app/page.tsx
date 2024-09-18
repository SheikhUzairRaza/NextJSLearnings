import { Navbar } from "../components/navbar";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-center mt-10 font-medium text-2xl">
        Currently You Are In Home Page
      </div>
      <ul>
      <li>
      <div className="nextjs-content px-10 mt-10">
          <h1>
            <b>
              <u>Next.js Defintion </u> :
            </b>
          </h1>
          <p>
            Next.js is an open-source framework built on top of the React
            library, designed for developing web applications and websites. It
            supports <b>Server-Side Rendering (SSR)</b>, where pages are
            generated on the server and sent to the user ready-made, improving
            load times and SEO. It also features{" "}
            <b>Static Site Generation (SSG)</b>, which pre-generates pages at
            build time, ensuring fast-loading content for users. Next.js
            provides <b>API Routes </b> for creating backend functionality
            without needing a separate server. Its <b>File-Based Routing</b>{" "}
            system automatically and simply handles routing, with each file in
            the pages directory representing a route. The framework includes{" "}
            <b>Automatic Code Splitting</b>, dividing page code into smaller
            chunks to reduce initial load time. <b>Hot Module Replacement</b>{" "}
            allows for immediate reflection of changes during development
            without reloading the page. <b>Built-In CSS</b> and{" "}
            <b>Sass Support</b> facilitates direct importing and use of CSS and
            Sass files. Lastly, <b>Image Optimization</b> automatically
            optimizes images, leading to faster page loads and reduced bandwidth
            usage.
          </p>
        </div>
      </li>
        <li>
          <div className="pagetsx-def mt-4 pl-10">
            <h1>
              <b>
                <u>page.tsx Defintion </u> :
              </b>
            </h1>
            <p>
              page.tsx is a TypeScript file in a Next.js application that
              defines a React component representing a specific page of the
              application.
            </p>
          </div>
        </li>
        <li>
          <div className="routing-def mt-4 pl-10">
          <h1>
              <b>
                <u>Routing Defintion </u> :
              </b>
            </h1>
            <p>Routing is the mechanism by which requests (as specified by a URL and HTTP method) are routed to the code that handles them</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
