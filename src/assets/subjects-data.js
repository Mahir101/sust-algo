export const SUBJECTS_DATA = {
    // TIER 1 — Absolute Core
    "Structured Programming (C)": {
        id: "c-lang",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "💻",
        color: "linear-gradient(135deg, #1A2980, #26D0CE)",
        description: "Trains thinking in memory. Everything else assumes you survived this.",
        modules: [
            {
                title: "Fundamentals",
                topics: ["Memory Model", "Pointers & Addressing", "Compilation Process"],
                lessons: [
                    {
                        title: "Memory Model",
                        theory: `
# Memory Model in C

## Overview
C gives you direct access to memory through pointers. Understanding memory layout is crucial.

## Memory Segments
- **Stack**: Local variables, function calls (grows downward)
- **Heap**: Dynamic memory (malloc/free)
- **Data Segment**: Global/static variables
- **Code Segment**: Your compiled program

## Key Concepts
1. Every variable has an address
2. Addresses are just numbers
3. You can manipulate these addresses directly
                        `,
                        examples: [
                            {
                                title: "Stack vs Heap Example",
                                code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int stack_var = 10;        // Stack
    int *heap_var = malloc(sizeof(int));  // Heap
    *heap_var = 20;
    
    printf("Stack address: %p\\n", (void*)&stack_var);
    printf("Heap address: %p\\n", (void*)heap_var);
    
    free(heap_var);
    return 0;
}`
                            }
                        ],
                        practice: [
                            "Allocate an array of 100 integers on the heap",
                            "Create a function that returns a pointer to heap memory",
                            "Demonstrate a memory leak and then fix it"
                        ]
                    },
                    {
                        title: "Pointers & Addressing",
                        theory: `
# Pointers in C

## What is a Pointer?
A pointer is a variable that stores a memory address.

## Syntax
\`\`\`c
int x = 10;
int *ptr = &x;  // ptr holds address of x
*ptr = 20;      // modifies x through pointer
\`\`\`

## Pointer Arithmetic
Pointers can be incremented/decremented to traverse arrays.
                        `,
                        examples: [
                            {
                                title: "Array Traversal with Pointers",
                                code: `int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;

for(int i = 0; i < 5; i++) {
    printf("%d ", *(ptr + i));
}`
                            }
                        ],
                        practice: [
                            "Implement strlen using pointers",
                            "Swap two variables using pointers",
                            "Create a pointer to a pointer example"
                        ]
                    }
                ]
            },
            {
                title: "Control Flow",
                topics: ["Loops", "Branching", "Recursion", "Function Call Stack"],
                lessons: [
                    {
                        title: "Recursion",
                        theory: `
# Recursion in C

## Definition
A function that calls itself to solve smaller instances of the same problem.

## Base Case
CRITICAL: Every recursion needs a stopping condition.

## Call Stack
Each recursive call creates a new stack frame with its own local variables.
                        `,
                        examples: [
                            {
                                title: "Factorial (Classic)",
                                code: `int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);
}`
                            },
                            {
                                title: "Fibonacci",
                                code: `int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}`
                            }
                        ],
                        practice: [
                            "Implement power(base, exp) recursively",
                            "Write recursive binary search",
                            "Calculate GCD using Euclidean algorithm"
                        ]
                    }
                ]
            },
            {
                title: "Data Types",
                topics: ["Arrays", "Structures (struct)", "Unions", "Enums"],
                lessons: [
                    {
                        title: "Structures (struct)",
                        theory: `
# Structures in C

## Purpose
Group related data of different types together.

## Memory Layout
Struct members are stored contiguously (with possible padding).

## Syntax
\`\`\`c
struct Person {
    char name[50];
    int age;
    float salary;
};
\`\`\`
                        `,
                        examples: [
                            {
                                title: "Student Database",
                                code: `struct Student {
    int id;
    char name[100];
    float gpa;
};

struct Student s1 = {1, "Alice", 3.8};
printf("GPA: %.2f", s1.gpa);`
                            }
                        ],
                        practice: [
                            "Create a Book struct with title, author, price",
                            "Implement a function to compare two structs",
                            "Create an array of structs and sort it"
                        ]
                    }
                ]
            }
        ]
    },

    "Discrete Mathematics": {
        id: "discrete-math",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "🔢",
        color: "linear-gradient(135deg, #FF512F, #DD2476)",
        description: "The language of algorithms and theory. Without it, CS becomes cargo-cult coding.",
        modules: [
            {
                title: "Logic & Proofs",
                topics: ["Propositional Logic", "Predicates", "Proof Techniques (Induction, Contradiction)"],
                lessons: [
                    {
                        title: "Mathematical Induction",
                        theory: `
# Mathematical Induction

## Principle
To prove P(n) is true for all n ≥ n₀:

1. **Base Case**: Prove P(n₀) is true
2. **Inductive Step**: Assume P(k) is true, prove P(k+1) is true

## Why It Works
Like dominoes: if first falls and each one knocks the next, all fall.

## Example: Prove 1 + 2 + ... + n = n(n+1)/2

**Base**: n=1 → 1 = 1(2)/2 ✓

**Inductive**: Assume true for k
\`\`\`
1 + 2 + ... + k + (k+1)
= k(k+1)/2 + (k+1)      [by assumption]
= (k+1)(k+2)/2          [factor]
\`\`\`
Thus true for k+1.
                        `,
                        examples: [
                            {
                                title: "Prove 2ⁿ > n for all n ≥ 1",
                                code: `Base: n=1 → 2¹ = 2 > 1 ✓

Inductive: Assume 2^k > k
2^(k+1) = 2 · 2^k
        > 2 · k        [by assumption]
        = k + k
        > k + 1        [since k ≥ 1]

Therefore 2^(k+1) > k+1 ✓`
                            }
                        ],
                        practice: [
                            "Prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6",
                            "Prove 3 divides n³ - n for all n ≥ 1",
                            "Show that Fibonacci F(n) < 2ⁿ"
                        ]
                    }
                ]
            },
            {
                title: "Graph Theory",
                topics: ["Euler/Hamilton Paths", "Shortest Path Basics", "Graph Coloring"],
                lessons: [
                    {
                        title: "Euler Paths & Circuits",
                        theory: `
# Euler Paths and Circuits

## Definitions
- **Euler Path**: Visits every EDGE exactly once
- **Euler Circuit**: Euler path that starts and ends at same vertex

## Existence Conditions

### Euler Circuit
Graph has Euler circuit ↔ Every vertex has EVEN degree

### Euler Path
Graph has Euler path ↔ Exactly TWO vertices have odd degree

## Fleury's Algorithm
1. Start at odd-degree vertex (or any if all even)
2. Never cross a bridge unless no choice
3. Mark edges as used
                        `,
                        examples: [
                            {
                                title: "Seven Bridges of Königsberg",
                                code: `Graph has 4 vertices, all with odd degree
→ No Euler path exists
→ Cannot cross all bridges exactly once`
                            }
                        ],
                        practice: [
                            "Find Euler circuit in a 4-vertex square graph",
                            "Determine if a given graph has Euler path",
                            "Construct a graph with exactly one Euler path"
                        ]
                    }
                ]
            }
        ]
    },

    "Data Structures": {
        id: "dsa",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "🏗️",
        color: "linear-gradient(135deg, #11998e, #38ef7d)",
        description: "Where problem-solvers are separated from syntax-typists.",
        modules: [
            {
                title: "Analysis",
                topics: ["Asymptotic Notation (Big O)", "Time vs Space Complexity"],
                lessons: [
                    {
                        title: "Big O Notation",
                        theory: `
# Big O Notation

## Definition
f(n) = O(g(n)) means:
∃ constants c, n₀ such that f(n) ≤ c·g(n) for all n ≥ n₀

## Intuition
"f grows no faster than g (ignoring constants)"

## Common Classes (fastest to slowest)
1. O(1) - Constant
2. O(log n) - Logarithmic
3. O(n) - Linear
4. O(n log n) - Linearithmic
5. O(n²) - Quadratic
6. O(2ⁿ) - Exponential

## Drop Constants & Lower Terms
- O(3n + 5) → O(n)
- O(n²/2 + 100n) → O(n²)
                        `,
                        examples: [
                            {
                                title: "Analyzing Nested Loops",
                                code: `for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
        printf("%d ", i+j);  // O(1)
    }
}
// Outer: n iterations
// Inner: n iterations per outer
// Total: n × n = O(n²)`
                            },
                            {
                                title: "Binary Search",
                                code: `while(low <= high) {
    mid = (low + high) / 2;
    if(arr[mid] == target) return mid;
    else if(arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}
// Each iteration cuts search space in half
// Time: O(log n)`
                            }
                        ],
                        practice: [
                            "Analyze: Three nested loops each running n times",
                            "Find complexity of finding duplicates in unsorted array",
                            "Compare merge sort O(n log n) vs bubble sort O(n²) for n=1000"
                        ]
                    }
                ]
            },
            {
                title: "Trees",
                topics: ["BST", "AVL Trees", "Segment Trees", "Binary Indexed Trees (BIT)"],
                lessons: [
                    {
                        title: "Binary Search Trees",
                        theory: `
# Binary Search Tree (BST)

## Properties
For every node:
- All left descendants < node
- All right descendants > node

## Operations
- **Search**: O(h) where h = height
- **Insert**: O(h)
- **Delete**: O(h)

## Best Case
Balanced tree → h = log n → O(log n)

## Worst Case
Skewed tree → h = n → O(n)

## In-order Traversal
Left → Root → Right gives SORTED order
                        `,
                        examples: [
                            {
                                title: "BST Insert",
                                code: `struct Node {
    int data;
    struct Node *left, *right;
};

Node* insert(Node* root, int key) {
    if (root == NULL) return newNode(key);
    
    if (key < root->data)
        root->left = insert(root->left, key);
    else
        root->right = insert(root->right, key);
    
    return root;
}`
                            }
                        ],
                        practice: [
                            "Implement BST search",
                            "Write in-order traversal",
                            "Find minimum value in BST"
                        ]
                    }
                ]
            }
        ]
    },

    "Algorithm Design": {
        id: "algorithms",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "⚡",
        color: "linear-gradient(135deg, #CB356B, #BD3F32)",
        description: "Teaches how to think efficiently under constraints — the essence of CS.",
        modules: [
            {
                title: "Design Paradigms",
                topics: ["Divide & Conquer", "Greedy Algorithms", "Dynamic Programming"],
                lessons: [
                    {
                        title: "Dynamic Programming",
                        theory: `
# Dynamic Programming

## When to Use
Problems with:
1. **Optimal Substructure**: Optimal solution contains optimal sub-solutions
2. **Overlapping Subproblems**: Same subproblems solved multiple times

## Approaches

### Top-Down (Memoization)
- Recursion + cache
- Store results of subproblems

### Bottom-Up (Tabulation)
- Iterative
- Fill table from smallest to largest

## Steps
1. Define state/subproblem
2. Write recurrence relation
3. Determine base cases
4. Decide order of computation
                        `,
                        examples: [
                            {
                                title: "Fibonacci with DP",
                                code: `// Top-Down (Memoization)
int memo[100];
int fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib(n-1) + fib(n-2);
}

// Bottom-Up (Tabulation)
int fib_dp(int n) {
    int dp[n+1];
    dp[0] = 0; dp[1] = 1;
    for(int i = 2; i <= n; i++)
        dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}`
                            },
                            {
                                title: "0/1 Knapsack",
                                code: `int knapsack(int W, int wt[], int val[], int n) {
    int dp[n+1][W+1];
    
    for(int i = 0; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else if (wt[i-1] <= w)
                dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], 
                               dp[i-1][w]);
            else
                dp[i][w] = dp[i-1][w];
        }
    }
    return dp[n][W];
}`
                            }
                        ],
                        practice: [
                            "Longest Common Subsequence (LCS)",
                            "Coin Change Problem",
                            "Edit Distance (Levenshtein)"
                        ]
                    }
                ]
            }
        ]
    },

    "Theory of Computation": {
        id: "toc",
        tier: "Tier 1: Absolute Core (The Skeleton of CSE)",
        icon: "📐",
        color: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
        description: "Answers the deepest CS question: 'What problems are computable at all?'",
        modules: [
            {
                title: "Automata",
                topics: ["Deterministic Finite Automata (DFA)", "Nondeterministic FA (NFA)", "Regular Expressions"],
                lessons: [
                    {
                        title: "DFA vs NFA",
                        theory: `
# Deterministic vs Nondeterministic Finite Automata

## DFA (Deterministic)
- For each state & input symbol → EXACTLY ONE next state
- No ε-transitions
- Easier to implement

## NFA (Nondeterministic)
- Can have MULTIPLE next states for same input
- Can have ε-transitions (move without reading input)
- Easier to design

## Power
**DFA ≡ NFA** (equivalent in expressive power)

Every NFA can be converted to DFA using subset construction.

## When to Use
- **DFA**: Implementation, pattern matching
- **NFA**: Theoretical proofs, easier construction
                        `,
                        examples: [
                            {
                                title: "DFA for strings ending in '01'",
                                code: `States: q0 (start), q1, q2 (accept)

δ(q0, 0) = q1
δ(q0, 1) = q0
δ(q1, 0) = q1
δ(q1, 1) = q2
δ(q2, 0) = q1
δ(q2, 1) = q0

Accept: q2`
                            }
                        ],
                        practice: [
                            "Design DFA accepting binary numbers divisible by 3",
                            "Convert given NFA to DFA",
                            "Minimize a DFA using equivalence classes"
                        ]
                    }
                ]
            },
            {
                title: "Computability",
                topics: ["Turing Machines", "Halting Problem", "Decidability"],
                lessons: [
                    {
                        title: "The Halting Problem",
                        theory: `
# The Halting Problem

## Statement
Can we write a program H that determines if ANY program P halts on input I?

## Answer
**NO** - It's undecidable!

## Proof (by Contradiction)

Assume H exists:
\`\`\`
H(P, I) = {
    "YES" if P halts on I
    "NO"  if P loops forever on I
}
\`\`\`

Construct D(P):
\`\`\`
D(P) = {
    loop forever if H(P, P) = "YES"
    halt         if H(P, P) = "NO"
}
\`\`\`

Now ask: Does D(D) halt?

- If D(D) halts → H(D,D) = "YES" → D loops ❌
- If D(D) loops → H(D,D) = "NO" → D halts ❌

**CONTRADICTION!** Therefore H cannot exist.

## Implications
- Not all problems are solvable by computer
- Fundamental limitation of computation
                        `,
                        examples: [
                            {
                                title: "Related Undecidable Problems",
                                code: `1. Does program P halt on ALL inputs?
2. Are two programs equivalent?
3. Does program P print "Hello"?
4. Is a given grammar ambiguous?

All UNDECIDABLE by reduction from Halting Problem.`
                            }
                        ],
                        practice: [
                            "Explain why virus detection is theoretically impossible",
                            "Prove Rice's Theorem",
                            "Reduce Halting Problem to another problem"
                        ]
                    }
                ]
            }
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
            {
                title: "Core OOP",
                topics: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
                lessons: [
                    {
                        title: "Polymorphism",
                        theory: `
# Polymorphism in Java

## Definition
"Many forms" - same interface, different implementations

## Types

### 1. Compile-Time (Method Overloading)
\`\`\`java
class Math {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
\`\`\`

### 2. Run-Time (Method Overriding)
\`\`\`java
class Animal {
    void sound() { }
}
class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
}
class Cat extends Animal {
    void sound() { System.out.println("Meow"); }
}

Animal a = new Dog();
a.sound();  // "Bark" - determined at runtime
\`\`\`

## Benefits
- Code reusability
- Flexibility
- Maintainability
                        `,
                        examples: [
                            {
                                title: "Payment System",
                                code: `interface Payment {
    void pay(double amount);
}

class CreditCard implements Payment {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with Credit Card");
    }
}

class PayPal implements Payment {
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with PayPal");
    }
}

// Client code
Payment p = new CreditCard();
p.pay(100);  // Works with ANY Payment implementation`
                            }
                        ],
                        practice: [
                            "Create Shape hierarchy with area() method",
                            "Implement different sorting strategies",
                            "Design a notification system using polymorphism"
                        ]
                    }
                ]
            }
        ]
    },

    "Operating Systems": {
        id: "os",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🐧",
        color: "linear-gradient(135deg, #000000, #434343)",
        description: "Explains how your code actually runs when the OS stops being polite.",
        modules: [
            {
                title: "Concurrency",
                topics: ["Race Conditions", "Deadlocks", "Semaphores", "Monitors"],
                lessons: [
                    {
                        title: "Deadlock",
                        theory: `
# Deadlock in Operating Systems

## Definition
Set of processes where each is waiting for a resource held by another.

## Necessary Conditions (ALL must hold)
1. **Mutual Exclusion**: Resource can't be shared
2. **Hold and Wait**: Process holds resource while waiting for another
3. **No Preemption**: Resources can't be forcibly taken
4. **Circular Wait**: P1 waits for P2 waits for ... waits for P1

## Example
\`\`\`
Process A: Lock(R1) → Lock(R2)
Process B: Lock(R2) → Lock(R1)

Timeline:
T1: A locks R1
T2: B locks R2
T3: A waits for R2 (held by B)
T4: B waits for R1 (held by A)
DEADLOCK!
\`\`\`

## Solutions

### Prevention
Break one of the 4 conditions

### Avoidance
Banker's Algorithm - grant requests only if safe state maintained

### Detection & Recovery
Let it happen, detect, then kill/rollback process
                        `,
                        examples: [
                            {
                                title: "Dining Philosophers",
                                code: `5 philosophers at circular table
5 chopsticks between them
Need 2 chopsticks to eat

Naive solution causes deadlock:
- Each picks up left chopstick
- All wait for right chopstick forever

Solution: Resource ordering
- Number chopsticks 1-5
- Always pick up lower-numbered first`
                            }
                        ],
                        practice: [
                            "Implement Banker's Algorithm",
                            "Detect cycle in resource allocation graph",
                            "Solve Readers-Writers problem"
                        ]
                    }
                ]
            },
            {
                title: "Memory",
                topics: ["Virtual Memory", "Paging", "Segmentation", "TLB"],
                lessons: [
                    {
                        title: "Paging",
                        theory: `
# Paging

## Concept
- Divide physical memory into fixed-size **frames**
- Divide logical memory into same-size **pages**
- Map pages to frames

## Page Table
Virtual Address → Physical Address

### Example
Virtual: Page 2, Offset 100
Physical: Frame 5, Offset 100

Address Translation:
\`\`\`
Virtual = (Page# * PageSize) + Offset
Physical = (Frame# * PageSize) + Offset
\`\`\`

## Advantages
✓ No external fragmentation
✓ Easy to allocate
✓ Can run programs larger than physical memory

## Disadvantages
✗ Internal fragmentation (last page)
✗ Page table takes space
✗ Translation overhead (solved by TLB)
                        `,
                        examples: [
                            {
                                title: "Address Translation",
                                code: `Page size = 4KB = 2^12 bytes
Virtual address = 0x1234 = 4660 decimal

Page# = 4660 / 4096 = 1
Offset = 4660 % 4096 = 564

If Page Table[1] = Frame 3:
Physical = (3 * 4096) + 564 = 12,852`
                            }
                        ],
                        practice: [
                            "Calculate physical address given page table",
                            "Implement FIFO page replacement",
                            "Calculate page faults for reference string"
                        ]
                    }
                ]
            }
        ]
    },

    "Database Systems": {
        id: "db",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🗄️",
        color: "linear-gradient(135deg, #30E8BF, #FF8235)",
        description: "Data outlives code. This course teaches how to not lose it.",
        modules: [
            {
                title: "Relational Model",
                topics: ["Schema Design", "Keys (Primary/Foreign)", "Normalization (1NF-BCNF)"],
                lessons: [
                    {
                        title: "Normalization",
                        theory: `
# Database Normalization

## Purpose
Eliminate redundancy and dependency anomalies.

## Normal Forms

### 1NF (First Normal Form)
- Atomic values (no lists/arrays)
- Each column has single type
- Unique rows

### 2NF
- 1NF + No partial dependencies
- Non-key attributes fully depend on PRIMARY KEY

### 3NF
- 2NF + No transitive dependencies
- Non-key attributes depend ONLY on primary key

### BCNF (Boyce-Codd)
- 3NF + Every determinant is a candidate key

## Example

**Unnormalized:**
\`\`\`
Student(ID, Name, Courses)
1, Alice, "CS101, CS102, Math"  ❌ Not atomic
\`\`\`

**1NF:**
\`\`\`
Student(ID, Name, Course)
1, Alice, CS101
1, Alice, CS102
1, Alice, Math
\`\`\`

**2NF/3NF:**
\`\`\`
Student(ID, Name)
Enrollment(StudentID, CourseID)
Course(CourseID, Title)
\`\`\`
                        `,
                        examples: [
                            {
                                title: "Decomposition",
                                code: `Original: Order(OrderID, CustomerName, CustomerAddress, ProductName, Qty)

Issues:
- Customer info repeated per order
- Product info repeated

3NF Solution:
Customer(CustomerID, Name, Address)
Product(ProductID, Name)
Order(OrderID, CustomerID, Date)
OrderItem(OrderID, ProductID, Qty)`
                            }
                        ],
                        practice: [
                            "Normalize a university database schema",
                            "Find functional dependencies in a relation",
                            "Determine highest normal form of given schema"
                        ]
                    }
                ]
            },
            {
                title: "Transactions",
                topics: ["ACID Properties", "Concurrency Control", "Locking", "Crash Recovery"],
                lessons: [
                    {
                        title: "ACID Properties",
                        theory: `
# ACID Properties of Transactions

## Atomicity
"All or Nothing"
- Transaction completes fully or has no effect
- If interrupted, changes are rolled back

Example: Bank transfer
\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Both or neither
\`\`\`

## Consistency
Database moves from one valid state to another
- Constraints maintained
- Integrity rules enforced

## Isolation
Concurrent transactions don't interfere
- Intermediate states not visible to others

Levels:
1. Read Uncommitted (lowest)
2. Read Committed
3. Repeatable Read
4. Serializable (highest)

## Durability
Once committed, changes persist
- Survives system crashes
- Written to non-volatile storage
                        `,
                        examples: [
                            {
                                title: "Lost Update Problem",
                                code: `Time | T1                  | T2
-----|---------------------|--------------------
1    | Read(X) = 100      |
2    |                     | Read(X) = 100
3    | X = X - 50 = 50    |
4    | Write(X) = 50      |
5    |                     | X = X + 100 = 200
6    |                     | Write(X) = 200
7    | Commit             |
8    |                     | Commit

Final X = 200 (T1's update lost!)

Solution: Locking or serializable isolation`
                            }
                        ],
                        practice: [
                            "Identify dirty read scenario",
                            "Implement two-phase locking protocol",
                            "Resolve deadlock in transaction schedule"
                        ]
                    }
                ]
            }
        ]
    },

    "Computer Networks": {
        id: "net",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🌐",
        color: "linear-gradient(135deg, #00c6ff, #0072ff)",
        description: "Modern software is never alone — it always talks to something else.",
        modules: [
            {
                title: "Transport Layer",
                topics: ["TCP (Reliable)", "UDP", "Congestion Control"],
                lessons: [
                    {
                        title: "TCP vs UDP",
                        theory: `
# TCP vs UDP

## TCP (Transmission Control Protocol)

### Characteristics
✓ **Connection-oriented**: 3-way handshake
✓ **Reliable**: Guarantees delivery
✓ **Ordered**: Packets arrive in sequence
✓ **Flow control**: Prevents overwhelming receiver
✓ **Congestion control**: Adapts to network conditions

### Use Cases
- Web (HTTP/HTTPS)
- Email (SMTP)
- File transfer (FTP)
- Anything requiring reliability

## UDP (User Datagram Protocol)

### Characteristics
✓ **Connectionless**: No handshake
✓ **Unreliable**: No delivery guarantee
✓ **Unordered**: Packets may arrive out of sequence
✓ **Fast**: No overhead
✗ No flow/congestion control

### Use Cases
- Video streaming
- Online gaming
- DNS lookups
- VoIP (Skype, Zoom)

## 3-Way Handshake (TCP)
\`\`\`
Client                Server
  |                     |
  |--- SYN (seq=x) ---->|
  |                     |
  |<-- SYN-ACK ---------|
  |   (seq=y, ack=x+1) |
  |                     |
  |--- ACK (ack=y+1) -->|
  |                     |
CONNECTION ESTABLISHED
\`\`\`
                        `,
                        examples: [
                            {
                                title: "When to Use Which",
                                code: `TCP:
- Banking transaction ✓ (needs reliability)
- Email ✓ (order matters)
- Downloading file ✓ (completeness critical)

UDP:
- Live sports stream ✓ (speed > perfection)
- Multiplayer game ✓ (old data useless)
- DNS query ✓ (small, can retry)`
                            }
                        ],
                        practice: [
                            "Trace TCP 3-way handshake packets",
                            "Calculate TCP window size",
                            "Implement simple UDP echo server"
                        ]
                    }
                ]
            }
        ]
    },

    "Software Engineering": {
        id: "se",
        tier: "Tier 2: Systems & Software Reality",
        icon: "🛠️",
        color: "linear-gradient(135deg, #614385, #516395)",
        description: "This course fights entropy in large codebases.",
        modules: [
            {
                title: "Design",
                topics: ["Architecture Patterns", "UML", "Design Patterns (GoF)", "SOLID Principles"],
                lessons: [
                    {
                        title: "SOLID Principles",
                        theory: `
# SOLID Principles

## S - Single Responsibility Principle
A class should have ONE reason to change.

**Bad:**
\`\`\`java
class Employee {
    void calculatePay() { }
    void saveToDatabase() { }  // Different responsibility!
}
\`\`\`

**Good:**
\`\`\`java
class Employee {
    void calculatePay() { }
}
class EmployeeRepository {
    void save(Employee e) { }
}
\`\`\`

## O - Open/Closed Principle
Open for extension, closed for modification.

Use abstraction:
\`\`\`java
interface Shape {
    double area();
}
class Circle implements Shape { ... }
class Square implements Shape { ... }
\`\`\`

## L - Liskov Substitution Principle
Subclass should be substitutable for base class.

\`\`\`java
Vehicle v = new Car();  // Must work correctly
\`\`\`

## I - Interface Segregation Principle
No client should depend on methods it doesn't use.

Better: Multiple small interfaces than one large one.

## D - Dependency Inversion
Depend on abstractions, not concretions.

\`\`\`java
class Editor {
    Printer p;  // ❌ Depends on concrete class
}

class Editor {
    IPrinter p;  // ✓ Depends on interface
}
\`\`\`
                        `,
                        examples: [
                            {
                                title: "Violating SRP",
                                code: `class UserService {
    void registerUser() { }
    void sendEmail() { }      // Email responsibility
    void logToFile() { }      // Logging responsibility
    void validateInput() { }  // Validation responsibility
}

Fix: Separate concerns
- UserService (business logic)
- EmailService
- Logger
- Validator`
                            }
                        ],
                        practice: [
                            "Refactor code to follow SRP",
                            "Identify LSP violations",
                            "Apply Dependency Inversion to project"
                        ]
                    }
                ]
            }
        ]
    },

    // TIER 3 — Intelligence & Specialization
    "Artificial Intelligence": {
        id: "ai",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🧠",
        color: "linear-gradient(135deg, #e1eec3, #f05053)",
        description: "Search algorithms, Knowledge representation, Problem solving.",
        modules: [
            {
                title: "Problem Solving",
                topics: ["Search Algorithms (BFS/DFS/A*)", "Constraint Satisfaction"],
                lessons: [
                    {
                        title: "A* Search Algorithm",
                        theory: `
# A* Search Algorithm

## Idea
Best-first search guided by heuristic

## Evaluation Function
f(n) = g(n) + h(n)

- **g(n)**: Cost from start to n
- **h(n)**: Estimated cost from n to goal (heuristic)
- **f(n)**: Estimated total cost

## Algorithm
1. Add start to open list
2. Loop:
   - Pick node with lowest f(n)
   - If goal, return path
   - Expand neighbors, update costs
   - Add to open list

## Admissibility
h(n) must NEVER overestimate (h ≤ actual cost)

## Optimality
If h is admissible, A* finds optimal solution.

## Example Heuristics

### 8-Puzzle
- Manhattan distance (sum of distances)
- Misplaced tiles

### Pathfinding
- Euclidean distance
- Manhattan distance (grid)
                        `,
                        examples: [
                            {
                                title: "Grid Pathfinding",
                                code: `Start: (0,0)  Goal: (4,4)

Manhattan: |x1-x2| + |y1-y2|
At (2,1): 
g = 3 (moves made)
h = |2-4| + |1-4| = 5
f = 3 + 5 = 8

A* picks lowest f at each step`
                            }
                        ],
                        practice: [
                            "Implement A* for maze solving",
                            "Design heuristic for Rubik's Cube",
                            "Compare A* with Dijkstra performance"
                        ]
                    }
                ]
            }
        ]
    },

    "Machine Learning": {
        id: "ml",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🤖",
        color: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)",
        description: "Supervised & unsupervised learning, Neural networks, Optimization.",
        modules: [
            {
                title: "Basics",
                topics: ["Regression", "Classification", "Bias-Variance Tradeoff"],
                lessons: [
                    {
                        title: "Bias-Variance Tradeoff",
                        theory: `
# Bias-Variance Tradeoff

## Decomposition of Error
Total Error = Bias² + Variance + Irreducible Error

## Bias
Error from wrong assumptions in model.

**High Bias** = Underfitting
- Model too simple
- Misses patterns
- Poor on training AND test data

Example: Linear model for curved data

## Variance
Error from sensitivity to training data fluctuations.

**High Variance** = Overfitting
- Model too complex
- Memorizes noise
- Great on training, poor on test

Example: 20th degree polynomial for simple data

## Tradeoff
↑ Model Complexity
- ↓ Bias (fits training better)
- ↑ Variance (less generalizable)

## Sweet Spot
Minimize total error by balancing both.

## Techniques

### Reduce Variance
- More data
- Regularization (L1/L2)
- Ensemble methods

### Reduce Bias
- More features
- More complex model
- Less regularization
                        `,
                        examples: [
                            {
                                title: "Polynomial Regression",
                                code: `Degree 1: y = mx + b
High bias, low variance
Underfits

Degree 10: y = a₁₀x¹⁰ + ... + a₁x + b
Low bias, high variance
Overfits

Degree 3-4: Just right!
Balanced`
                            }
                        ],
                        practice: [
                            "Plot learning curves for overfit model",
                            "Apply cross-validation to find best complexity",
                            "Use regularization to reduce variance"
                        ]
                    }
                ]
            }
        ]
    },

    "Web Technologies": {
        id: "web",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🕸️",
        color: "linear-gradient(135deg, #C9FFBF, #FFAFBD)",
        description: "Frontend, Backend, MVC architecture, REST APIs.",
        modules: [
            {
                title: "Architecture",
                topics: ["MVC Pattern", "RESTful APIs", "Microservices"],
                lessons: [
                    {
                        title: "REST API Design",
                        theory: `
# RESTful API Design

## Principles

### 1. Resource-Based
URLs represent resources, not actions.

**Good:** \`GET /users/123\`
**Bad:** \`GET /getUser?id=123\`

### 2. HTTP Methods
- **GET**: Retrieve data (safe, idempotent)
- **POST**: Create new resource
- **PUT**: Update entire resource (idempotent)
- **PATCH**: Update part of resource
- **DELETE**: Remove resource (idempotent)

### 3. Stateless
Each request contains all needed info.

### 4. Representation
JSON is standard format.

## Best Practices

### Naming
- Plural nouns: \`/users\`, \`/posts\`
- Hierarchical: \`/users/123/posts\`
- Lowercase, hyphens: \`/order-items\`

### Status Codes
- 200: OK
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

### Versioning
\`/api/v1/users\`
                        `,
                        examples: [
                            {
                                title: "Blog API",
                                code: `GET    /api/v1/posts           # List all posts
GET    /api/v1/posts/5         # Get post #5
POST   /api/v1/posts           # Create new post
PUT    /api/v1/posts/5         # Update post #5
DELETE /api/v1/posts/5         # Delete post #5

GET    /api/v1/posts/5/comments  # Comments of post #5`
                            }
                        ],
                        practice: [
                            "Design REST API for e-commerce site",
                            "Implement pagination and filtering",
                            "Add authentication to API endpoints"
                        ]
                    }
                ]
            }
        ]
    },

    "Computer Graphics": {
        id: "graphics",
        tier: "Tier 3: Intelligence & Specialization",
        icon: "🎨",
        color: "linear-gradient(135deg, #8360c3, #2ebf91)",
        description: "Rendering concepts, Multimedia systems.",
        modules: [
            {
                title: "Rendering Pipeline",
                topics: ["Rasterization", "Transformations", "Clipping", "Shading"],
                lessons: [
                    {
                        title: "3D Transformations",
                        theory: `
# 3D Transformations

## Basic Transformations

### Translation
Move object in 3D space
\`\`\`
T(tx, ty, tz) = [
  1  0  0  tx
  0  1  0  ty
  0  0  1  tz
  0  0  0  1
]
\`\`\`

### Scaling
Resize object
\`\`\`
S(sx, sy, sz) = [
  sx 0  0  0
  0  sy 0  0
  0  0  sz 0
  0  0  0  1
]
\`\`\`

### Rotation (around Z-axis)
\`\`\`
Rz(θ) = [
  cos(θ) -sin(θ) 0  0
  sin(θ)  cos(θ) 0  0
  0       0      1  0
  0       0      0  1
]
\`\`\`

## Homogeneous Coordinates
[x, y, z, 1] allows matrix operations.

## Composition
Combine transformations:
\`\`\`
M = T · R · S
\`\`\`

Order matters!
T·R·S ≠ S·R·T

## Viewing Pipeline
1. Model coords → World coords
2. World → Camera/Eye coords
3. Eye → Clip coords (projection)
4. Clip → Screen coords
                        `,
                        examples: [
                            {
                                title: "Rotate then Translate",
                                code: `Point: (1, 0, 0)

1. Rotate 90° around Z:
   (0, 1, 0)

2. Translate by (5, 0, 0):
   (5, 1, 0)

Matrix: T(5,0,0) · Rz(90°) · Point`
                            }
                        ],
                        practice: [
                            "Implement 3x3 rotation matrices",
                            "Calculate composite transformation",
                            "Build view matrix from camera position"
                        ]
                    }
                ]
            }
        ]
    }
};
