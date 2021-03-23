import Header from "../components/Header";

function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="section section-editorial-header learn">
          <div className="page">
            <div className="section-main">
              <h1>Ideje za progress bar / content loader</h1>
              <h2>4 verzije</h2>
            </div>
          </div>
        </section>
        <div id="container">
          <div className="container">
            <h1 style={{ textAlign: "center", lineHeight: "50px" }}>
              V primeru, da bi vam bila všeč nekatera od idej bi le to <br />
              poustvaril in polepšal s knjižnico{" "}
              <a href="https://www.framer.com/api/motion/">framer motion</a>, ki
              je namenjena animacijam in zelo razširjena.
            </h1>
            <iframe
              width="100%"
              height="300"
              src="//jsfiddle.net/v9p8zsLa/1/embedded/result/dark/"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
