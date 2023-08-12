import { Html, Head, Main, NextScript } from "next/document";
const newrelic = require("newrelic");

export default function Document() {
  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
  });
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="google-site-verification"
          content="dWVRIzh9U4frx8tVMDJclN8BFod_WyilpkSHrMUCugU"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
