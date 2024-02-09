import React, { useState } from "react";
import data from "./assets/data.json";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHadith = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.hadiths.length);
  };

  const prevHadith = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.hadiths.length) % data.hadiths.length
    );
  };

  return (
    <section
      className="text-black body-font relative px-5 md:px-10 min-w-[360px] "
      style={{
        fontFamily: " Arapey, serif",
      }}
    >
      <p className="text-center text-gray-700">
        It's important to acknowledge that there may be potential issues and
        mistakes in these Ahadees. This website was created for the purpose of
        practicing development skills and may not provide accurate or verified
        information. May Allah forgive us for any shortcomings. For precise
        references and further verification, I recommend referring to{" "}
        <a
          href="https://sunnah.com/bukhari"
          alt="Sunnah.com"
          className="text-black hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          sunnah.com
        </a>
        .
      </p>

      <div className="flex flex-col items-center mt-10">
        <h1
          className="text-5xl text-gray-700 text-center font-bold mb-5 md:mb-10 w-full md:w-auto"
          style={{
            fontFamily: "Amiri Quran, serif",
            position: "sticky",
            bottom: 10,
            zIndex: 1000,
          }}
        >
          ﷽
        </h1>
        <div className="flex items-center justify-between mt-4 tracking-wide	">
          <button
            onClick={prevHadith}
            className="inline-flex bg-gradient-to-br from-amber-900 to-yellow-800 hover:bg-gradient-to-bl items-center justify-center px-4 py-2.5 text-base 
          font-medium text-center text-gray-200 rounded-xl w-30 focus:ring-1 focus:ring-amber-900 ml-2 md:ml-5 transition duration-300"
          >
            Previous
          </button>
          <h3 className="mr-10 font-semibold text-lg ml-10">
            {data.metadata.english.title}
          </h3>
          <h3 className="font-semibold text-lg mr-10">
            {data.hadiths[currentIndex].idInBook}/{data.metadata.length}
          </h3>
          <button
            onClick={nextHadith}
            className="inline-flex bg-gradient-to-br from-amber-900 to-yellow-800 hover:bg-gradient-to-bl items-center justify-center px-4 py-2.5 text-base 
          font-medium text-center text-gray-200 rounded-xl w-30 focus:ring-1 focus:ring-amber-900 mr-2 md:ml-5 transition duration-300"
          >
            Next
          </button>
        </div>

        <div
          className="text-justify mt-5 md:mt-10 rounded-lg shadow-lg"
          style={{ backgroundColor: "rgb(129, 91, 91)" }}
        >
          <div className="flex flex-col md:flex-row p-4 mb-4 md:mb-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 md:mr-2">
              <p>Narrator: {data.hadiths[currentIndex].english.narrator}</p>
              <p>Reference: {data.metadata.english.title}</p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <p>
                Chapter:{" "}
                {
                  data.chapters.find(
                    (chapter) =>
                      chapter.id === data.hadiths[currentIndex].chapterId
                  ).english
                }
              </p>
              <p>
                Book {data.hadiths[currentIndex].bookId}, Hadith{" "}
                {data.hadiths[currentIndex].idInBook}
              </p>
            </div>
          </div>
          <div className="text-gray-800 text-lg flex flex-col md:flex-row mb-4 md:mb-8 p-4">
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 md:mr-2">
              <p className="pb-2">English:</p>
              <p>{data.hadiths[currentIndex].english.text}</p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <p className="pb-2">Arabic: </p>
              <p>{data.hadiths[currentIndex].arabic}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
