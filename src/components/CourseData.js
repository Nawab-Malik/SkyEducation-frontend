// courseData.js

// Helper function to get relevant course images from assets for course cards
const getCourseImage = (category, number) => {
  // Handle different file extensions based on category
  try {
    if (category === "seg") {
      if (number === 3) {
        return require(`../Assests/${category}${number}.avif`);
      } else {
        return require(`../Assests/${category}${number}.jpg`);
      }
    } else if (category === "persons") {
      return require(`../Assests/${category}${number}.avif`);
    } else if (category === "proqual") {
      return require(`../Assests/${category}${number}.avif`);
    } else if (category === "sqa") {
      return require(`../Assests/${category}${number}.jpg`);
    } else if (category === "icq") {
      if (number === 4) {
        return require(`../Assests/${category}${number}.webp`);
      } else {
        return require(`../Assests/${category}${number}.avif`);
      }
    } else if (category === "vtct") {
      if (number === 10 || number === 13 || number === 20 || number === 22) {
        return require(`../Assests/${category}${number}.jpg`);
      } else {
        return require(`../Assests/${category}${number}.avif`);
      }
    }
  } catch (error) {
    console.warn(`Image not found: ${category}${number}`, error);
    return require("../Assests/logo00.png"); // Fallback to logo
  }

  return require("../Assests/logo00.png"); // Default fallback
};

