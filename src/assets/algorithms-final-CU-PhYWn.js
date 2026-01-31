import{S as o,D as r}from"./solution-viewer-CReZtHwQ.js";import"./main-DaT4__Z1.js";const s={"Fall-24":[{id:"Fall24-Final-Q1",title:"Graph Representation",description:"Check connection in O(1).",problem:`a) Which graph representation allows checking if two buildings have a bridge in O(1)?
b) Find SCCs.
c) Check if every building is Accessible (can visit others and return).`,type:"coding",visualType:"graph",pedagogy:{question:"Check connection in O(1) and analyze accessibility.",breakdown:["Adjacency Matrix allows O(1) edge lookup.","Accessible means being part of a Strongly Connected Component (SCC).","Algorithm: Find SCCs (Tarjan's or Kosaraju's).","If SCC size > 1 or (size == 1 and self-loop), node is accessible."],key_mapping:{"O(1) check":"Adjacency Matrix [u][v]",Accessible:"Part of a Cycle / SCC","Visit others and return":"Strong Connectivity"},concept_selection:{selected:"SCC (Strongly Connected Components)",reason:"Accessibility requires cycles, which are the core property of SCCs."},structural_plan:{default_algo:"Tarjan's",modifications:["Check SCC size and self-loops"]}},visualizer:{type:"graph",initialState:{nodes:[{id:0,label:"A",x:100,y:100},{id:1,label:"B",x:200,y:100},{id:2,label:"C",x:150,y:200}],edges:[{source:0,target:1},{source:1,target:2},{source:2,target:0}]}},simulation:{narrative_steps:[{text:"We need O(1) edge lookup? Use Adjacency Matrix.",canvasAction:"RESET"},{text:"To check accessibility, we find SCCs.",canvasAction:"HIGHLIGHT_NODE",data:{value:0}},{text:"A-B-C form a cycle (SCC size 3). All accessible.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}}],sample_io:{input:"Graph G",expected_output:"SCCs: {A,B,C}"}},javaCode:`/*
a) Adjacency Matrix allows O(1) check for edge existence (matrix[i][j] == 1).

b) SCC Algorithm (Kosaraju or Tarjan):
   1. DFS and push nodes to stack by finish time.
   2. Transpose graph.
   3. Pop from stack and DFS on transpose to find SCCs.

c) Accessibility Check:
   Algorithm:
   1. Find SCCs.
   2. If an SCC has size > 1, all nodes in it are accessible.
   3. If SCC size == 1, check if it has self-loop. If yes, accessible. Else, no.
*/`,pythonCode:"# See Java comments."},{id:"Fall24-Final-Q2",title:"Min Energy Path",description:"Path with minimum energy (Dijkstra).",problem:`Find path from 1 to N with minimum energy (weights).
a) Algorithm? Dijkstra's Algorithm (if weights non-negative).
b) Energy drink (negative weights)? Dijkstra fails. Use Bellman-Ford.
c) MST with mandatory edges.`,type:"coding",visualType:"graph",pedagogy:{question:"Find min energy path. Handle negative weights.",breakdown:["Standard min path? Dijkstra (Greedy).","Negative weights (energy drink)? Dijkstra fails.","Solution: Bellman-Ford handles negative edges."],key_mapping:{"Min Energy":"Shortest Path","Energy Drink (-weight)":"Negative Edge",Dijkstra:"Fails with negative edges"},concept_selection:{selected:"Bellman-Ford",reason:"Dijkstra is faster but incorrect for negative weights. Bellman-Ford is robust."},structural_plan:{default_algo:"Bellman-Ford",modifications:[]}},visualizer:{type:"graph",initialState:{nodes:[{id:0,label:"Start"},{id:1,label:"End"}],edges:[{source:0,target:1,label:"-5"}]}},simulation:{narrative_steps:[{text:"Relax edges V-1 times.",canvasAction:"RESET"},{text:"Edge with -5 reduces cost correctly.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}}],sample_io:{input:"Graph",expected_output:"Min Cost"}},javaCode:`/*
a) Dijkstra's Algorithm:
   - Efficient for non-negative weights.
   - Time: O(E log V).

b) Negative Weights (Energy Drink):
   - Dijkstra fails.
   - Use Bellman-Ford Algorithm.
   - Time: O(VE).

c) Modified Kruskal's for Mandatory Edges:
   1. Add all "important" edges to the MST first.
   2. Run standard Kruskal's for remaining edges.
*/`,pythonCode:"# See Java comments."},{id:"Fall24-Final-Q3",title:"Huffman Coding",description:"Construct Huffman Tree and encode.",problem:`Frequencies: A:45, B:13, C:12, D:16, E:9, F:9, G:12.
a) Construct Tree. Calculate space saved.
b) Huffman Codes.`,type:"coding",visualType:"tree",pedagogy:{question:"Construct Huffman Tree for given frequencies.",breakdown:["Create leaf nodes for each character.","Put all in a Priority Queue (Min-Heap).","Extract two smallest, combine, insert new node.","Repeat until one node (Root) remains."],key_mapping:{Frequencies:"Priority / Weight",Combine:"Create parent with sum of weights","Left/Right":"0 / 1 bit"},concept_selection:{selected:"Greedy Strategy (Huffman)",reason:"Locally optimal choice (merging smallest) leads to globally optimal prefix codes."},structural_plan:{default_algo:"Huffman Coding",modifications:[]}},visualizer:{type:"tree",initialState:[116,45,71,29,42,13,16,18,24]},simulation:{narrative_steps:[{text:"Pop E(9), F(9). Combine -> 18.",canvasAction:"HIGHLIGHT_NODE",data:{value:18}},{text:"Pop C(12), G(12). Combine -> 24.",canvasAction:"HIGHLIGHT_NODE",data:{value:24}},{text:"Eventually Root is 116.",canvasAction:"HIGHLIGHT_NODE",data:{value:116}}],sample_io:{input:"Freqs",expected_output:"Tree Constructed"}},javaCode:`/*
a) Huffman Tree Construction:
   Priority Queue: [(E,9), (F,9), (C,12), (G,12), (B,13), (D,16), (A,45)]
   1. Pop E, F -> (EF, 18)
   2. Pop C, G -> (CG, 24)
   3. Pop B, D -> (BD, 29)
   4. Pop EF, CG -> (EFCG, 42)
   5. Pop BD, EFCG -> (BDEFCG, 71)
   6. Pop A, BDEFCG -> (Root, 116)

   Space Calculation:
   Total chars: 116.
   Fixed 3-bit: 116 * 3 = 348 bits.
   Huffman: Sum(freq * depth).
   
b) Codes:
   A: 0, B: 100, D: 101, E: 1100, F: 1101, C: 1110, G: 1111
*/`,pythonCode:"# See Java comments."},{id:"Fall24-Final-Q4",title:"DP & LCS",description:"LCS Table analysis.",problem:`LCS of S=X1X2X3X4 and T=Y1Y2Y3Y4.
Analyze DP table C.
i. C[0][0] represents? LCS of empty prefixes.
ii. X1 vs Y4?`,type:"coding",visualType:"matrix",pedagogy:{question:"Analyze DP Table for LCS.",breakdown:["C[i][j] stores length of LCS of X[0..i] and Y[0..j].","If X[i] == Y[j], C[i][j] = 1 + C[i-1][j-1].","Else, C[i][j] = max(C[i-1][j], C[i][j-1])."],key_mapping:{"Diagonal Arrow":"Match (Character included)","Left/Up Arrow":"Mismatch (Skip character)","C[i][j]":"LCS Length"},concept_selection:{selected:"Dynamic Programming",reason:"Overlapping subproblems (prefixes) and optimal substructure."},structural_plan:{default_algo:"LCS DP",modifications:[]}},visualizer:{type:"matrix",initialState:[[0,0,0,0,0],[0,0,1,1,1],[0,1,1,1,2]]},simulation:{narrative_steps:[{text:"C[0][0] is 0 (base case).",canvasAction:"RESET"},{text:"If characters match, we come from diagonal.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}}],sample_io:{input:"S, T",expected_output:"LCS Length"}},javaCode:`/*
i. C[0][0] = 0 (Base case, empty strings).
ii. If C[i][j] > C[i-1][j] and C[i][j] > C[i][j-1], then X_i == Y_j?
    Depends on specific values.
    Usually, diagonal increment implies match.
    Horizontal/Vertical carry over implies mismatch.
*/`,pythonCode:"# See Java comments."}],"Spring-24":[{id:"Spring24-Final-Q1",title:"Clothing Order",description:"Topological Sort for clothing dependencies.",problem:`Find proper order of clothing items based on dependencies.
Dependencies:
1. undershorts, watch, socks independent
2. pants after undershorts
3. shoes after pants, undershorts, socks
4. belt after pants, shirt
5. tie after shirt
6. jacket after tie, belt

