import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <title>Coding Courses in Malayalam| Dialect India</title>
        <Head>
          <link rel="shortcut icon" href="/icons/favic.png" />
          <meta
            name="description"
            content=" Learn coding courses in Malayalam with guaranteed placements. Get programming expertise from expert professionals.  "
          ></meta>
          <meta
            name="keywords"
            content="Python course in Malayalam, Python online course in Malayalam, python training in malayalam, python malayalam online courses, learn python in malayalam, python online training in malayalam, python malayalam online certifications, python programming course in malayalam
coding courses in malayalam, flutter course in Malayalam, flutter online course in Malayalam, flutter training in malayalam, flutter malayalam online courses, learn flutter in malayalam, flutter online training in malayalam, flutter malayalam online certifications, react js course in Malayalam, react js online course in Malayalam, react js training in malayalam, react js malayalam online courses, learn react js in malayalam, react js online training in malayalam, react js malayalam online certifications"
          ></meta>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-2DH42TRLNP"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-2DH42TRLNP');
        `}
          </Script>
          <Script
            strategy="afterInteractive"
            id="trackingcode"
            dangerouslySetInnerHTML={{
              __html: `
            (function() {
              window.__insp = window.__insp || [];
              __insp.push(['wid', 777699708]);
              var ldinsp = function(){
              if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=777699708&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
              setTimeout(ldinsp, 0);
              })();

            `,
            }}
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