const courseData = {
  ALL: [
    // ICQ - Education & Training Courses
    {
      id: 2,
      title: "Level 3 Award in Education & Training",
      desc: "This Level 3 Award in Education & Training is designed for individuals who want to enter the teaching profession or enhance their existing training capabilities. The course provides comprehensive coverage of fundamental teaching principles, including understanding learner needs, planning effective sessions, and delivering engaging educational content. Participants will explore diverse teaching methodologies, assessment techniques, and classroom management strategies. The program emphasizes the importance of inclusive education, professional ethics, and continuous professional development. Graduates will gain the skills necessary to design, deliver, and evaluate training sessions across various educational settings, from corporate training environments to adult education centers.",
      img: getCourseImage("icq", 1),
    },
    {
      id: 3,
      title: "Level 3 Certificate in Assessing Vocational Achievement",
      desc: "The Level 3 Certificate in Assessing Vocational Achievement is a comprehensive qualification that prepares individuals to become competent vocational assessors across diverse industry sectors. This course covers the complete assessment cycle, from initial planning and preparation through to final evaluation and feedback delivery. Students will master various assessment methods including observation, questioning, professional discussions, and portfolio reviews. The program emphasizes fair, valid, and reliable assessment practices while ensuring compliance with awarding body requirements. Participants will develop expertise in supporting learners through their qualification journey, maintaining accurate records, and contributing to quality assurance processes within their organizations.",
      img: getCourseImage("icq", 2),
    },
    {
      id: 4,
      title: "Level 3 Award in Assessing Competence at Work",
      desc: "This Level 3 Award in Assessing Competence at Work focuses specifically on developing the skills required to assess occupational competence in real workplace environments. The course provides in-depth training on competency-based assessment principles, enabling participants to evaluate whether workers can perform their job roles to the required standards. Students will learn to design assessment plans, conduct workplace observations, gather evidence of competence, and provide constructive feedback to support professional development. The program covers legal and ethical considerations, health and safety requirements, and the importance of maintaining professional relationships with candidates throughout the assessment process.",
      img: getCourseImage("icq", 4),
    },

    // SEG - Automotive & MOT Courses
    {
      id: 5,
      title: "Level 3 MOT Management",
      desc: "The Level 3 MOT Management course at Sky Education is a comprehensive program designed for automotive professionals seeking to advance into management roles within MOT testing centers. This qualification provides detailed knowledge of MOT testing procedures, quality management systems, staff supervision, and regulatory compliance requirements. Students will learn about business operations, customer service management, equipment maintenance, and the implementation of effective quality control measures. The course covers legal responsibilities, health and safety protocols, and the management of testing documentation and records. Graduates will be prepared to lead MOT testing facilities, ensuring high standards of service delivery while maintaining strict adherence to DVSA regulations and industry best practices.",
      img: getCourseImage("seg", 1),
    },
    {
      id: 6,
      title: "MOT Class 1 & 2",
      desc: "The MOT Class 1 & 2 course at Sky Education provides comprehensive training for individuals seeking to become certified MOT testers for motorcycles and smaller vehicles. This intensive program covers all aspects of MOT testing procedures, including pre-test preparations, systematic vehicle inspections, and accurate fault identification. Students will gain hands-on experience with testing equipment, learn to interpret DVSA guidelines, and understand the legal framework governing MOT testing. The course emphasizes practical skills development, safety protocols, and the importance of maintaining testing integrity. Upon successful completion, participants will be qualified to conduct official MOT tests on Class 1 (motorcycles) and Class 2 (vehicles up to 3,000kg) vehicles, opening opportunities for employment in garages, testing stations, and automotive service centers.",
      img: getCourseImage("seg", 2),
    },
    {
      id: 7,
      title: "Level 3 Technician",
      desc: "The Level 3 Technician course at Sky Education is an advanced qualification that prepares students for senior technical positions in the automotive industry. This comprehensive program combines theoretical knowledge with extensive practical training, covering modern vehicle systems, diagnostic techniques, and repair methodologies. Students will master electronic systems, engine management, transmission systems, and emerging automotive technologies including hybrid and electric vehicles. The course emphasizes problem-solving skills, critical thinking, and the ability to work independently on complex technical challenges. Participants will develop expertise in using sophisticated diagnostic equipment, interpreting technical data, and implementing effective repair solutions. This qualification provides a solid foundation for career advancement in automotive engineering, specialist repair services, and technical consultancy roles.",
      img: getCourseImage("seg", 3),
    },
    {
      id: 8,
      title: "MOT Class 4 & 7",
      desc: "The MOT Class 4 & 7 course at Sky Education provides specialized training for automotive professionals seeking certification to test standard passenger vehicles and commercial vehicles up to 3,500kg. This comprehensive program covers the complete MOT testing process, from initial vehicle reception through to final documentation completion. Students will learn detailed inspection procedures for engines, braking systems, steering, suspension, lighting, and emissions testing. The course includes extensive practical training with real vehicles, enabling participants to develop confidence in identifying defects and making accurate pass/fail decisions. Emphasis is placed on understanding DVSA requirements, maintaining testing standards, and ensuring customer safety. Graduates will be qualified to work in MOT testing stations, garages, and automotive service centers, contributing to road safety through thorough and professional vehicle inspections.",
      img: getCourseImage("seg", 4),
    },

    // PERSONS - English & Math Courses (English courses first with IDs 36-40, then Maths with IDs 31-35)
    {
      id: 40,
      title: "Entry Level 1 English",
      desc: "The Entry Level 1 English course lays the foundation for effective communication by introducing essential English speaking and writing skills in a supportive, encouraging learning environment. This beginner-level course is designed for learners who are new to English or returning to formal education after an extended break. Students will learn basic vocabulary, simple sentence structures, fundamental grammar concepts, and essential communication skills for everyday situations. The course covers basic reading skills, simple writing tasks, clear speaking practice, and listening for familiar information. Learning activities are practical and engaging, focusing on immediate communication needs such as introductions, basic conversations, simple instructions, and everyday vocabulary. Individual support and differentiated teaching methods ensure that every student can progress at their own pace while building confidence in English communication.",
      img: getCourseImage("persons", 10),
    },
    {
      id: 39,
      title: "Entry Level 2 English",
      desc: "The Entry Level 2 English course focuses on enhancing basic communication skills through improved vocabulary development and structured sentence formation, building upon foundational English knowledge. Students will work on expanding their word knowledge, understanding basic grammar rules, and developing more complex communication abilities. The course covers reading simple texts, writing basic sentences and paragraphs, speaking clearly in familiar situations, and listening to understand key information. Learning activities include vocabulary building exercises, guided writing tasks, structured conversation practice, and reading comprehension activities using accessible texts. The supportive learning environment encourages students to practice their English skills confidently, with emphasis on practical communication that can be immediately applied in daily life situations.",
      img: getCourseImage("persons", 9),
    },
    {
      id: 38,
      title: "Entry Level 3 English",
      desc: "The Entry Level 3 English course prepares students for practical usage of English, focusing on developing skills to engage effectively in real-world communication tasks and social interactions. This course builds upon basic English skills, introducing more complex language structures, extended vocabulary, and varied communication scenarios. Students will practice reading different types of texts, writing for various purposes, speaking in different situations, and listening for specific information. The program emphasizes functional English skills that are directly applicable to everyday life, including completing forms, understanding instructions, participating in discussions, and expressing opinions clearly. Learning activities are designed to be engaging and relevant, helping students develop confidence in using English in community, workplace, and educational settings.",
      img: getCourseImage("persons", 8),
    },
    {
      id: 37,
      title: "Entry Level 1 English",
      desc: "The Entry Level 1 English course helps students refine their command of English, developing independent communication skills suitable for both professional and personal contexts. This intermediate-level program focuses on improving written and spoken English through structured learning activities, grammar development, and vocabulary expansion. Students will work with different text types, practice formal and informal writing styles, and develop confidence in speaking and listening skills. The course covers essential communication skills including letter writing, report preparation, reading comprehension, and verbal communication techniques. Emphasis is placed on developing critical thinking skills, understanding different writing purposes, and building the language competencies needed for further education, employment opportunities, and effective participation in community life.",
      img: getCourseImage("persons", 7),
    },
    {
      id: 36,
      title: "Entry Level 2 English",
      desc: "The Entry Level 2 English course is designed to develop fluent communication skills suitable for diverse personal, educational, and professional contexts, significantly enhancing both spoken and written English capabilities. This comprehensive program covers advanced grammar structures, vocabulary expansion, critical reading skills, and sophisticated writing techniques. Students will engage with various text types including literature, reports, articles, and creative writing, developing analytical and interpretative skills. The course emphasizes effective communication in different contexts, presentation skills, and the ability to adapt language and style to suit specific audiences and purposes. Practical activities include essay writing, oral presentations, group discussions, and creative projects that build confidence and competency in English language use at an advanced level.",
      img: getCourseImage("persons", 6),
    },

    {
      id: 35,
      title: "Entry Level 1 Maths",
      desc: "The Entry Level 1 Maths course provides a supportive introduction to basic mathematical concepts and practical skills essential for daily life activities, designed specifically for learners who are beginning their mathematical journey or returning to education after a break. This foundational course covers fundamental number work, basic counting, simple calculations, recognition of shapes, and introductory measurement concepts through engaging, practical activities. Students will work with money calculations, time concepts, basic data collection, and simple problem-solving in familiar contexts. The learning environment is designed to be encouraging and non-threatening, with emphasis placed on building confidence, developing mathematical language, and recognizing mathematical concepts in everyday situations. Individual support and differentiated learning approaches ensure that every student can achieve personal success and progress.",
      img: getCourseImage("persons", 5),
    },
    {
      id: 34,
      title: "Entry Level 2 Maths",
      desc: "The Entry Level 2 Maths course builds upon foundational mathematical concepts, introducing new topics including fractions, basic measurements, and elementary problem-solving techniques for everyday applications. This supportive learning environment helps students develop mathematical confidence while working with practical scenarios that demonstrate the relevance of mathematics in daily life. Students will explore number relationships, simple calculations, basic shapes and space concepts, and introductory data handling through hands-on activities and real-world examples. The course focuses on developing mathematical vocabulary, understanding numerical relationships, and building the foundation skills necessary for progression to higher levels of mathematical study. Teaching methods emphasize practical application, visual learning aids, and collaborative problem-solving to ensure all students can achieve success.",
      img: getCourseImage("persons", 4),
    },
    {
      id: 33,
      title: "Entry Level 3 Maths",
      desc: "The Entry Level 3 Maths course is designed to develop students' ability to handle mathematical information and concepts independently, with a strong focus on practical applications in everyday life and work situations. This course bridges the gap between basic numeracy and more advanced mathematical study, providing learners with the confidence and skills needed to tackle mathematical challenges. Students will work with number operations, basic geometry, data handling, and measurement concepts through engaging, real-world contexts. The program emphasizes building mathematical confidence, developing logical thinking skills, and understanding how mathematics applies to daily activities such as budgeting, shopping, cooking, and workplace tasks. Assessment methods are designed to be supportive and encouraging, helping students recognize their mathematical achievements and progress.",
      img: getCourseImage("persons", 3),
    },

    {
      id: 32,
      title: "Entry Level 1 Maths",
      desc: "The Entry Level 1 Maths course provides students with a thorough understanding of fundamental mathematical principles, focusing on basic algebra, proportions, statistics, and practical mathematical applications. This intermediate-level program builds upon entry-level mathematics, introducing more complex concepts while maintaining accessibility for learners developing their mathematical confidence. Students will work with fractions, decimals, percentages, basic algebraic expressions, and introductory statistical concepts. The course emphasizes practical applications of mathematics in everyday situations, workplace contexts, and preparation for further mathematical study. Learning activities include problem-solving exercises, data handling projects, and real-world mathematical scenarios that demonstrate the relevance and importance of mathematical skills in personal and professional life.",
      img: getCourseImage("persons", 2),
    },
    {
      id: 31,
      title: "Entry Level 2 Maths",
      desc: "The Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage("persons", 2),
    },

    // PRO QUAL - Construction Courses
    {
      id: 41,
      title: "PROQUAL Level 2 Award in Site Security",
      desc: "The PROQUAL Level 2 Award in Site Security provides students with a comprehensive foundation in modern security principles, risk assessment methodologies, and workplace safety protocols essential for professional security operations. This course covers fundamental security concepts including threat identification, access control systems, surveillance techniques, and emergency response procedures. Students will learn about legal frameworks governing security work, professional conduct standards, and the importance of maintaining confidentiality and integrity. The program includes practical training in security equipment usage, report writing, communication skills, and conflict resolution techniques. Emphasis is placed on understanding security risks in different environments, developing situational awareness, and implementing appropriate security measures to protect people, property, and assets.",
      img: getCourseImage("proqual", 9),
    },
    {
      id: 42,
      title: "PROQUAL Level 2 First Aid",
      desc: "The PROQUAL Level 2 First Aid course provides comprehensive training in essential life-saving skills, equipping participants with the knowledge and confidence to respond effectively to medical emergencies and accident situations. This intensive program covers CPR techniques, wound management, shock treatment, and the management of various medical conditions including heart attacks, strokes, and breathing difficulties. Students will learn to assess emergency situations, prioritize treatment, and provide appropriate care while awaiting professional medical assistance. The course includes hands-on practical training with mannequins, role-playing scenarios, and the use of first aid equipment. Participants will develop skills in patient assessment, communication with emergency services, and maintaining accurate records of treatment provided. This qualification is essential for workplace first aiders and anyone seeking to develop potentially life-saving skills.",
      img: getCourseImage("proqual", 10),
    },
    {
      id: 43,
      title: "PROQUAL Level 1 Health & Safety in Construction",
      desc: "The PROQUAL Level 1 Health & Safety in Construction course provides a comprehensive introduction to essential health and safety practices, regulations, and responsibilities within the construction sector. This foundational program covers key topics including hazard identification, risk assessment procedures, personal protective equipment usage, and safe working practices on construction sites. Students will learn about legal requirements, accident prevention strategies, emergency procedures, and the importance of maintaining a safety-first culture in construction environments. The course includes practical elements such as site safety inspections, safety equipment demonstrations, and case study analyses of construction accidents. Emphasis is placed on developing safety awareness, understanding regulatory compliance requirements, and building the knowledge foundation necessary for safe participation in construction activities.",
      img: getCourseImage("proqual", 4),
    },
    {
      id: 63,
      title:
        "Level 4 Award External Quality Assurance of Assessment Process and Practice",
      desc: "This Level 4 Award in External Quality Assurance provides comprehensive training for professionals responsible for maintaining assessment quality across multiple organizations and assessment centers. The course covers external quality assurance systems, cross-organizational assessment monitoring, standardization processes, and regulatory compliance requirements. Students will develop skills in conducting external quality reviews, supporting assessment center development, ensuring assessment validity across different contexts, and implementing effective external quality management systems.",
      img: getCourseImage("proqual", 5),
    },
    {
      id: 64,
      title:
        "Level 4 Award in the Internal Quality Assurance of Assessment Process + Practice",
      desc: "This Level 4 Award in Internal Quality Assurance provides specialized training for professionals responsible for maintaining and improving assessment quality within educational and training organizations. The course covers internal quality assurance frameworks, assessment verification procedures, team leadership, and continuous improvement strategies. Students will gain expertise in supporting assessor development, ensuring assessment reliability, and implementing effective internal quality management approaches.",
      img: getCourseImage("proqual", 6),
    },
    {
      id: 65,
      title:
        "Level 4 Award in Understanding the External Quality Assurance Process and Practice",
      desc: "This Level 4 Award provides foundational understanding of external quality assurance principles and practices in assessment environments. The course covers external quality assurance frameworks, regulatory requirements, compliance procedures, and best practice methodologies. Students will gain knowledge of external verification processes, inter-organizational quality standards, and effective approaches to maintaining assessment quality across different educational and training contexts.",
      img: getCourseImage("proqual", 7),
    },
    {
      id: 66,
      title:
        "Level 4 Certificate in Leading the Internal Quality Assurance of Assessment Processes and Practice",
      desc: "This Level 4 Certificate provides advanced training for senior professionals leading internal quality assurance teams and processes within educational organizations. The course covers strategic quality management, team leadership, organizational development, and advanced quality assurance methodologies. Students will develop expertise in leading quality improvement initiatives, managing assessment teams, and implementing organizational quality strategies that ensure excellence in assessment practices.",
      img: getCourseImage("proqual", 8),
    },

    // VTCT - ITEC ESOL Certificate Courses
    {
      id: 15,
      title:
        "ENTRY 1 A1 - ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "This foundational ITEC ESOL Certificate for Young Learners International provides essential English language skills for young students beginning their English learning journey. The course focuses on basic vocabulary, simple sentence structures, and fundamental communication skills appropriate for Entry Level 1 A1 standards. Students will develop confidence in speaking, listening, reading, and writing through engaging, age-appropriate activities and interactive learning methods. The program emphasizes practical English skills for everyday situations, building a solid foundation for further language development and academic success.",
      img: getCourseImage("vtct", 1),
    },
    {
      id: 16,
      title:
        "ENTRY 2 A2 - ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "This intermediate ITEC ESOL Certificate for Young Learners International builds upon foundational English skills, developing more complex language abilities at Entry Level 2 A2 standards. Students will expand their vocabulary, improve sentence construction, and enhance their communication skills across all four language areas. The course includes interactive exercises, group activities, and practical applications that help young learners gain confidence in using English in various contexts. This qualification prepares students for progression to higher levels of English language study.",
      img: getCourseImage("vtct", 2),
    },
    {
      id: 17,
      title:
        "ENTRY 3 B1 - ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "This advanced ITEC ESOL Certificate for Young Learners International develops sophisticated English language skills at Entry Level 3 B1 standards. Students will master complex grammar structures, extensive vocabulary, and advanced communication techniques across speaking, listening, reading, and writing. The course emphasizes critical thinking, analytical skills, and the ability to express complex ideas clearly and confidently. This qualification provides young learners with the English proficiency needed for academic success and future career opportunities.",
      img: getCourseImage("vtct", 3),
    },
    {
      id: 18,
      title: "ENTRY 1 A1 - ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "This comprehensive ITEC ESOL Certificate International provides fundamental English language training for international students at Entry Level 1 A1 standards. The course covers essential vocabulary, basic grammar structures, and core communication skills necessary for everyday English usage. Students will develop proficiency in all four language skills through structured learning activities, practical exercises, and interactive sessions. This qualification serves as an excellent starting point for international students seeking to improve their English language abilities for personal, academic, or professional purposes.",
      img: getCourseImage("vtct", 4),
    },
    {
      id: 19,
      title: "ENTRY 2 A2 - ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "This intermediate ITEC ESOL Certificate International builds upon basic English foundations, developing enhanced language competencies at Entry Level 2 A2 standards. Students will expand their vocabulary range, improve grammatical accuracy, and develop greater confidence in all four language skills. The course includes practical communication scenarios, structured writing exercises, and interactive speaking activities that prepare students for real-world English usage. This qualification provides the language foundation necessary for academic progression and professional development.",
      img: getCourseImage("vtct", 5),
    },
    {
      id: 20,
      title: "ENTRY 3 B1 - ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "This advanced ITEC ESOL Certificate International develops comprehensive English language proficiency at Entry Level 3 B1 standards. Students will master complex linguistic structures, extensive vocabulary, and sophisticated communication strategies across all language areas. The course emphasizes critical analysis, advanced writing techniques, and confident oral communication. This qualification prepares students for higher education, professional advancement, and effective participation in English-speaking environments.",
      img: getCourseImage("vtct", 6),
    },
    // {
    //   id: 21,
    //   title: "LEVEL 1 - ITEC ESOL CERTIFICATE INTERNATIONAL",
    //   desc: " This comprehensive ITEC ESOL Certificate International at Level 1 provides intermediate English language training for students seeking to advance their communication skills. The course covers intermediate grammar structures, expanded vocabulary development, and enhanced communication abilities across speaking, listening, reading, and writing. Students will engage with various text types, practice formal and informal communication styles, and develop the language competencies needed for further education and employment opportunities.",
    //   img: getCourseImage("vtct", 7),
    // },
    // {
    //   id: 22,
    //   title: "LEVEL 2 - ITEC ESOL CERTIFICATE INTERNATIONAL",
    //   desc: "This advanced ITEC ESOL Certificate International at Level 2 provides sophisticated English language training for students seeking high-level communication proficiency. The course covers complex grammatical structures, extensive vocabulary expansion, and advanced communication techniques. Students will develop critical thinking skills, analytical writing abilities, and confident presentation skills. This qualification prepares students for academic success, professional excellence, and leadership roles in English-speaking environments.",
    //   img: getCourseImage("vtct", 8),
    // },
    // {
    //   id: 23,
    //   title: "LEVEL 3 - ITEC ESOL CERTIFICATE INTERNATIONAL",
    //   desc: " This expert-level ITEC ESOL Certificate International at Level 3 provides the highest standard of English language training for students seeking professional and academic excellence. The course covers sophisticated linguistic analysis, advanced academic writing, and expert-level communication skills. Students will master complex language concepts, develop research and presentation capabilities, and achieve the language proficiency required for university study, professional leadership, and international career opportunities.",
    //   img: getCourseImage("vtct", 9),
    // },
    {
      id: 47,
      title: "LEVEL 1 B2 -ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: " This comprehensive ITEC ESOL Certificate International at Level 1 B2 provides upper-intermediate English language training for students seeking advanced communication proficiency. The course covers sophisticated grammar structures, extensive vocabulary development, and enhanced communication abilities across all four language skills. Students will engage with complex texts, develop academic writing skills, and build confidence in professional communication contexts.",
      img: getCourseImage("vtct", 11),
    },
    {
      id: 48,
      title: "LEVEL 2 C1 - ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: " This advanced ITEC ESOL Certificate International at Level 2 C1 provides high-level English language training for students seeking near-native proficiency. The course covers complex linguistic structures, advanced vocabulary expansion, and sophisticated communication techniques. Students will develop critical thinking skills, analytical writing abilities, and confident presentation skills for academic and professional excellence.",
      img: getCourseImage("vtct", 12),
    },
    {
      id: 49,
      title: "LEVEL 3 C2 - ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: " This expert-level ITEC ESOL Certificate International at Level 3 C2 provides the highest standard of English language proficiency for students seeking mastery-level communication skills. The course covers sophisticated linguistic analysis, advanced academic writing, and expert-level communication abilities. Students will achieve the language proficiency required for university study, professional leadership, and international career opportunities.",
      img: getCourseImage("vtct", 13),
    },
    {
      id: 50,
      title: "LEVEL 1 - FUNCTIONAL SKILLS ENGLISH",
      desc: " This comprehensive Functional Skills English at Level 1 provides intermediate English language training focusing on practical communication skills for everyday and workplace situations. The course covers reading comprehension, writing skills, speaking and listening abilities that are directly applicable to real-world contexts. Students will develop the language competencies needed for further education, employment opportunities, and effective participation in community life.",
      img: getCourseImage("vtct", 14),
    },
    {
      id: 51,
      title: "LEVEL 1 - FUNCTIONAL SKILLS MATHS",
      desc: "This advanced Functional Skills Maths at Level 1 provides comprehensive mathematical training focusing on practical problem-solving skills for everyday and workplace situations. The course covers numerical calculations, statistical analysis, algebraic manipulation, and geometric applications that are directly relevant to real-world contexts. Students will develop the mathematical competencies needed for further education, employment opportunities, and professional advancement.",
      img: getCourseImage("vtct", 15),
    },
    {
      id: 52,
      title: "LEVEL 2 - FUNCTIONAL SKILLS ENGLISH",
      desc: "This advanced Functional Skills English at Level 2 provides sophisticated communication training focusing on practical language skills for professional and academic contexts. The course covers advanced reading comprehension, complex writing tasks, confident speaking abilities, and critical listening skills. Students will develop the high-level language competencies needed for career advancement, further education, and leadership roles.",
      img: getCourseImage("vtct", 16),
    },
    {
      id: 53,
      title: "LEVEL 2 - FUNCTIONAL SKILLS MATHS",
      desc: "This advanced Functional Skills Maths at Level 2 provides comprehensive mathematical training focusing on practical problem-solving skills for professional and academic contexts. The course covers complex calculations, statistical analysis, algebraic problem-solving, and geometric applications. Students will develop the advanced mathematical competencies needed for career progression, higher education, and technical roles.",
      img: getCourseImage("vtct", 17),
    },
    {
      id: 54,
      title: "Award in Invigilating Remote Tests and Examinations",
      desc: "This specialized award provides comprehensive training for individuals seeking to become qualified invigilators for remote testing and examination environments. The course covers essential skills including digital platform management, remote monitoring techniques, security protocols, and student support procedures. Participants will learn about academic integrity, technical troubleshooting, and the unique challenges of online assessment environments. This qualification is essential for educational institutions, professional bodies, and organizations conducting remote examinations.",
      img: getCourseImage("vtct", 18),
    },

    // SQA - Taxi & Private Hire Courses
    {
      id: 44,
      title:
        "Level 2: Introduction to the Role of the Professional Taxi and Private Hire  (Wales)",
      desc: "The Level 2 SQA Introduction to the Role of the Professional Taxi and Private Hire  course introduces aspiring drivers to the comprehensive professional standards required in the passenger transport industry, with particular focus on safety protocols, regulatory compliance, and customer service excellence. This specialized program covers essential topics including local area knowledge, route planning, passenger safety procedures, and professional conduct standards. Students will learn about licensing requirements, vehicle maintenance responsibilities, fare calculation methods, and effective communication with diverse passengers. The course emphasizes the importance of providing exceptional customer service, managing difficult situations professionally, and maintaining high standards of personal and vehicle presentation. Practical elements include navigation skills, customer interaction scenarios, and understanding of accessibility requirements for passengers with special needs.",
      img: getCourseImage("sqa", 1),
    },
    {
      id: 45,
      title:
        "Level 5: Introduction to the Role of the Professional Taxi and Private Hire (Scotland)",
      desc: "The Level 5 SQA Introduction to the Role of the Professional Taxi and Private Hire  Role course provides advanced comprehensive knowledge for experienced drivers seeking to excel in the passenger transport sector, covering sophisticated customer care strategies, advanced safety protocols, and detailed industry regulations. This higher-level qualification explores complex aspects of professional driving including advanced route optimization, customer relationship management, business development principles, and leadership skills for those aspiring to supervisory or training roles. Students will develop expertise in handling challenging situations, providing specialized services for different passenger groups, and understanding the commercial aspects of the taxi and private hire industry. The course includes advanced communication techniques, conflict resolution strategies, and the development of professional networks within the transport industry.",
      img: getCourseImage("sqa", 2),
    },
    {
      id: 46,
      title:
        "BTEC Level 2 Introduction to the Role of the Professional Taxi and Private Hire (England)",
      desc: "This comprehensive iCQ BTEC Level 2 course provides an essential introduction to the professional standards and responsibilities required in the taxi and private hire industry across the United Kingdom. The program covers fundamental aspects of professional driving including customer service principles, industry regulations, safety protocols, and professional conduct standards. Students will gain knowledge of licensing requirements, vehicle maintenance basics, passenger interaction skills, and the legal framework governing taxi and private hire operations. The course emphasizes developing professional attitudes, understanding service quality expectations, and building confidence in providing safe, reliable transportation services. This qualification serves as an ideal starting point for individuals seeking to enter the passenger transport sector with a solid foundation of industry knowledge and professional competencies.",
      img: getCourseImage("icq", 1),
    },
    {
      id: 55,
      title: "Level 3 Award in Education and Training",
      desc: "This Level 3 Award in Education and Training provides comprehensive foundation training for individuals entering the education and training sector. The course covers essential teaching principles, learning theories, and practical training delivery methods. Students will develop skills in session planning, learner engagement, and basic assessment techniques. This qualification is ideal for new trainers, workplace mentors, and those seeking to develop their training capabilities in professional environments.",
      img: getCourseImage("icq", 5),
    },
    {
      id: 56,
      title: "Level 5 Diploma in Education and Training",
      desc: "This comprehensive Level 5 Diploma in Education and Training provides advanced qualification for experienced educators and training professionals. The course covers sophisticated teaching methodologies, curriculum development, educational leadership, and advanced assessment strategies. Students will master complex pedagogical approaches, research methods, and quality assurance processes essential for senior roles in education and training organizations.",
      img: getCourseImage("icq", 6),
    },
    {
      id: 57,
      title:
        "Level 3 Award in Education and Training (Further Education and Skills)",
      desc: "This specialized Level 3 Award in Education and Training for Further Education and Skills sector provides comprehensive training for teachers working in colleges, adult education, and vocational training environments. The course covers advanced teaching techniques, curriculum planning, student support strategies, and sector-specific regulatory requirements. Students will develop expertise in delivering education to diverse learner groups with varying educational backgrounds and career aspirations.",
      img: getCourseImage("icq", 7),
    },
    {
      id: 58,
      title: "Level 4 Certificate in Education and Training",
      desc: " This Level 4 Certificate in Education and Training provides intermediate-level qualification for developing education professionals. The course covers advanced teaching methods, assessment design, inclusive learning practices, and professional development planning. Students will enhance their pedagogical skills, develop critical reflection abilities, and gain competencies required for progression to higher-level teaching qualifications.",
      img: getCourseImage("icq", 8),
    },
    {
      id: 59,
      title: "Level 3 Award in Education and Training",
      desc: " This comprehensive Level 3 Award in Education and Training provides advanced qualification for professional educators seeking senior teaching roles. The course covers sophisticated pedagogical approaches, educational research, leadership in learning environments, and advanced assessment methodologies. Students will develop expertise in educational innovation, quality enhancement, and strategic curriculum development.",
      img: getCourseImage("icq", 9),
    },
    {
      id: 60,
      title: "Level 3 Award in Education and Training",
      desc: "This Level 3 Award in Education and Training provides comprehensive foundation training for individuals entering the education and training sector. The course covers essential teaching principles, learning theories, and practical training delivery methods. Students will develop skills in session planning, learner engagement, and basic assessment techniques. This qualification is ideal for new trainers, workplace mentors, and those seeking to develop their training capabilities in professional environments.",
      img: getCourseImage("icq", 10),
    },
    {
      id: 61,
      title:
        "Level 4 Award in Internal Quality Assurance of Assessment Processes and Practice",
      desc: "This Level 4 Award in Internal Quality Assurance provides comprehensive training for professionals responsible for maintaining assessment quality within educational organizations. The course covers quality assurance systems, assessment monitoring, standardization processes, and continuous improvement methodologies. Students will develop skills in supporting assessor development, ensuring assessment validity, and implementing effective quality management systems.",
      img: getCourseImage("icq", 11),
    },
    {
      id: 62,
      title:
        "Level 4 Award in Understanding the Internal Quality Assurance of Assessment Processes and Practice",
      desc: " This Level 4 Award provides foundational understanding of internal quality assurance principles and practices in assessment environments. The course covers quality assurance frameworks, assessment verification, team leadership, and continuous improvement strategies. Students will gain knowledge of regulatory requirements, best practice methodologies, and effective quality management approaches essential for educational quality assurance roles.",
      img: getCourseImage("icq", 12),
    },
  ],

  SEG: [
    {
      id: 1,
      title: "Level 3 MOT Management",
      desc: "The Level 3 MOT Management course at Sky Education is a comprehensive program designed for automotive professionals seeking to advance into management roles within MOT testing centers. This qualification provides detailed knowledge of MOT testing procedures, quality management systems, staff supervision, and regulatory compliance requirements. Students will learn about business operations, customer service management, equipment maintenance, and the implementation of effective quality control measures. The course covers legal responsibilities, health and safety protocols, and the management of testing documentation and records. Graduates will be prepared to lead MOT testing facilities, ensuring high standards of service delivery while maintaining strict adherence to DVSA regulations and industry best practices.",
      img: getCourseImage("seg", 1),
    },
    {
      id: 2,
      title: "MOT Class 1 & 2",
      desc: "The MOT Class 1 & 2 course at Sky Education provides comprehensive training for individuals seeking to become certified MOT testers for motorcycles and smaller vehicles. This intensive program covers all aspects of MOT testing procedures, including pre-test preparations, systematic vehicle inspections, and accurate fault identification. Students will gain hands-on experience with testing equipment, learn to interpret DVSA guidelines, and understand the legal framework governing MOT testing. The course emphasizes practical skills development, safety protocols, and the importance of maintaining testing integrity. Upon successful completion, participants will be qualified to conduct official MOT tests on Class 1 (motorcycles) and Class 2 (vehicles up to 3,000kg) vehicles, opening opportunities for employment in garages, testing stations, and automotive service centers.",
      img: getCourseImage("seg", 2),
    },
    {
      id: 3,
      title: "Level 3 Technician",
      desc: "The Level 3 Technician course at Sky Education is an advanced qualification that prepares students for senior technical positions in the automotive industry. This comprehensive program combines theoretical knowledge with extensive practical training, covering modern vehicle systems, diagnostic techniques, and repair methodologies. Students will master electronic systems, engine management, transmission systems, and emerging automotive technologies including hybrid and electric vehicles. The course emphasizes problem-solving skills, critical thinking, and the ability to work independently on complex technical challenges. Participants will develop expertise in using sophisticated diagnostic equipment, interpreting technical data, and implementing effective repair solutions. This qualification provides a solid foundation for career advancement in automotive engineering, specialist repair services, and technical consultancy roles.",
      img: getCourseImage("seg", 3),
    },
    {
      id: 4,
      title: "MOT Class 4 & 7",
      desc: "The MOT Class 4 & 7 course at Sky Education provides specialized training for automotive professionals seeking certification to test standard passenger vehicles and commercial vehicles up to 3,500kg. This comprehensive program covers the complete MOT testing process, from initial vehicle reception through to final documentation completion. Students will learn detailed inspection procedures for engines, braking systems, steering, suspension, lighting, and emissions testing. The course includes extensive practical training with real vehicles, enabling participants to develop confidence in identifying defects and making accurate pass/fail decisions. Emphasis is placed on understanding DVSA requirements, maintaining testing standards, and ensuring customer safety. Graduates will be qualified to work in MOT testing stations, garages, and automotive service centers, contributing to road safety through thorough and professional vehicle inspections.",
      img: getCourseImage("seg", 4),
    },
  ],

  PERSONS: [
    // English & Math Courses (Pearson courses first in hero order, then VTCT courses)
    {
      id: 5,
      title: "PEARSON Entry Level 1 English",
      desc: "The Entry Level 1 English course lays the foundation for effective communication by introducing essential English speaking and writing skills in a supportive, encouraging learning environment. This beginner-level course is designed for learners who are new to English or returning to formal education after an extended break. Students will learn basic vocabulary, simple sentence structures, fundamental grammar concepts, and essential communication skills for everyday situations. The course covers basic reading skills, simple writing tasks, clear speaking practice, and listening for familiar information. Learning activities are practical and engaging, focusing on immediate communication needs such as introductions, basic conversations, simple instructions, and everyday vocabulary. Individual support and differentiated teaching methods ensure that every student can progress at their own pace while building confidence in English communication.",
      img: getCourseImage("persons", 10),
    },
    {
      id: 4,
      title: "PEARSON Entry Level 2 English",
      desc: "The Entry Level 2 English course focuses on enhancing basic communication skills through improved vocabulary development and structured sentence formation, building upon foundational English knowledge. Students will work on expanding their word knowledge, understanding basic grammar rules, and developing more complex communication abilities. The course covers reading simple texts, writing basic sentences and paragraphs, speaking clearly in familiar situations, and listening to understand key information. Learning activities include vocabulary building exercises, guided writing tasks, structured conversation practice, and reading comprehension activities using accessible texts. The supportive learning environment encourages students to practice their English skills confidently, with emphasis on practical communication that can be immediately applied in daily life situations.",
      img: getCourseImage("persons", 9),
    },
    {
      id: 3,
      title: "PEARSON FUNCTIONAL SKILLS Entry Level 3 English",
      desc: "The Entry Level 3 English course prepares students for practical usage of English, focusing on developing skills to engage effectively in real-world communication tasks and social interactions. This course builds upon basic English skills, introducing more complex language structures, extended vocabulary, and varied communication scenarios. Students will practice reading different types of texts, writing for various purposes, speaking in different situations, and listening for specific information. The program emphasizes functional English skills that are directly applicable to everyday life, including completing forms, understanding instructions, participating in discussions, and expressing opinions clearly. Learning activities are designed to be engaging and relevant, helping students develop confidence in using English in community, workplace, and educational settings.",
      img: getCourseImage("persons", 8),
    },
    {
      id: 10,
      title: "PEARSON Entry Level 1 Maths",
      desc: "The Entry Level 1 Maths course provides a supportive introduction to basic mathematical concepts and practical skills essential for daily life activities, designed specifically for learners who are beginning their mathematical journey or returning to education after a break. This foundational course covers fundamental number work, basic counting, simple calculations, recognition of shapes, and introductory measurement concepts through engaging, practical activities. Students will work with money calculations, time concepts, basic data collection, and simple problem-solving in familiar contexts. The learning environment is designed to be encouraging and non-threatening, with emphasis placed on building confidence, developing mathematical language, and recognizing mathematical concepts in everyday situations. Individual support and differentiated learning approaches ensure that every student can achieve personal success and progress.",
      img: getCourseImage("persons", 5),
    },
    {
      id: 9,
      title: "PEARSON Entry Level 2 Maths",
      desc: "The Entry Level 2 Maths course builds upon foundational mathematical concepts, introducing new topics including fractions, basic measurements, and elementary problem-solving techniques for everyday applications. This supportive learning environment helps students develop mathematical confidence while working with practical scenarios that demonstrate the relevance of mathematics in daily life. Students will explore number relationships, simple calculations, basic shapes and space concepts, and introductory data handling through hands-on activities and real-world examples. The course focuses on developing mathematical vocabulary, understanding numerical relationships, and building the foundation skills necessary for progression to higher levels of mathematical study. Teaching methods emphasize practical application, visual learning aids, and collaborative problem-solving to ensure all students can achieve success.",
      img: getCourseImage("persons", 4),
    },
    {
      id: 8,
      title: "PEARSON Entry Level 3 Maths",
      desc: "The Entry Level 3 Maths course is designed to develop students' ability to handle mathematical information and concepts independently, with a strong focus on practical applications in everyday life and work situations. This course bridges the gap between basic numeracy and more advanced mathematical study, providing learners with the confidence and skills needed to tackle mathematical challenges. Students will work with number operations, basic geometry, data handling, and measurement concepts through engaging, real-world contexts. The program emphasizes building mathematical confidence, developing logical thinking skills, and understanding how mathematics applies to daily activities such as budgeting, shopping, cooking, and workplace tasks. Assessment methods are designed to be supportive and encouraging, helping students recognize their mathematical achievements and progress.",
      img: getCourseImage("persons", 3),
    },
    {
      id: 75,
      title: "PEARSON FUNCTIONAL SKILLS Level 1 Maths",
      desc: "The Pearson Functional Skills Level 1 Maths course provides students with a thorough understanding of fundamental mathematical principles, focusing on practical applications in everyday life and work situations. This course bridges the gap between basic numeracy and more advanced mathematical study, providing learners with the confidence and skills needed to tackle mathematical challenges. Students will work with number operations, basic geometry, data handling, and measurement concepts through engaging, real-world contexts. The program emphasizes building mathematical confidence, developing logical thinking skills, and understanding how mathematics applies to daily activities such as budgeting, shopping, cooking, and workplace tasks. Assessment methods are designed to be supportive and encouraging, helping students recognize their mathematical achievements and progress.",
      img: getCourseImage("persons", 3),
    },
    {
      id: 76,
      title: "PEARSON FUNCTIONAL SKILLS Level 2 Maths",
      desc: "The Pearson Functional Skills Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage("persons", 2),
    },
    {
      id: 77,
      title: "PEARSON FUNCTIONAL SKILLS Level 1 English",
      desc: "The Pearson Functional Skills Level 1 English course prepares students for practical usage of English, focusing on developing skills to engage effectively in real-world communication tasks and social interactions. This course builds upon basic English skills, introducing more complex language structures, extended vocabulary, and varied communication scenarios. Students will practice reading different types of texts, writing for various purposes, speaking in different situations, and listening for specific information. The program emphasizes functional English skills that are directly applicable to everyday life, including completing forms, understanding instructions, participating in discussions, and expressing opinions clearly. Learning activities are designed to be engaging and relevant, helping students develop confidence in using English in community, workplace, and educational settings.",
      img: getCourseImage("persons", 8),
    },
    {
      id: 78,
      title: "PEARSON FUNCTIONAL SKILLS Level 2 English",
      desc: "The Pearson Functional Skills Level 2 English course is designed to develop fluent communication skills suitable for diverse personal, educational, and professional contexts, significantly enhancing both spoken and written English capabilities. This comprehensive program covers advanced grammar structures, vocabulary expansion, critical reading skills, and sophisticated writing techniques. Students will engage with various text types including literature, reports, articles, and creative writing, developing analytical and interpretative skills. The course emphasizes effective communication in different contexts, presentation skills, and the ability to adapt language and style to suit specific audiences and purposes. Practical activities include essay writing, oral presentations, group discussions, and creative projects that build confidence and competency in English language use at an advanced level.",
      img: getCourseImage("persons", 9),
    },

    // VTCT English & Math Courses (after Pearson courses)
    {
      id: 37,
      title: "VTCT FUNCTIONAL SKILLS  Level 1 English",
      desc: "The Entry Level 1 English course helps students refine their command of English, developing independent communication skills suitable for both professional and personal contexts. This intermediate-level program focuses on improving written and spoken English through structured learning activities, grammar development, and vocabulary expansion. Students will work with different text types, practice formal and informal writing styles, and develop confidence in speaking and listening skills. The course covers essential communication skills including letter writing, report preparation, reading comprehension, and verbal communication techniques. Emphasis is placed on developing critical thinking skills, understanding different writing purposes, and building the language competencies needed for further education, employment opportunities, and effective participation in community life.",
      img: getCourseImage("persons", 7),
    },
    {
      id: 1,
      title: "VTCT FUNCTIONAL SKILLS Level 2 English",
      desc: "The Entry Level 2 English course is designed to develop fluent communication skills suitable for diverse personal, educational, and professional contexts, significantly enhancing both spoken and written English capabilities. This comprehensive program covers advanced grammar structures, vocabulary expansion, critical reading skills, and sophisticated writing techniques. Students will engage with various text types including literature, reports, articles, and creative writing, developing analytical and interpretative skills. The course emphasizes effective communication in different contexts, presentation skills, and the ability to adapt language and style to suit specific audiences and purposes. Practical activities include essay writing, oral presentations, group discussions, and creative projects that build confidence and competency in English language use at an advanced level.",
      img: getCourseImage("persons", 6),
    },
    {
      id: 7,
      title: "VTCT FUNCTIONAL SKILLS Level 1 Maths",
      desc: "The Entry Level 1 Maths course provides students with a thorough understanding of fundamental mathematical principles, focusing on basic algebra, proportions, statistics, and practical mathematical applications. This intermediate-level program builds upon entry-level mathematics, introducing more complex concepts while maintaining accessibility for learners developing their mathematical confidence. Students will work with fractions, decimals, percentages, basic algebraic expressions, and introductory statistical concepts. The course emphasizes practical applications of mathematics in everyday situations, workplace contexts, and preparation for further mathematical study. Learning activities include problem-solving exercises, data handling projects, and real-world mathematical scenarios that demonstrate the relevance and importance of mathematical skills in personal and professional life.",
      img: getCourseImage("persons", 2),
    },
    {
      id: 6,
      title: "VTCT FUNCTIONAL SKILLS Level 2 Maths",
      desc: "The Entry Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage("persons", 2),
    },
  ],

  "PRO QUAL": [
    {
      id: 1,
      title: "PROQUAL Level 2 Award in Site Security",
      desc: "The PROQUAL Level 2 Award in Site Security provides students with a comprehensive foundation in modern security principles, risk assessment methodologies, and workplace safety protocols essential for professional security operations. This course covers fundamental security concepts including threat identification, access control systems, surveillance techniques, and emergency response procedures. Students will learn about legal frameworks governing security work, professional conduct standards, and the importance of maintaining confidentiality and integrity. The program includes practical training in security equipment usage, report writing, communication skills, and conflict resolution techniques. Emphasis is placed on understanding security risks in different environments, developing situational awareness, and implementing appropriate security measures to protect people, property, and assets.",
      img: getCourseImage("proqual", 9),
    },
    {
      id: 2,
      title: "PROQUAL Level 2 First Aid",
      desc: "The PROQUAL Level 2 First Aid course provides comprehensive training in essential life-saving skills, equipping participants with the knowledge and confidence to respond effectively to medical emergencies and accident situations. This intensive program covers CPR techniques, wound management, shock treatment, and the management of various medical conditions including heart attacks, strokes, and breathing difficulties. Students will learn to assess emergency situations, prioritize treatment, and provide appropriate care while awaiting professional medical assistance. The course includes hands-on practical training with mannequins, role-playing scenarios, and the use of first aid equipment. Participants will develop skills in patient assessment, communication with emergency services, and maintaining accurate records of treatment provided. This qualification is essential for workplace first aiders and anyone seeking to develop potentially life-saving skills.",
      img: getCourseImage("proqual", 10),
    },
    {
      id: 3,
      title: "PROQUA Level 1 Health & Safety in Construction",
      desc: "The PROQUA Level 1 Health & Safety in Construction course provides a comprehensive introduction to essential health and safety practices, regulations, and responsibilities within the construction sector. This foundational program covers key topics including hazard identification, risk assessment procedures, personal protective equipment usage, and safe working practices on construction sites. Students will learn about legal requirements, accident prevention strategies, emergency procedures, and the importance of maintaining a safety-first culture in construction environments. The course includes practical elements such as site safety inspections, safety equipment demonstrations, and case study analyses of construction accidents. Emphasis is placed on developing safety awareness, understanding regulatory compliance requirements, and building the knowledge foundation necessary for safe participation in construction activities.",
      img: getCourseImage("proqual", 4),
    },
  ],

  SQA: [
    {
      id: 1,
      title:
        "Level 2: Introduction to the Role of the Professional Taxi and Private Hire  (Wales)",
      desc: "The Level 2 SQA Introduction to the Role of the Professional Taxi and Private Hire  course introduces aspiring drivers to the comprehensive professional standards required in the passenger transport industry, with particular focus on safety protocols, regulatory compliance, and customer service excellence. This specialized program covers essential topics including local area knowledge, route planning, passenger safety procedures, and professional conduct standards. Students will learn about licensing requirements, vehicle maintenance responsibilities, fare calculation methods, and effective communication with diverse passengers. The course emphasizes the importance of providing exceptional customer service, managing difficult situations professionally, and maintaining high standards of personal and vehicle presentation. Practical elements include navigation skills, customer interaction scenarios, and understanding of accessibility requirements for passengers with special needs.",
      img: getCourseImage("sqa", 1),
    },
    {
      id: 2,
      title:
        "Level 5: Introduction to the Role of the Professional Taxi and Private Hire (Scotland)",
      desc: "The Level 5 SQA Introduction to the Role of the Professional Taxi and Private Hire  Role course provides advanced comprehensive knowledge for experienced drivers seeking to excel in the passenger transport sector, covering sophisticated customer care strategies, advanced safety protocols, and detailed industry regulations. This higher-level qualification explores complex aspects of professional driving including advanced route optimization, customer relationship management, business development principles, and leadership skills for those aspiring to supervisory or training roles. Students will develop expertise in handling challenging situations, providing specialized services for different passenger groups, and understanding the commercial aspects of the taxi and private hire industry. The course includes advanced communication techniques, conflict resolution strategies, and the development of professional networks within the transport industry.",
      img: getCourseImage("sqa", 2),
    },
  ],

  ICQ: [
    // First three ICQ courses
    {
      id: 3,
      title: "Level 3 Award in Assessing Competence at Work",
      desc: "This Level 3 Award in Assessing Competence at Work focuses specifically on developing the skills required to assess occupational competence in real workplace environments. The course provides in-depth training on competency-based assessment principles, enabling participants to evaluate whether workers can perform their job roles to the required standards. Students will learn to design assessment plans, conduct workplace observations, gather evidence of competence, and provide constructive feedback to support professional development. The program covers legal and ethical considerations, health and safety requirements, and the importance of maintaining professional relationships with candidates throughout the assessment process.",
      img: getCourseImage("icq", 4),
    },
    {
      id: 9,
      title: "Level 3 Award in Education and Training",
      desc: " This comprehensive Level 3 Award in Education and Training provides advanced qualification for professional educators seeking senior teaching roles. The course covers sophisticated pedagogical approaches, educational research, leadership in learning environments, and advanced assessment methodologies. Students will develop expertise in educational innovation, quality enhancement, and strategic curriculum development.",
      img: getCourseImage("icq", 9),
    },
    {
      id: 10,
      title: "Level 3 Certificate in Assessing Vocational Achievements",
      desc: "This Level 3 Certificate in Assessing Vocational Achievements provides specialized training for assessment professionals in vocational education settings. The course covers assessment planning, evidence gathering, quality assurance, and feedback delivery. Students will develop expertise in fair and reliable assessment practices, supporting learner progression, and maintaining assessment standards across diverse vocational disciplines.",
      img: getCourseImage("icq", 10),
    },

    // VTCT Education & Training Courses (reordered according to specifications)
    {
      id: 2,
      title: "Level 3 Award in Education and Training",
      desc: "This Level 3 Award in Education and Training provides comprehensive foundation training for individuals entering the education and training sector. The course covers essential teaching principles, learning theories, and practical training delivery methods. Students will develop skills in session planning, learner engagement, and basic assessment techniques. This qualification is ideal for new trainers, workplace mentors, and those seeking to develop their training capabilities in professional environments.",
      img: getCourseImage("icq", 3),
    },
    {
      id: 4,
      title: "Level 3 Certificate in Assessing Vocational Achievement",
      desc: "The Level 3 Certificate in Assessing Vocational Achievement is a comprehensive qualification that prepares individuals to become competent vocational assessors across diverse industry sectors. This course covers the complete assessment cycle, from initial planning and preparation through to final evaluation and feedback delivery. Students will master various assessment methods including observation, questioning, professional discussions, and portfolio reviews. The program emphasizes fair, valid, and reliable assessment practices while ensuring compliance with awarding body requirements. Participants will develop expertise in supporting learners through their qualification journey, maintaining accurate records, and contributing to quality assurance processes within their organizations.",
      img: getCourseImage("icq", 5),
    },
    {
      id: 70,
      title: "Level 4 Certificate in Education and Training",
      desc: "This Level 4 Certificate in Education and Training provides intermediate-level training for individuals seeking to develop their teaching and training skills. The course covers advanced pedagogical methods, curriculum design, inclusive learning practices, and professional development strategies. Students will enhance their ability to create engaging learning environments, assess student progress effectively, and contribute to educational quality improvement initiatives within their organizations.",
      img: getCourseImage("icq", 10),
    },
    {
      id: 56,
      title: "Level 5 Diploma in Education and Training",
      desc: "This comprehensive Level 5 Diploma in Education and Training provides advanced qualification for experienced educators and training professionals. The course covers sophisticated teaching methodologies, curriculum development, educational leadership, and advanced assessment strategies. Students will master complex pedagogical approaches, research methods, and quality assurance processes essential for senior roles in education and training organizations.",
      img: getCourseImage("icq", 6),
    },
    {
      id: 57,
      title: "Level 5 Diploma in Teaching (Further Education and Skills)",
      desc: "This specialized Level 5 Diploma in Teaching for Further Education and Skills sector provides comprehensive training for teachers working in colleges, adult education, and vocational training environments. The course covers advanced teaching techniques, curriculum planning, student support strategies, and sector-specific regulatory requirements. Students will develop expertise in delivering education to diverse learner groups with varying educational backgrounds and career aspirations.",
      img: getCourseImage("icq", 7),
    },
    // Level 5 Diploma in Teaching
    {
      id: 74,
      title: "Level 5 Diploma in Teaching",
      desc: "This Level 5 Diploma in Teaching provides advanced qualification for experienced educators and training professionals seeking senior teaching roles. The course covers sophisticated pedagogical approaches, educational research, leadership in learning environments, and advanced assessment methodologies. Students will develop expertise in educational innovation, quality enhancement, and strategic curriculum development across various educational settings.",
      img: getCourseImage("icq", 8),
    },
    {
      id: 71,
      title: "Level 4 Award in the Internal Quality Assurance of Assessment Process and Practice",
      desc: "This Level 4 Award in the Internal Quality Assurance of Assessment Process and Practice provides specialized training for professionals responsible for maintaining and improving assessment quality within educational and training organizations. The course covers internal quality assurance frameworks, assessment verification procedures, team leadership, and continuous improvement strategies. Students will gain expertise in supporting assessor development, ensuring assessment reliability, and implementing effective internal quality management approaches.",
      img: getCourseImage("icq", 9),
    },
    {
      id: 72,
      title: "Level 4 Award in Understanding the Internal Quality Assurance of Assessment Processes and Practice",
      desc: "This Level 4 Award in Understanding the Internal Quality Assurance of Assessment Processes and Practice provides foundational knowledge of internal quality assurance principles and practices in assessment environments. The course covers quality assurance frameworks, assessment verification, team leadership, and continuous improvement strategies essential for educational quality assurance roles. Students will gain comprehensive understanding of regulatory requirements, best practice methodologies, and effective quality management approaches.",
      img: getCourseImage("icq", 11),
    },
    {
      id: 73,
      title: "Level 2 Award in Invigilating Remote Tests and Examinations",
      desc: "This specialized Level 2 Award in Invigilating Remote Tests and Examinations provides comprehensive training for individuals seeking to become qualified invigilators for remote testing and examination environments. The course covers essential skills including digital platform management, remote monitoring techniques, security protocols, and student support procedures. Participants will learn about academic integrity, technical troubleshooting, and the unique challenges of online assessment environments. This qualification is essential for educational institutions, professional bodies, and organizations conducting remote examinations.",
      img: getCourseImage("icq", 12),
    },

    // PROQUAL Quality Assurance Courses
    {
      id: 15,
      title:
        "Level 4 Award in External Quality Assurance of Assessment Process and Practice",
      desc: "This Level 4 Award in External Quality Assurance provides comprehensive training for professionals responsible for maintaining assessment quality across multiple organizations and assessment centers. The course covers external quality assurance systems, cross-organizational assessment monitoring, standardization processes, and regulatory compliance requirements. Students will develop skills in conducting external quality reviews, supporting assessment center development, ensuring assessment validity across different contexts, and implementing effective external quality management systems.",
      img: getCourseImage("proqual", 5),
    },
    {
      id: 16,
      title:
        "Level 4 Award in the Internal Quality Assurance of Assessment Process and Practice",
      desc: "This Level 4 Award in Internal Quality Assurance provides specialized training for professionals responsible for maintaining and improving assessment quality within educational and training organizations. The course covers internal quality assurance frameworks, assessment verification procedures, team leadership, and continuous improvement strategies. Students will gain expertise in supporting assessor development, ensuring assessment reliability, and implementing effective internal quality management approaches.",
      img: getCourseImage("proqual", 6),
    },
    {
      id: 17,
      title:
        "Level 4 Award in Understanding the External Quality Assurance Process and Practice",
      desc: " This Level 4 Award provides foundational understanding of external quality assurance principles and practices in assessment environments. The course covers external quality assurance frameworks, regulatory requirements, compliance procedures, and best practice methodologies. Students will gain knowledge of external verification processes, inter-organizational quality standards, and effective approaches to maintaining assessment quality across different educational and training contexts.",
      img: getCourseImage("proqual", 7),
    },
    {
      id: 18,
      title:
        "Level 4 Certificate in Leading the Internal Quality Assurance of Assessment Processes and Practice",
      desc: " This Level 4 Certificate provides advanced training for senior professionals leading internal quality assurance teams and processes within educational organizations. The course covers strategic quality management, team leadership, organizational development, and advanced quality assurance methodologies. Students will develop expertise in leading quality improvement initiatives, managing assessment teams, and implementing organizational quality strategies that ensure excellence in assessment practices.",
      img: getCourseImage("proqual", 8),
    },
  ],

  VTCT: [
    {
      id: 1,
      title:
        "Entry 1 A1 - Itec Esol Certificate For Young Learners International",
      desc: "This foundational Itec Esol Certificate for Young Learners International provides essential English language skills for young students beginning their English learning journey...",
      img: getCourseImage("vtct", 9),
    },
    {
      id: 2,
      title:
        "Entry 2 A2 - Itec Esol Certificate For Young Learners International",
      desc: "This intermediate Itec Esol Certificate for Young Learners International builds upon foundational English skills...",
      img: getCourseImage("vtct", 2),
    },
    {
      id: 3,
      title:
        "Entry 3 B1 - Itec Esol Certificate For Young Learners International",
      desc: "This advanced Itec Esol Certificate for Young Learners International develops sophisticated English language skills...",
      img: getCourseImage("vtct", 3),
    },
    {
      id: 4,
      title: "Entry 1 A1 - Itec Esol Certificate International",
      desc: "This comprehensive Itec Esol Certificate International provides fundamental English language training...",
      img: getCourseImage("vtct", 4),
    },
    {
      id: 5,
      title: "Entry 2 A2 - Itec Esol Certificate International",
      desc: "This intermediate Itec Esol Certificate International builds upon basic English foundations...",
      img: getCourseImage("vtct", 5),
    },
    {
      id: 6,
      title: "Entry 3 B1 - Itec Esol Certificate International",
      desc: "This advanced Itec Esol Certificate International develops comprehensive English language proficiency...",
      img: getCourseImage("vtct", 6),
    },
    // {
    //   id: 7,
    //   title: "Level 1 - Itec Esol Certificate International",
    //   desc: "This comprehensive Itec Esol Certificate International at Level 1 provides intermediate English language training...",
    //   img: getCourseImage("vtct", 7),
    // },
    // {
    //   id: 8,
    //   title: "Level 2 - Itec Esol Certificate International",
    //   desc: "This advanced Itec Esol Certificate International at Level 2 provides sophisticated English language training...",
    //   img: getCourseImage("vtct", 8),
    // },
    // {
    //   id: 9,
    //   title: "Level 3 - Itec Esol Certificate International",
    //   desc: "This expert-level Itec Esol Certificate International at Level 3 provides the highest standard of English language training...",
    //   img: getCourseImage("vtct", 19),
    // },
    {
      id: 10,
      title: "Level 1 B2 - Itec Esol Certificate International",
      desc: "This comprehensive Itec Esol Certificate International at Level 1 B2 provides upper-intermediate English language training...",
      img: getCourseImage("vtct", 11),
    },
    {
      id: 11,
      title: "Level 2 C1 - Itec Esol Certificate International",
      desc: "This advanced Itec Esol Certificate International at Level 2 C1 provides high-level English language training...",
      img: getCourseImage("vtct", 12),
    },
    {
      id: 12,
      title: "Level 3 C2 - Itec Esol Certificate International",
      desc: "This expert-level Itec Esol Certificate International at Level 3 C2 provides the highest standard of English language training for students seeking mastery-level communication skills. The course covers sophisticated linguistic analysis, advanced academic writing, and expert-level communication abilities. Students will achieve the language proficiency required for university study, professional leadership, and international career opportunities.",
      img: getCourseImage("vtct", 13),
    },
    {
      id: 70,
      title: "Level 5 Diploma in Teaching",
      desc: "This Level 5 Diploma in Teaching provides advanced qualification for experienced educators and training professionals seeking senior teaching roles. The course covers sophisticated pedagogical approaches, educational research, leadership in learning environments, and advanced assessment methodologies. Students will develop expertise in educational innovation, quality enhancement, and strategic curriculum development across various educational settings.",
      img: getCourseImage("vtct", 15),
    },
    // {
    //   id: 76,
    //   title: "Level 2 Award in Invigilatin Remote Tests and Examinations",
    //   desc: "This specialized Level 2 Award in Invigilating Remote Tests and Examinations provides comprehensive training for individuals seeking to become qualified invigilators for remote testing and examination environments. The course covers essential skills including digital platform management, remote monitoring techniques, security protocols, and student support procedures. Participants will learn about academic integrity, technical troubleshooting, and the unique challenges of online assessment environments. This qualification is essential for educational institutions, professional bodies, and organizations conducting remote examinations.",
    //   img: getCourseImage("vtct", 18),
    // },
  ],

  // Combined Taxi & Private Hire category (SQA + ICQ courses)
  TAXI: [
    // SQA courses
    {
      id: 1,
      title:
        "Level 2: Introduction to the Role of the Professional Taxi and Private Hire  (Wales)",
      desc: "The Level 2 SQA Introduction to the Role of the Professional Taxi and Private Hire  course introduces aspiring drivers to the comprehensive professional standards required in the passenger transport industry, with particular focus on safety protocols, regulatory compliance, and customer service excellence. This specialized program covers essential topics including local area knowledge, route planning, passenger safety procedures, and professional conduct standards. Students will learn about licensing requirements, vehicle maintenance responsibilities, fare calculation methods, and effective communication with diverse passengers. The course emphasizes the importance of providing exceptional customer service, managing difficult situations professionally, and maintaining high standards of personal and vehicle presentation. Practical elements include navigation skills, customer interaction scenarios, and understanding of accessibility requirements for passengers with special needs.",
      img: getCourseImage("sqa", 1),
    },
    {
      id: 2,
      title:
        "Level 5: Introduction to the Role of the Professional Taxi and Private Hire (Scotland)",
      desc: "The Level 5 SQA Introduction to the Role of the Professional Taxi and Private Hire  Role course provides advanced comprehensive knowledge for experienced drivers seeking to excel in the passenger transport sector, covering sophisticated customer care strategies, advanced safety protocols, and detailed industry regulations. This higher-level qualification explores complex aspects of professional driving including advanced route optimization, customer relationship management, business development principles, and leadership skills for those aspiring to supervisory or training roles. Students will develop expertise in handling challenging situations, providing specialized services for different passenger groups, and understanding the commercial aspects of the taxi and private hire industry. The course includes advanced communication techniques, conflict resolution strategies, and the development of professional networks within the transport industry.",
      img: getCourseImage("sqa", 2),
    },
    // ICQ courses
    {
      id: 46,
      title:
        "BTEC Level 2 ICQ: Introduction to the Role of the Professional Taxi and Private Hire  (England)",
      desc: "This comprehensive iCQ BTEC Level 2 course provides an essential introduction to the professional standards and responsibilities required in the taxi and private hire industry across the United Kingdom. The program covers fundamental aspects of professional driving including customer service principles, industry regulations, safety protocols, and professional conduct standards. Students will gain knowledge of licensing requirements, vehicle maintenance basics, passenger interaction skills, and the legal framework governing taxi and private hire operations. The course emphasizes developing professional attitudes, understanding service quality expectations, and building confidence in providing safe, reliable transportation services. This qualification serves as an ideal starting point for individuals seeking to enter the passenger transport sector with a solid foundation of industry knowledge and professional competencies.",
      img: getCourseImage("icq", 1),
    },
  ],
};

export default courseData;
