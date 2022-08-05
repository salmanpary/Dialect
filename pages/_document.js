import Document, { Html,Head, Main, NextScript } from "next/document";
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
          <title>Coding Courses in Malayalam| Zartek India</title>
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
