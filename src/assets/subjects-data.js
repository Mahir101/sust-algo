export const SUBJECTS_DATA = {
    // TIER 1 — Absolute Core
    "Structured Programming (C)": {
        id: "c-lang",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "💻",
        color: "linear-gradient(135deg, #1A2980, #26D0CE)",
        description: "Trains thinking in memory. Everything else assumes you survived this.",
        modules: [
            { title: "Fundamentals", topics: ["Memory Model", "Pointers & Addressing", "Compilation Process"] },
            { title: "Control Flow", topics: ["Loops", "Branching", "Recursion", "Function Call Stack"] },
            { title: "Data Types", topics: ["Arrays", "Structures (struct)", "Unions", "Enums"] },
            { title: "Low Level", topics: ["Bitwise Operations", "Macros", "File I/O", "Memory Management (malloc/free)"] },
            { title: "Basic Algorithms", topics: ["Linear/Binary Search", "Bubble/Selection/Insertion Sort"] }
        ]
    },
    "Discrete Mathematics": {
        id: "discrete-math",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "🔢",
        color: "linear-gradient(135deg, #FF512F, #DD2476)",
        description: "The language of algorithms and theory. Without it, CS becomes cargo-cult coding.",
        modules: [
            { title: "Logic & Proofs", topics: ["Propositional Logic", "Predicates", "Proof Techniques (Induction, Contradiction)"] },
            { title: "Sets & Relations", topics: ["Set Theory", "Functions", "Relations (Equivalence, Partial Order)"] },
            { title: "Graph Theory", topics: ["Euler/Hamilton Paths", "Shortest Path Basics", "Graph Coloring"] },
            { title: "Trees", topics: ["Binary Trees", "Spanning Trees", "Huffman Coding"] },
            { title: "Combinatorics", topics: ["Permutations", "Combinations", "Pigeonhole Principle"] },
            { title: "Boolean Algebra", topics: ["Logic Gates", "Circuit Minimization", "Karnaugh Maps"] }
        ]
    },
    "Data Structures": {
        id: "dsa",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "🏗️",
        color: "linear-gradient(135deg, #11998e, #38ef7d)",
        description: "Where problem-solvers are separated from syntax-typists.",
        modules: [
            { title: "Analysis", topics: ["Asymptotic Notation (Big O)", "Time vs Space Complexity"] },
            { title: "Linear Structures", topics: ["Linked Lists (Singly/Doubly)", "Stacks", "Queues", "Deques"] },
            { title: "Trees", topics: ["BST", "AVL Trees", "Segment Trees", "Binary Indexed Trees (BIT)"] },
            { title: "Heaps", topics: ["Binary Heaps", "Priority Queues", "Fibonacci Heaps"] },
            { title: "Advanced", topics: ["Disjoint Sets (Union-Find)", "Suffix Trees/Arrays", "Bloom Filters"] },
            { title: "Graph Algos", topics: ["BFS/DFS", "Strongly Connected Components", "Kruskal/Prim MST"] }
        ]
    },
    "Algorithm Design": {
        id: "algorithms",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "⚡",
        color: "linear-gradient(135deg, #CB356B, #BD3F32)",
        description: "Teaches how to think efficiently under constraints — the essence of CS.",
        modules: [
            { title: "Design Paradigms", topics: ["Divide & Conquer", "Greedy Algorithms", "Dynamic Programming"] },
            { title: "Graph Algorithms", topics: ["Shortest Path (Dijkstra, Bellman-Ford)", "Network Flow (Ford-Fulkerson)", "All-Pairs Shortest Path"] },
            { title: "Search", topics: ["Backtracking", "Branch & Bound", "A* Search"] },
            { title: "String Matching", topics: ["KMP Algorithm", "Rabin-Karp", "Tries"] },
            { title: "Theory", topics: ["P vs NP", "NP-Completeness", "Reductions"] },
            { title: "Advanced", topics: ["FFT", "Range Minimum Query (RMQ)", "LCA", "Geometry Algorithms"] }
        ]
    },
    "Theory of Computation": {
        id: "toc",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "📐",
        color: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
        description: "Answers the deepest CS question: 'What problems are computable at all?'",
        modules: [
            { title: "Automata", topics: ["Deterministic Finite Automata (DFA)", "Nondeterministic FA (NFA)", "Regular Expressions"] },
            { title: "Context-Free", topics: ["Pushdown Automata", "Context-Free Grammars", "Pumping Lemma"] },
            { title: "Computability", topics: ["Turing Machines", "Halting Problem", "Decidability"] },
            { title: "Complexity", topics: ["Time/Space Complexity", "P, NP, PSPACE Classes"] }
        ]
    },

    // TIER 2 — Systems & Software Reality
    "OOP (Java)": {
        id: "oop",
        tier: "Tier 2: Systems & Software Reality",
        icon: "☕",
        color: "linear-gradient(135deg, #F37335, #FDC830)",
        description: "Bridges theory → real software systems.",
        modules: [
            { title: "Core OOP", topics: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"] },
            { title: "Java Internals", topics: ["JVM Architecture", "Bytecode", "Garbage Collection"] },
            { title: "Advanced Java", topics: ["Generics", "Collections Framework", "Lambda Expressions", "Streams API"] },
            { title: "Concurrency", topics: ["Threads", "Runnable", "Synchronization", "Executors"] },
            { title: "Software Construction", topics: ["Exception Handling", "Modules", "GUI (Swing/JavaFX)"] }
        ]
    },
    "Operating Systems": {
        id: "os",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🐧",
        color: "linear-gradient(135deg, #000000, #434343)",
        description: "Explains how your code actually runs when the OS stops being polite.",
        modules: [
            { title: "Process Management", topics: ["Processes vs Threads", "Scheduling Algorithms", "Context Switching"] },
            { title: "Concurrency", topics: ["Race Conditions", "Deadlocks", "Semaphores", "Monitors"] },
            { title: "Memory", topics: ["Virtual Memory", "Paging", "Segmentation", "TLB"] },
            { title: "Persistence", topics: ["File Systems", "Journaling", "I/O Management", "RAID"] },
            { title: "Kernel", topics: ["System Calls", "Interrupts", "User vs Kernel Mode"] }
        ]
    },
    "Database Systems": {
        id: "db",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🗄️",
        color: "linear-gradient(135deg, #30E8BF, #FF8235)",
        description: "Data outlives code. This course teaches how to not lose it.",
        modules: [
            { title: "Relational Model", topics: ["Schema Design", "Keys (Primary/Foreign)", "Normalization (1NF-BCNF)"] },
            { title: "SQL", topics: ["Queries", "Joins", "Aggregates", "Subqueries"] },
            { title: "Internals", topics: ["Indexing (B+ Trees)", "Query Processing", "Query Optimization"] },
            { title: "Transactions", topics: ["ACID Properties", "Concurrency Control", "Locking", "Crash Recovery"] }
        ]
    },
    "Computer Networks": {
        id: "net",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🌐",
        color: "linear-gradient(135deg, #00c6ff, #0072ff)",
        description: "Modern software is never alone — it always talks to something else.",
        modules: [
            { title: "Architecture", topics: ["OSI Model", "TCP/IP Stack", "Packet Switching"] },
            { title: "Application Layer", topics: ["HTTP/S", "DNS", "SMTP", "Socket Programming"] },
            { title: "Transport Layer", topics: ["TCP (Reliable)", "UDP", "Congestion Control"] },
            { title: "Network Layer", topics: ["IP Addressing", "Routing (OSPF, BGP)", "NAT"] },
            { title: "Link Layer", topics: ["Ethernet", "WiFi", "Error Detection", "MAC"] }
        ]
    },
    "Software Engineering": {
        id: "se",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🛠️",
        color: "linear-gradient(135deg, #614385, #516395)",
        description: "This course fights entropy in large codebases.",
        modules: [
            { title: "Processes", topics: ["SDLC", "Agile/Scrum", "Waterfall", "DevOps"] },
            { title: "Design", topics: ["Architecture Patterns", "UML", "Design Patterns (GoF)", "SOLID Principles"] },
            { title: "Quality", topics: ["Testing (Unit/Integration)", "TDD", "Code Review"] },
            { title: "Management", topics: ["Requirements Engineering", "Maintenance", "Project Management"] }
        ]
    },

    // TIER 3 — Intelligence, Interaction & Specialization
    "Artificial Intelligence": {
        id: "ai",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🧠",
        color: "linear-gradient(135deg, #e1eec3, #f05053)",
        description: "Search algorithms, Knowledge representation, Problem solving.",
        modules: [
            { title: "Problem Solving", topics: ["Search Algorithms (BFS/DFS/A*)", "Constraint Satisfaction"] },
            { title: "Logic", topics: ["Propositional Logic", "First-Order Logic", "Inference"] },
            { title: "Knowledge", topics: ["Knowledge Representation", "Ontologies", "Planning"] },
            { title: "Adversarial", topics: ["Game Theory", "Minimax", "Alpha-Beta Pruning"] }
        ]
    },
    "Machine Learning": {
        id: "ml",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🤖",
        color: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)",
        description: "Supervised & unsupervised learning, Neural networks, Optimization.",
        modules: [
            { title: "Basics", topics: ["Regression", "Classification", "Bias-Variance Tradeoff"] },
            { title: "Algorithms", topics: ["Decision Trees", "SVM", "k-NN", "Naive Bayes"] },
            { title: "Unsupervised", topics: ["Clustering (K-Means)", "Dimensionality Reduction (PCA)"] },
            { title: "Deep Learning", topics: ["Neural Networks", "Backpropagation", "CNNs", "Optimization"] }
        ]
    },
    "Web Technologies": {
        id: "web",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🕸️",
        color: "linear-gradient(135deg, #C9FFBF, #FFAFBD)",
        description: "Frontend, Backend, MVC architecture, REST APIs.",
        modules: [
            { title: "Frontend", topics: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation"] },
            { title: "Backend", topics: ["Server-side Scripting (PHP/Node)", "Databases", "Authentication"] },
            { title: "Architecture", topics: ["MVC Pattern", "RESTful APIs", "Microservices"] },
            { title: "Modern Web", topics: ["React/Vue", "WebSockets", "PWA", "Security (XSS/CSRF)"] }
        ]
    },
    "Computer Graphics": {
        id: "graphics",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🎨",
        color: "linear-gradient(135deg, #8360c3, #2ebf91)",
        description: "Rendering concepts, Multimedia systems.",
        modules: [
            { title: "Rendering Pipeline", topics: ["Rasterization", "Transformations", "Clipping", "Shading"] },
            { title: "Modeling", topics: ["Polygon Meshes", "Curves & Surfaces", "Texture Mapping"] },
            { title: "Ray Tracing", topics: ["Ray Methods", "Global Illumination", "Shadows"] },
            { title: "Multimedia", topics: ["Compression", "Audio/Video Processing", "Animation"] }
        ]
    }
};
