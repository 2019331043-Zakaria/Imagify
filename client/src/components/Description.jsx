import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn yoour imagination into visuals </p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center ">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg cursoor-pointer hover:scale-[1.02] transition-all duration-300"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4 ">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            eaque, accusantium labore culpa necessitatibus maiores tempore
            molestiae nam vero voluptates magni iusto! Animi inventore expedita,
            itaque vel modi quae fugit eos soluta sed rerum, repellendus nemo
            tempora! Omnis, vero?
          </p>

          <p className="text-gray-600">
            {" "}
            Distinctio placeat vel ullam asperiores ratione nihil voluptas ad
            unde autem! Rerum sit dignissimos ipsum, quis beatae consectetur
            molestias rem commodi reprehenderit suscipit mollitia eligendi.
            Facere ratione est tempore, aut a illo qui aliquid repellendus
            voluptate quod inventore! Blanditiis officia vero soluta, similique
            quisquam et quos quasi recusandae, quod harum aut temporibus nemo ad
            rem eum quia. A, labore. Repudiandae, delectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description
