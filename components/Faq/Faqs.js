import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Faqs.module.css";
export default function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "Do I need any qualifications to enroll for this course ? ",
      answer: "The course is open for anyone without any prior education in computer science. We recommend students who have finished any degree or in the final year of college to sign up for the course.",
    },
    {
      id: 2,
      open: false,
      question: " Will the course be online or offline ?",
      answer: `The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.`,
    },
    {
      id: 3,
      open: false,
      question: "How can I clear my doubts during the course ?",
      answer: `We have a dedicated team of developers who are always available to help students with any questions.`,
    },
    {
      id: 4,
      open: false,
      question: "Is there any financial support offered ?",
      answer: `Yes, we offer financial support to our students.`,
    },
  ]);

  function handleClick(id) {
    let temp = faqs.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setFaqs(temp);
  }

  return (
	<>
	{ <div id="faqs">
      <section className={`${styles["faqs"]} mt-[7.688rem]`}>
        {/* <div className={styles['tab-wrapper']}>
					<Tabs
						tabs={[
							{ title: 'General', value: 'general' },
							{ title: 'Learning', value: 'learning' },
							{ title: 'Payment', value: 'payment' },
						]}
						selected={tab}
						onClick={setTab}
					/>
				</div> */}
        <div className={styles["content"]}>
          {faqs.map((item) => (
            <Faq
              key={item.id}
              question={item.question}
              answer={item.answer}
              open={item.open}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </section>
    </div>}
	
	</>
    
  );
}

const faqAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
  },
  exit: {
    height: 0,
  },
};

function Faq({ question, answer, open, onClick }) {
  return (
    <div className={`${styles["faq"]} ${open ? styles["open"] : ""}`}>
      <div>
        <div className={styles["question"]}>{question}</div>
        <AnimatePresence>
          {open && (
            <motion.p
              variants={faqAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles["answer"]}
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className={styles["arrow-wrapper"]} onClick={onClick}>
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.5L9 9.5L17 1.5" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
