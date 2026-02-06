/// questions.js
// Questions grouped by category (20 questions each, NO difficulty)

const questions = [
  // ================= DBMS =================
  {
    category: "DBMS",
    questions: [
      { question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup System", "Distributed Business System", "Database Model Software"], correctAnswer: 0 },
      { question: "Which of the following is a DBMS?", options: ["MySQL", "HTML", "CSS", "JS"], correctAnswer: 0 },
      { question: "Which SQL command removes a table?", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], correctAnswer: 2 },
      { question: "Which key uniquely identifies a record?", options: ["Foreign", "Candidate", "Primary", "Composite"], correctAnswer: 2 },
      { question: "Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correctAnswer: 1 },
      { question: "What is a relation?", options: ["Table", "Row", "Column", "Key"], correctAnswer: 0 },
      { question: "Which command retrieves data?", options: ["GET", "FETCH", "SELECT", "RETRIEVE"], correctAnswer: 2 },
      { question: "Which constraint allows NULL?", options: ["PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "CHECK"], correctAnswer: 1 },
      { question: "Which join returns matching rows?", options: ["INNER", "LEFT", "RIGHT", "FULL"], correctAnswer: 0 },
      { question: "Which language defines schema?", options: ["DML", "DDL", "DCL", "TCL"], correctAnswer: 1 },
      { question: "Which clause filters rows?", options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], correctAnswer: 0 },
      { question: "Which key refers another table?", options: ["Primary", "Candidate", "Foreign", "Composite"], correctAnswer: 2 },
      { question: "Which operation combines rows?", options: ["Selection", "Projection", "Join", "Division"], correctAnswer: 2 },
      { question: "TRUNCATE does what?", options: ["Deletes rows", "Drops table", "Deletes all rows", "Removes schema"], correctAnswer: 2 },
      { question: "Which DBMS is open source?", options: ["Oracle", "MySQL", "SQL Server", "DB2"], correctAnswer: 1 },
      { question: "Which index improves speed?", options: ["Dense", "Sparse", "Primary", "All"], correctAnswer: 3 },
      { question: "What is a tuple?", options: ["Table", "Row", "Column", "Key"], correctAnswer: 1 },
      { question: "Which sorts results?", options: ["ORDER BY", "GROUP BY", "WHERE", "SORT"], correctAnswer: 0 },
      { question: "Referential integrity ensures?", options: ["Entity", "Domain", "Referential", "Key"], correctAnswer: 2 },
      { question: "Which is not a DBMS?", options: ["MySQL", "Oracle", "MongoDB", "HTML"], correctAnswer: 3 }
    ]
  },

  // ================= OS =================
  {
    category: "OS",
    questions: [
      { question: "Main function of OS?", options: ["Manage hardware", "Compile code", "Edit files", "Run browser"], correctAnswer: 0 },
      { question: "Which is not OS?", options: ["Windows", "Linux", "Oracle", "macOS"], correctAnswer: 2 },
      { question: "What is a process?", options: ["Program in execution", "Program in disk", "CPU", "Thread"], correctAnswer: 0 },
      { question: "Which causes starvation?", options: ["FCFS", "Round Robin", "Priority", "FIFO"], correctAnswer: 2 },
      { question: "Deadlock means?", options: ["CPU idle", "Processes wait forever", "Memory overflow", "Disk full"], correctAnswer: 1 },
      { question: "Non-preemptive scheduling?", options: ["SJF", "RR", "Priority", "Multilevel"], correctAnswer: 0 },
      { question: "Virtual memory is?", options: ["RAM", "Cache", "Disk as RAM", "Register"], correctAnswer: 2 },
      { question: "Multitasking OS?", options: ["DOS", "Windows", "BIOS", "Firmware"], correctAnswer: 1 },
      { question: "Fastest memory?", options: ["RAM", "Cache", "Register", "Disk"], correctAnswer: 2 },
      { question: "Semaphore is for?", options: ["Sync", "Deadlock", "Paging", "Scheduling"], correctAnswer: 0 },
      { question: "Which is not scheduling algo?", options: ["FCFS", "LRU", "SJF", "RR"], correctAnswer: 1 },
      { question: "CPU scheduling maximizes?", options: ["Throughput", "Delay", "Wait", "Idle"], correctAnswer: 0 },
      { question: "Critical section problem relates to?", options: ["Memory", "Synchronization", "IO", "CPU"], correctAnswer: 1 },
      { question: "Paging avoids?", options: ["Deadlock", "Fragmentation", "Starvation", "Thrashing"], correctAnswer: 1 },
      { question: "Thrashing occurs due to?", options: ["CPU", "Disk", "Memory", "IO"], correctAnswer: 2 },
      { question: "Which is system call?", options: ["open()", "printf()", "scanf()", "cin"], correctAnswer: 0 },
      { question: "Kernel is?", options: ["Hardware", "Software", "Firmware", "User app"], correctAnswer: 1 },
      { question: "Time-sharing OS uses?", options: ["Batch", "RR", "FCFS", "SJF"], correctAnswer: 1 },
      { question: "Deadlock prevention removes?", options: ["Mutual exclusion", "Hold & wait", "Circular wait", "All"], correctAnswer: 3 },
      { question: "Which is not OS type?", options: ["Batch", "Real-time", "Distributed", "Compiler"], correctAnswer: 3 }
    ]
  },

  // ================= CN =================
  {
    category: "CN",
    questions: [
      { question: "TCP stands for?", options: ["Transmission Control Protocol", "Transfer Control Process", "Transport Communication Protocol", "Technical Control Protocol"], correctAnswer: 0 },
      { question: "Which device connects networks?", options: ["Hub", "Switch", "Router", "Repeater"], correctAnswer: 2 },
      { question: "OSI has how many layers?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
      { question: "HTTP works on?", options: ["Transport", "Network", "Application", "Session"], correctAnswer: 2 },
      { question: "IP address length (IPv4)?", options: ["16-bit", "32-bit", "64-bit", "128-bit"], correctAnswer: 1 },
      { question: "Which protocol sends email?", options: ["FTP", "SMTP", "HTTP", "POP"], correctAnswer: 1 },
      { question: "Which layer does routing?", options: ["Data link", "Network", "Transport", "Session"], correctAnswer: 1 },
      { question: "UDP is?", options: ["Reliable", "Connection-oriented", "Unreliable", "Secure"], correctAnswer: 2 },
      { question: "Which uses port 80?", options: ["FTP", "SMTP", "HTTP", "HTTPS"], correctAnswer: 2 },
      { question: "DNS translates?", options: ["IP to MAC", "MAC to IP", "Name to IP", "IP to Name"], correctAnswer: 2 },
      { question: "Three-way handshake used by?", options: ["UDP", "TCP", "FTP", "SMTP"], correctAnswer: 1 },
      { question: "Which is not OSI layer?", options: ["Physical", "Transport", "Internet", "Session"], correctAnswer: 2 },
      { question: "Ping uses?", options: ["TCP", "UDP", "ICMP", "ARP"], correctAnswer: 2 },
      { question: "MAC address size?", options: ["32-bit", "48-bit", "64-bit", "128-bit"], correctAnswer: 1 },
      { question: "Which is connectionless?", options: ["TCP", "UDP", "FTP", "HTTP"], correctAnswer: 1 },
      { question: "HTTPS uses?", options: ["SSL/TLS", "FTP", "SMTP", "UDP"], correctAnswer: 0 },
      { question: "Firewall works at?", options: ["Network", "Transport", "Application", "All"], correctAnswer: 3 },
      { question: "Which topology uses central hub?", options: ["Bus", "Ring", "Star", "Mesh"], correctAnswer: 2 },
      { question: "Which protocol assigns IP?", options: ["DNS", "ARP", "DHCP", "ICMP"], correctAnswer: 2 },
      { question: "IPv6 length?", options: ["64-bit", "128-bit", "32-bit", "16-bit"], correctAnswer: 1 }
    ]
  },

  // ================= OOPS =================
  {
    category: "OOPS",
    questions: [
      { question: "OOPS stands for?", options: ["Object Oriented Programming System", "Object Oriented Process", "Object Order Programming", "None"], correctAnswer: 0 },
      { question: "Which supports inheritance?", options: ["C", "Java", "SQL", "HTML"], correctAnswer: 1 },
      { question: "Which hides data?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], correctAnswer: 1 },
      { question: "Runtime polymorphism uses?", options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"], correctAnswer: 1 },
      { question: "Which creates object?", options: ["class", "new", "this", "void"], correctAnswer: 1 },
      { question: "Which allows multiple forms?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], correctAnswer: 2 },
      { question: "Which keyword prevents inheritance?", options: ["static", "final", "private", "const"], correctAnswer: 1 },
      { question: "Which binds code and data?", options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"], correctAnswer: 1 },
      { question: "Compile-time polymorphism?", options: ["Overriding", "Overloading", "Inheritance", "Interface"], correctAnswer: 1 },
      { question: "Which is blueprint?", options: ["Object", "Method", "Class", "Constructor"], correctAnswer: 2 },
      { question: "Which supports abstraction?", options: ["Class", "Object", "Interface", "Method"], correctAnswer: 2 },
      { question: "Which is not OOPS concept?", options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], correctAnswer: 2 },
      { question: "Constructor is used to?", options: ["Destroy object", "Initialize object", "Access data", "Call method"], correctAnswer: 1 },
      { question: "Which keyword refers current object?", options: ["this", "super", "self", "me"], correctAnswer: 0 },
      { question: "Which allows code reuse?", options: ["Inheritance", "Encapsulation", "Abstraction", "Interface"], correctAnswer: 0 },
      { question: "Which is parent class?", options: ["Derived", "Base", "Child", "Object"], correctAnswer: 1 },
      { question: "Which is child class?", options: ["Base", "Super", "Derived", "Main"], correctAnswer: 2 },
      { question: "Which supports dynamic binding?", options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"], correctAnswer: 0 },
      { question: "Which is default access?", options: ["private", "protected", "public", "package"], correctAnswer: 3 },
      { question: "Which is not Java feature?", options: ["Platform independent", "Object oriented", "Pointer arithmetic", "Secure"], correctAnswer: 2 }
    ]
  }
];
