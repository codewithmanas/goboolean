export const quizQuestions = [
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "Reference to the current object",
        "Reference to the parent object",
        "Reference to the global object",
        "Reference to the prototype"
      ],
      correctAnswer: 0
    },
    {
      question: "What will be the output of the following code? console.log([] == false)",
      options: ["true", "false", "TypeError", "undefined"],
      correctAnswer: 0
    },
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "'==' compares both value and type",
        "'==' compares only the type",
        "'===' compares both value and type",
        "Both '==' and '===' compare only the value"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the output of the following code? console.log(0 == false)",
      options: ["true", "false", "0", "NaN"],
      correctAnswer: 0
    },
    {
      question: "Which of the following data structures is ideal for implementing a queue?",
      options: ["Stack", "Linked List", "Array", "Priority Queue"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is not a principle of Object-Oriented Programming?",
      options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Compilation"
      ],
      correctAnswer: 3
    },
    {
      question: "In JavaScript, what keyword is used to declare a variable?",
      options: ["var", "int", "const", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "Which HTTP status code indicates 'Not Found'?",
      options: ["200", "404", "500", "403"],
      correctAnswer: 1
    },
    {
      question: "What is Big-O notation used for?",
      options: [
        "To measure the programming language's efficiency",
        "To describe the performance or complexity of an algorithm",
        "To measure the memory size of a program",
        "To debug code faster"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a primary key in a database?",
      options: [
        "A unique identifier for a database row",
        "A key used to create relationships between tables",
        "A type of encryption key",
        "A secondary column in the database"
      ],
      correctAnswer: 0
    },
    {
      question: "In a TCP/IP network, what layer is responsible for reliable data transfer?",
      options: ["Network Layer", "Transport Layer", "Application Layer", "Data Link Layer"],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of an operating system's scheduler?",
      options: [
        "To manage system updates",
        "To allocate CPU time to processes",
        "To control memory allocation",
        "To handle disk management"
      ],
      correctAnswer: 1
    },
    {
      question: "Which principle does OOP use to restrict access to an object's internal state?",
      options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
      correctAnswer: 1
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
      correctAnswer: 1
    },
    {
      question: "What type of SQL command is used to retrieve data from a database?",
      options: ["SELECT", "DELETE", "UPDATE", "INSERT"],
      correctAnswer: 0
    },
    {
      question: "Which layer of the OSI model does IP operate at?",
      options: ["Application Layer", "Transport Layer", "Network Layer", "Data Link Layer"],
      correctAnswer: 2
    },
    {
      question: "Which Linux command is used to change file permissions?",
      options: ["chmod", "chdir", "ls", "cp"],
      correctAnswer: 0
    },
    {
      question: "Which concept in OOP allows multiple classes to share behavior or characteristics?",
      options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
      correctAnswer: 1
    },
    {
      question: "What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      correctAnswer: 2
    },
    {
      question: "What does ACID stand for in databases?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accessibility, Control, Integrity, Design",
        "Allocation, Connection, Integrity, Durability",
        "Authenticity, Control, Integrity, Design"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the maximum size of an IP address in IPv4?",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      correctAnswer: 1
    },
    {
      question: "Which scheduling algorithm is used for real-time systems?",
      options: ["Round Robin", "FCFS", "EDF", "SJF"],
      correctAnswer: 2
    },
    {
      question: "In OOP, what does 'polymorphism' allow?",
      options: [
        "Multiple functions with the same name but different parameters",
        "Inheritance of properties from one class to another",
        "Protection of class members",
        "Binding of code to its implementation"
      ],
      correctAnswer: 0
    },
    {
      question: "Which data structure works on the Last In First Out (LIFO) principle?",
      options: ["Queue", "Stack", "Linked List", "Array"],
      correctAnswer: 1
    },
    {
      question: "Which type of database schema is denormalized?",
      options: ["Star Schema", "Snowflake Schema", "Third Normal Form", "First Normal Form"],
      correctAnswer: 0
    },
    {
      question: "Which protocol is used to send email?",
      options: ["HTTP", "SMTP", "FTP", "POP3"],
      correctAnswer: 1
    },
    {
      question: "What is virtual memory used for in operating systems?",
      options: [
        "To manage the CPU cycles",
        "To create backup memory",
        "To allow a program to exceed the physical memory size",
        "To enhance the processing speed"
      ],
      correctAnswer: 2
    },
    {
      question: "Which design pattern provides a single point of control for creating an object?",
      options: ["Singleton", "Factory", "Observer", "Builder"],
      correctAnswer: 0
    },
    {
      question: "What is the complexity of Quick Sort in the average case?",
      options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
      correctAnswer: 1
    },
    {
      question: "Which SQL clause is used to filter the result set?",
      options: ["WHERE", "ORDER BY", "GROUP BY", "JOIN"],
      correctAnswer: 0
    },
    {
      question: "Which layer in the OSI model deals with MAC addresses?",
      options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
      correctAnswer: 1
    },
    {
      question: "Which command in Git is used to create a new branch?",
      options: ["git merge", "git checkout", "git branch", "git commit"],
      correctAnswer: 2
    },
    {
      question: "What is the purpose of DNS in networking?",
      options: [
        "To allocate IP addresses",
        "To resolve domain names to IP addresses",
        "To encrypt data packets",
        "To manage network topology"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the time complexity of accessing an element in an array by index?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correctAnswer: 2
    }
  ];
  