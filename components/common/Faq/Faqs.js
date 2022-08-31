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
      answer: `The course will be entirely online via the Dialect website. Students can access the course via the website and learn at their own pace. 
      `,
    },
    {
      id: 3,
      open: false,
      question: "How can I clear my doubts during the course ?",
      answer: `The students will be having access to senior developers via online video meetings to clear their doubts. Students can book sessions with the developers at any point during the course.`,
    },
    {
      id: 4,
      open: false,
      question: "Is there any financial support offered ?",
      answer: `Students who perform high in the eligibility tests are qualified for financial assistance from Dialect. `,
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
      <section className={`${styles["faqs"]}`}>
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
export  function FaqPageQuestions() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "Do I need any qualifications to enroll for this course ?",
      answer: "The course is open for anyone without any prior education in computer science. We recommend students who have finished any degree or in the final year of college to sign up for the course.",
    },
    {
      id: 2,
      open: false,
      question: " Will the course be online or offline ?",
      answer: `The course will be entirely online via the Dialect website. Students can access the course via the website and learn at their own pace. 
      `,
    },
    {
      id: 3,
      open: false,
      question: "How can I clear my doubts during the course ?",
      answer: `The students will be having access to senior developers via online video meetings to clear their doubts. Students can book sessions with the developers at any point during the course.`,
    },
    {
      id: 4,
      open: false,
      question: "Is there any financial support offered ?",
      answer: `Students who perform high in the eligibility tests are qualified for financial assistance from Dialect. `,
    },
    {
      id: 5,
      open: false,
      question:"Will I continue to have access to the course even after I complete it ?",
      answer:" Yes, the course content will be accessible forever after the purchase.",

    },
    {
      id: 6,
      open: false,
      question:"Will I be able to get a Job after the course completion ?",
      answer:""

    },
    {
      id: 7,
      open: false,
      question:"What is the average salary of junior developers ? ",
      answer:""
    },
    {
      id: 8,
      open: false,
      question:"Which coding language is the best to learn ?",
      answer:""


    },
    {
      id: 9,
      open: false,
      question:"Is it possible to learn both front-end and back-end languages ?",
      answer:""
    },
    {
      id: 10,
      open: false,
      question:"What will be the duration I have to commit on a daily basis during the course ?",
      answer:""

    },
    {
      id: 11,
      open: false,
      question:"Do you provide placements ?",
      answer:""

    },
    {
      id: 12,
      open: false,
      question:"Do I have an option of doing the course offline ?",
      answer:""

    }
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
      <section className={`${styles["faqs"]}`}>
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
