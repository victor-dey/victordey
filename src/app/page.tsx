export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
      <section className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Hello everyone!
        </h2>
        <p className="text-lg text-primary text-justify mb-4">
          My name is Victor Dey, and I'm a UI developer working at&nbsp;
          <span>
            <a
              className="link-base"
              href="https://www.precisely.com/"
              target="_blank"
            >
              Precisely
            </a>
          </span>
        </p>
        <p className="text-lg text-primary mb-4 text-justify">
          While most of my time is spent on Angular, this website is created on
          React and NextJS. UI technology is constantly growing, and I'm most
          eager to learn as much as I can fit time into.
        </p>
        <p className="text-lg text-primary text-justify">
          I also looove playing FIFA (I came fourth in an eSports competition),
          love cooking, and I fiddle around with Chess as much as I can.
        </p>
      </section>
    </main>
  );
}