a. Algorithm? Topological Sort (DFS based or Kahn's).
b. Simulation (Alphabetical tie-breaking).
c. SCCs?`,type:"coding",visualType:"graph",javaCode:`/*
a. Algorithm: Topological Sort
   Reason: The problem models dependencies (DAG). We need a linear ordering.

b. Simulation (Kahn's Algorithm with Priority Queue for alphabetical order):
   Nodes: undershorts, watch, socks, pants, shoes, belt, shirt, tie, jacket.
   Edges:
   undershorts -> pants
   undershorts -> shoes
   socks -> shoes
   pants -> shoes
   pants -> belt
   shirt -> belt
   shirt -> tie
   tie -> jacket
   belt -> jacket

   In-degrees:
   undershorts: 0, watch: 0, socks: 0, shirt: 0
   pants: 1 (undershorts)
   shoes: 3 (pants, undershorts, socks)
   belt: 2 (pants, shirt)
   tie: 1 (shirt)
   jacket: 2 (tie, belt)

   Queue (Alphabetical): [shirt, socks, undershorts, watch]
   1. Pop shirt. Order: shirt.
      Update neighbors: belt (1), tie (0).
      Push tie. Queue: [socks, tie, undershorts, watch]
   2. Pop socks. Order: shirt, socks.
      Update neighbors: shoes (2).
   3. Pop tie. Order: shirt, socks, tie.
      Update neighbors: jacket (1).
   4. Pop undershorts. Order: shirt, socks, tie, undershorts.
      Update neighbors: pants (0), shoes (1).
      Push pants. Queue: [pants, watch]
   5. Pop pants. Order: ..., pants.
      Update neighbors: shoes (0), belt (0).
      Push belt, shoes. Queue: [belt, shoes, watch]
   6. Pop belt. Order: ..., belt.
      Update neighbors: jacket (0).
      Push jacket. Queue: [jacket, shoes, watch]
   7. Pop jacket. Order: ..., jacket.
   8. Pop shoes. Order: ..., shoes.
   9. Pop watch. Order: ..., watch.

   Final Order: shirt, socks, tie, undershorts, pants, belt, jacket, shoes, watch.

c. SCCs:
   Since it's a DAG (dependencies imply no cycles for a valid dressing order), 
   each node is its own SCC. No non-trivial SCCs.
*/`,pythonCode:"# See Java comments."},{id:"Spring24-Final-Q2",title:"Dijkstra & MST",description:"Dijkstra with negative edge, Modified Dijkstra, MST.",problem:`a. Dijkstra with one negative edge. Why correct?
   Dijkstra is greedy. If negative edge doesn't cause relaxation of already visited node (or no negative cycle), it might work by chance, but generally unsafe.
   However, if the negative edge is outgoing from Source? Or specific structure?
   Problem asks "Why ... will find correct answers".
   Maybe the negative edge is not part of any shortest path? Or it's at the end?

b. Modified Dijkstra (Insert on update vs Insert all at start).
   Standard: Insert all with infinity? Or Insert source only?
   Standard (Optimized): Insert source. Insert others when discovered/updated.
   Proposed: Insert source. Whenever updated, insert.
   This IS the standard implementation (using Min-Heap).
   Wait, "Insert all ... at the beginning" is the textbook version (O(V log V) or O(V^2)).
   "Insert only source... whenever updated, insert" is the Priority Queue version (O(E log V)).
   Complexity difference?
   Textbook (Array/List): O(V^2).
   PQ Version: O(E log V).
   If graph is dense (E ~ V^2), O(V^2 log V) vs O(V^2).
   So PQ version is faster for sparse, slower for very dense?
   Actually, standard PQ Dijkstra IS the proposed one.
   
c. MST Construction (Prim's or Kruskal's).`,type:"coding",visualType:"graph",javaCode:`/*
a. Dijkstra with Negative Edge:
   Dijkstra fails if a shorter path is found through a "visited" node via a negative edge.
   It works if the negative edge does not lead to a relaxation of a finalized node.
   E.g., if the negative edge is the first edge from source and no other path reaches its destination with smaller cost?
   Or if the graph is a DAG (but Dijkstra doesn't assume DAG).

b. Modified Dijkstra:
   The proposed change (insert on update) allows re-processing vertices.
   If we don't track "visited" (finalized) set, and just process queue:
   This becomes similar to SPFA (Shortest Path Faster Algorithm) or Bellman-Ford optimization?
   If we allow re-insertion, it can handle negative edges (unless negative cycle).
   But complexity can degrade to exponential in worst case without "visited" check.
   With non-negative edges, it behaves like standard Dijkstra O(E log V).
*/`,pythonCode:"# See Java comments."},{id:"Spring24-Final-Q3",title:"Course Selection",description:"Knapsack-like DP for course selection.",problem:`Select courses to maximize value within credit limit (9).
Courses:
PHY112 (1, 9)
CSE330 (2, 7)
CSE331 (3, 15)
CSE370 (4, 12)
CSE499 (5, 16)

a. DP Approach (0/1 Knapsack).
b. Greedy (Value/Credit).
c. Huffman Coding for message.`,type:"coding",visualType:"none",javaCode:`/*
a. DP (Knapsack):
   Capacity W = 9.
   Items: (1,9), (2,7), (3,15), (4,12), (5,16).
   DP[w] = max value for weight w.
   ...
   Optimal:
   PHY112 (1, 9)
   CSE331 (3, 15)
   CSE499 (5, 16) -> Total Credit 9, Value 40.
   Or:
   PHY112 (1, 9)
   CSE331 (3, 15)
   CSE370 (4, 12) -> Total Credit 8, Value 36.
   ...
   Best: PHY112 + CSE331 + CSE499 = 40.

b. Greedy (Value/Credit):
   PHY112: 9/1 = 9
   CSE331: 15/3 = 5
   CSE330: 7/2 = 3.5
   CSE499: 16/5 = 3.2
   CSE370: 12/4 = 3
   
   Greedy Order:
   1. PHY112 (1, 9). Rem: 8.
   2. CSE331 (3, 15). Rem: 5.
   3. CSE330 (2, 7). Rem: 3.
   4. CSE499 (5, 16). Can't fit (need 5, have 3).
   5. CSE370 (4, 12). Can't fit.
   Total Value: 9 + 15 + 7 = 31.
   
   Comparison: DP (40) > Greedy (31). Zed fails.

c. Huffman Coding:
   Message: "Unsuccessful"
   Frequencies:
   U: 1, n: 1, s: 3, u: 2, c: 2, e: 1, f: 1, l: 1.
   Build Tree & Codes.
*/`,pythonCode:"# See Java comments."}],"Summer-24":[{id:"Summer24-Final-Q1",title:"Transport Network MST",description:"Minimal cost configuration (MST).",problem:`a. Find minimal cost configuration (MST).
b. Total cost and reasoning (Cut property or Cycle property).
c. Impact if edge C-F unavailable (Alternative MST).`,type:"coding",visualType:"graph",javaCode:`/*
a. Algorithm: Kruskal's or Prim's.
   Sort edges by weight. Pick smallest that doesn't form cycle.

b. Total Cost: Sum of MST edges.
   Reasoning: MST property ensures minimum total weight to connect all vertices.

c. If C-F unavailable:
   Remove C-F from graph.
   Re-run MST algorithm.
   Or, if C-F was in MST, finding the "replacement edge" (smallest weight edge crossing the cut created by removing C-F).
*/`,pythonCode:"# See Java comments."},{id:"Summer24-Final-Q2",title:"Dijkstra with Unknown",description:"Dijkstra with undefined/negative weight.",problem:`a. If X=2 (positive), simulate Dijkstra.
b. If X=-11 (negative), prove unsolvable/Bellman-Ford needed.
   "Unsolvable from source 1"?
   If negative edge creates a negative cycle reachable from source, shortest path is undefined (-infinity).
   If no negative cycle, Dijkstra might still give wrong answer, but path exists.
   Bellman-Ford can detect negative cycles.`,type:"coding",visualType:"graph",javaCode:`/*
a. Dijkstra with X=2:
   Standard simulation.

b. With X=-11:
   Check for negative cycle.
   If cycle exists (e.g., 2->4->...->2 with total < 0), then unsolvable.
   Bellman-Ford detects this in N-th iteration.
*/`,pythonCode:"# See Java comments."},{id:"Summer24-Final-Q3",title:"LCS & Huffman",description:"Longest Common Subsequence and Huffman Encoding.",problem:`Strings: 'abcdefg' and 'bfegba'.
a. LCS (DP approach).
b. Huffman Encoding for merged string 'abcdefgbfegba'.`,type:"coding",visualType:"matrix",javaCode:`/*
a. LCS:
   S1 = abcdefg
   S2 = bfegba
   DP Table...
   Common: b, e, g?
   LCS: "beg" (Length 3). Or "bfa"?
   
b. Huffman:
   String: abcdefgbfegba
   Freqs:
   a: 2, b: 3, c: 2, d: 1, e: 2, f: 2, g: 2.
   Total: 14.
   Build Tree.
*/`,pythonCode:"# See Java comments."},{id:"Summer24-Final-Q4",title:"Exam Strategy",description:"Maximize marks with time limit (Knapsack).",problem:`Time limit: 6 mins.
Questions:
4: 5m, 8 marks (1.6/m)
5: 3m, 7 marks (2.33/m)
6: 4m, 12 marks (3/m)
7: 6m, 10 marks (1.66/m)
8: 2m, 6 marks (3/m)
9: 1m, 5 marks (5/m)

a. No partial marks (0/1 Knapsack).
b. Partial marks (Fractional Knapsack).
c. DP vs Brute Force complexity.`,type:"coding",visualType:"none",javaCode:`/*
a. 0/1 Knapsack (Time 6):
   Items: (5,8), (3,7), (4,12), (6,10), (2,6), (1,5).
   Max Marks?
   Try combinations:
   (1,5) + (2,6) + (3,7) = 6 mins, 18 marks.
   (4,12) + (2,6) = 6 mins, 18 marks.
   (4,12) + (1,5) + unused 1m = 17 marks.
   Best: 18 marks.

b. Fractional Knapsack (Greedy by Marks/Time):
   Ratios:
   Q9: 5/1 = 5
   Q6: 12/4 = 3
   Q8: 6/2 = 3
   Q5: 7/3 = 2.33
   Q7: 10/6 = 1.66
   Q4: 8/5 = 1.6
   
   Order: Q9, Q6, Q8...
   1. Q9 (1m, 5). Rem Time: 5.
   2. Q6 (4m, 12). Rem Time: 1.
   3. Q8 (2m, 6). Take 1 min (50%). Marks = 3.
   Total: 5 + 12 + 3 = 20 marks.
   
   Score increased from 18 to 20.
*/`,pythonCode:"# See Java comments."}]};class h{constructor(){this.currentQuiz="Fall-24",this.currentQuestionId=null,this.viewer=null,this.init()}init(){this.cacheDOM(),this.bindEvents(),this.renderQuestionList(),this.viewer=new o(this.viewerContainer),window.solutionViewer=this.viewer}cacheDOM(){this.container=document.querySelector(".algo-final-solutions-container"),this.container&&(this.quizButtons=this.container.querySelectorAll(".quiz-selector .semester-btn"),this.questionList=this.container.querySelector("#questionList"),this.solutionContent=this.container.querySelector("#solutionContent"),this.viewerContainer=this.container.querySelector("#solutionViewerContainer"))}bindEvents(){var t;this.container&&(this.quizButtons.forEach(e=>{e.addEventListener("click",i=>{var a;(a=this.viewer)==null||a.close(),this.quizButtons.forEach(n=>n.classList.remove("active")),i.target.classList.add("active"),this.currentQuiz=i.target.dataset.quiz,this.renderQuestionList(),this.showEmptyState()})}),(t=this.questionList)==null||t.addEventListener("click",e=>{const i=e.target.closest(".question-item");i&&(this.container.querySelectorAll(".question-item").forEach(a=>a.classList.remove("active")),i.classList.add("active"),this.currentQuestionId=i.dataset.id,this.renderSolution())}))}renderQuestionList(){if(!this.questionList)return;const t=s[this.currentQuiz]||[];if(t.length===0){this.questionList.innerHTML='<div class="no-questions">No questions available</div>';return}this.questionList.innerHTML=t.map(e=>`
            <div class="question-item" data-id="${e.id}">
                <span class="q-id">${e.id}</span>
                <span class="q-title">${e.title}</span>
            </div>
        `).join("")}renderSolution(){const t=s[this.currentQuiz],e=t==null?void 0:t.find(a=>a.id===this.currentQuestionId);if(!e)return;const i=new r(e);this.viewer.render(i)}showEmptyState(){this.solutionContent&&(this.solutionContent.innerHTML=`
                <div class="empty-state fade-in">
                    <div class="empty-icon">👈</div>
                    <h3>Select a question to view the solution</h3>
                    <p>Choose a problem from the list on the left to see the problem description, code solution, and visualization.</p>
                </div>
            `)}}export{h as AlgorithmsFinalController};
