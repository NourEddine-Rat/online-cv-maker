const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why is it better than a resume template?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          Online CV Maker saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What makes Online CV Maker different from other resume builders?",
    answer: (
      <>
        <p>
          There are some great free resume builders out there. However, Online CV Maker
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. Designed for ATS compatibility and best practices.
          </span>
          <br />
          Online CV Maker is designed with applicant tracking systems in mind and follows
          proven best practices. It excludes options that could cause issues,
          like profile pictures. It focuses on core sections — profile, work
          experience, education, and skills — while using a clean single-column
          layout that ATS systems parse accurately.
        </p>
        <p>
          <span className="font-semibold">
            2. Complete privacy — your data never leaves your device.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, Online CV Maker believes that resume data should
          remain private and accessible only on your local machine. No sign up
          is required, and all data is stored in your browser.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Is Online CV Maker really free?",
    answer: (
      <p>
        Yes, 100%! Online CV Maker is completely free to use with no hidden costs,
        premium tiers, or watermarks. We believe everyone should have access to
        professional resume design tools. You can create, edit, and download
        as many resumes as you want without any limitations.
      </p>
    ),
  },
  {
    question: "Q4. How does the resume parser work?",
    answer: (
      <p>
        The resume parser analyzes your existing PDF resume and extracts
        key information like your name, email, work experience, education,
        and skills. It uses a feature scoring system that evaluates text items
        based on position, formatting (like bold text), and pattern matching
        (like email and phone regex). This helps you understand how well
        ATS systems can read your resume and identifies areas for improvement.
      </p>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-zinc-200 lg:mt-4 lg:px-2">
      <h2 className="text-center text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 divide-y divide-zinc-200">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-8">
            <h3 className="text-lg font-semibold leading-7 text-zinc-900">{question}</h3>
            <div className="mt-4 grid gap-3 leading-7 text-zinc-500 font-medium text-[1.05rem]">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
