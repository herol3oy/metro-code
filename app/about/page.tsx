import Link from 'next/link'

const AboutPage = () => (
  <article className="flex flex-col gap-5">
    <p>
      Hello! My name is Hamed, and I am a self-taught developer with experience
      in technologies such as{' '}
      <span className="font-bold">React, Next.js, Angular and TypeScript.</span>{' '}
      As a Civil Engineer who transitioned into the world of development, I have
      applied my profound engineering background to various professional and
      personal projects. My path to becoming a developer has been the best part
      of my career, making me eager to learn every day, improve myself, and
      create attractive solutions.
    </p>
    <p>
      There are different things that I do when I am not coding! From creating
      stop-motions to play ping pong! I also like to watch documentries. I am
      also a couchsurfer and a lot of time I spent time with my guests (or when
      I am traveling with my hosts). One of my favorite book that I have been
      introduced to read once I landed in Poland was Shah of Shahs by Ryszard
      Kapuściński.
    </p>
    <p>
      In case you want to contact me please refer to my{' '}
      <Link
        className="font-bold transition-all duration-300 hover:underline"
        href="https://github.com/herol3oy/"
        target="_blank"
      >
        Github
      </Link>
      <Link
        className="font-bold transition-all duration-300 hover:underline"
        href="https://www.linkedin.com/in/hamed-sedighi"
        target="_blank"
      >
        , Linkedin
      </Link>
      {` `} or my {` `}
      <Link
        className="font-bold transition-all duration-300 hover:underline"
        href="https://github.com/herol3oy/cv/blob/main/Hamed_Sedighi_Resume.pdf"
        target="_blank"
      >
        CV
      </Link>
    </p>
  </article>
)

export default AboutPage
