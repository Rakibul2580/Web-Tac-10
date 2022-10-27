import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Why should you learn web development?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Web development has a number of pros: High earning potential,
                opportunity for growth, and flexibility are usually top of mind
                for most who get into the industry. Some of the challenges for
                people who pursue web development is the competitive nature of
                the job market.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What programming languages should you learn for web development?
            </summary>
            <div className="px-4 pb-4">
              <p>
                There are a lot of options out there for web development, so it
                can be hard to determine what languages you should try to pick
                up. There are a few languages that will almost always be
                relevant for web development, like HTML and CSS. However, your
                specific situation will determine the languages you learn best.
                For instance, maybe you are interested in building an app using
                the current popular framework (e.g. React, Backbone). If that's
                the case, you'll want to learn Javascript and possibly the
                framework language itself. If you are interested in web
                development in general, you should consider learning Javascript,
                HTML, and CSS. These three languages are the building blocks of
                the web and are used in almost every website.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Is web development course easy?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                While learning the foundational skills to become a Web Developer
                is relatively straightforward, becoming a good Web Developer can
                be more challenging, requiring ongoing learning and effort over
                years.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
