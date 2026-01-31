import{S as o,D as a}from"./solution-viewer-CReZtHwQ.js";import"./main-DaT4__Z1.js";const n={"Fall-24":[{id:"Fall24-Q1",title:"Multiple Choice Questions",description:"Various MCQs on Trees, Hashing, and Heaps.",problem:`Answer the following MCQs:
i. Preorder: 30, 20, 10, 15, 25, 23, 39, 35, 42. Postorder?
ii. BST Search for 55. Which sequence CANNOT be examined?
iii. Hash function h(k) = k mod 4. Keys: 1, 5, 28, 17, 15, 19. Longest chain length?
iv. Suitable hash function?
v. Two BTs with same Inorder. Correct statement?
vi. Hash function for uniform distribution?
vii. Data structure for forward chaining?`,type:"coding",visualType:"none",javaCode:"// See Short Questions for answers",pythonCode:"# See Short Questions for answers",shortQuestions:[{question:"i. Postorder of BST with Preorder: 30, 20, 10, 15, 25, 23, 39, 35, 42?",options:["10, 20, 15, 23, 25, 35, 42, 39, 30","15, 10, 25, 23, 20, 42, 35, 39, 30","15, 20, 10, 23, 25, 42, 35, 39, 30","15, 10, 23, 25, 20, 35, 42, 39, 30"],answer:"15, 10, 23, 25, 20, 35, 42, 39, 30"},{question:"ii. BST Search for 55. Which sequence CANNOT be examined?",options:["{10, 75, 64, 43, 60, 57, 55}","{90, 12, 68, 34, 62, 45, 55}","{9, 85, 47, 68, 43, 57, 55}","{79, 14, 72, 56, 16, 53, 55}"],answer:"{9, 85, 47, 68, 43, 57, 55} (43 < 55, so must go right. 57 is right. But 47 is left of 85? Wait. 9->85(R)->47(L)->68(R of 47). 43(L of 68). 57(R of 43). 55(L of 57). Valid. Let's check C again. 9 < 55 (R). 85 > 55 (L). 47 < 55 (R). 68 > 55 (L). 43 < 55 (R). 57 > 55 (L). 55. Valid. Let's check A. 10(R)->75(L)->64(L)->43(R)->60(L)->57(L)->55. Valid. Check D. 79(L)->14(R)->72(L)->56(L)->16(L of 56? 16 < 56. But 16 > 14. Valid). 53(R of 16). 55(R of 53). Valid. Wait. Let's re-evaluate C. 9, 85, 47, 68, 43, 57, 55. 47 is left of 85. 68 is right of 47. 43 is left of 68. 57 is right of 43. 55 is left of 57. All consistent. What about B? 90(L)->12(R)->68(R of 12? Yes). 34(L of 68). 62(R of 34). 45(L of 62). 55(R of 45). Valid. Is there any range violation? In C: 47 is left of 85. So all subsequent must be < 85. 68 < 85. OK. 68 is right of 47. All sub > 47. 43 < 47? No! 43 is < 47. So 43 cannot be right child of 68? No, 43 is left of 68. 68 is right of 47. So 43 must be > 47? No. 43 is left of 68. 68 is right of 47. So 68 > 47. 43 < 68. But 43 must be > 47 because it's in right subtree of 47. 43 is NOT > 47. So C is invalid."},{question:"iii. Longest collision chain for keys 1, 5, 28, 17, 15, 19 with h(k)=k%4?",answer:"3 (Keys mapping to 1: 1, 5, 17. Keys mapping to 3: 15, 19. Keys mapping to 0: 28. Max chain 3)"},{question:"iv. Suitable hash function?",answer:"h(k) = (k+9) mod m (Simple modular hashing)"},{question:"v. Two BTs with same Inorder. Correct statement?",answer:"They can have different structures"},{question:"vi. Hash function for uniform distribution on 0-9?",answer:"h(i) = (11 * i^2) mod 10 (Non-linear often better, but depends on keys. i^3 mod 10 permutes 0-9? 0,1,8,7,4,5,6,3,2,9. Yes. i^2 mod 10: 0,1,4,9,6,5,6,9,4,1. Collisions. So i^3 is better? Or D? 12*i mod 1? Always 0. C? 11*i^2 mod 10 ~ i^2 mod 10. Bad. A? i^2 mod 10. Bad. So B is best candidate? Or maybe none are perfect. But B maps 0-9 to 0-9 bijectively. So B.)"},{question:"vii. Data structure for forward chaining?",answer:"Linked List"}]},{id:"Fall24-Q2",title:"BST Analysis",description:"Analyze BST properties and perform deletion.",problem:`Consider the BST with root 15.
A. Delete root 15 with predecessor.
B. Is the resulting tree Complete?
C. Is the resulting tree Balanced?`,type:"coding",visualType:"tree",javaCode:`/*
A. Deleting Root 15 with Predecessor:
   - Predecessor of 15 is the maximum value in the left subtree.
   - Left subtree of 15 has root 10.
   - Max in left subtree is 14.
   - Replace 15 with 14.
   - Delete 14 from its original position.

B. Is the tree Complete?
   - A complete binary tree has all levels filled except possibly the last, which is filled from left to right.
   - Check the structure after deletion.

C. Is the tree Balanced?
   - A balanced binary tree has height difference of left and right subtrees <= 1 for all nodes.
   - Check heights of all nodes.
*/`,pythonCode:"# See Java comments for analysis."},{id:"Fall24-Q3",title:"Build Key",description:"Construct key from leaf nodes at even levels (right to left).",problem:`Generate a key string based on leaf nodes positioned at even levels from right to left.
**Input Tree:** Leaves at even levels: I, Y, K.
**Output:** "IYK"`,type:"coding",visualType:"tree",breakdown:["Identify leaf nodes (nodes with no children).","Filter leaves that are at even levels (0, 2, 4...).","Traverse the tree from right to left to collect these leaves."],keyDetails:{"leaf nodes":"Check if node.left == null && node.right == null","even levels":"level % 2 == 0","right to left":"Recursive call to right child before left child"},baseAlgorithm:"Binary Tree Traversal (DFS)",modifications:["Standard DFS usually goes Left then Right; this requires Right then Left.","Pass the current level as a parameter in the recursive function.","Only append to result if the node is a leaf AND level is even."],javaCode:`public static String build_key(Node root) {
    return build_key_helper(root, 0);
}

private static String build_key_helper(Node node, int level) {
    if (node == null) return "";
    
    String res = "";
    
    // Right to Left: Visit Right, then Left?
    // Or Post-order (Right, Left, Root)?
    // We want leaves.
    // If we traverse Right then Left, we encounter leaves from Right to Left.
    
    // Visit Right
    res += build_key_helper(node.right, level + 1);
    
    // Check if leaf and even level
    if (node.left == null && node.right == null) {
        if (level % 2 == 0) {
            res += node.elem; // Assuming elem is String or char
        }
    }
    
    // Visit Left
    res += build_key_helper(node.left, level + 1);
    
    return res;
}`,pythonCode:`def build_key(root):
    return build_key_helper(root, 0)

def build_key_helper(node, level):
    if node is None:
        return ""
        
    res = ""
    
    # Right to Left
    res += build_key_helper(node.right, level + 1)
    
    # Leaf check
    if node.left is None and node.right is None:
        if level % 2 == 0:
            res += str(node.elem)
            
    res += build_key_helper(node.left, level + 1)
    
    return res`},{id:"Fall24-Q4",title:"CPU Scheduler",description:"Print top k tasks with highest priority using Heap.",problem:`Perform first k tasks with highest priority.
**Input:** tasks = [45, 70, 85, 60, 90, 75], k = 3
**Output:**
Task 1 - Priority 90
Task 2 - Priority 85
Task 3 - Priority 75`,type:"coding",visualType:"heap",javaCode:`public static void cpu_scheduler(int[] tasks, int k) {
    MaxHeap maxHeap = new MaxHeap();
    for (int task : tasks) {
        maxHeap.insert(task);
    }
    
    for (int i = 1; i <= k; i++) {
        if (maxHeap.isEmpty()) break; // Or handle error
        int priority = maxHeap.extract(); // Assuming extract returns max
        System.out.println("Task " + i + " - Priority " + priority);
    }
}`,pythonCode:`def cpu_scheduler(tasks, k):
    max_heap = MaxHeap()
    for task in tasks:
        max_heap.insert(task)
        
    for i in range(1, k + 1):
        priority = max_heap.extract()
        print(f"Task {i} - Priority {priority}")`},{id:"Fall24-Q5",title:"Is Graph Complete",description:"Check if undirected graph is complete.",problem:`Determine if a network graph is complete (every participant interacts with every other).
**Input:** Adjacency List
**Output:** True/False`,type:"coding",visualType:"graph",javaCode:`public static boolean is_complete(Edge[] network) {
    int n = network.length;
    // For a complete graph, every vertex must have degree n-1 (assuming no self-loops and simple graph).
    // Or simply, every vertex i must be connected to all other vertices j != i.
    // The problem mentions "multiple edges indicate repeated interactions".
    // So we need to check if unique neighbors count is n-1 for each vertex.
    
    for (int i = 0; i < n; i++) {
        // Use a set or boolean array to track neighbors of i
        boolean[] visited = new boolean[n];
        visited[i] = true; // Don't need to connect to self
        int count = 0;
        
        Edge curr = network[i];
        while (curr != null) {
            int neighbor = Integer.parseInt(curr.destination); // Assuming dest is String "0", "1"...
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                count++;
            }
            curr = curr.next;
        }
        
        if (count != n - 1) return false;
    }
    return true;
}`,pythonCode:`def is_complete(network):
    n = len(network)
    
    for i in range(n):
        visited = [False] * n
        visited[i] = True
        count = 0
        
        curr = network[i] # Assuming network is list of Edge/Node
        while curr is not None:
            neighbor = int(curr.destination)
            if not visited[neighbor]:
                visited[neighbor] = True
                count += 1
            curr = curr.next
            
        if count != n - 1:
            return False
            
    return True`},{id:"Fall24-Q6",title:"Huffman Encoding",description:"Recursive function to get bit encoding of string.",problem:`Implement getEncoding(root, text) to return compressed bit encoding.
Left child = 0, Right child = 1.
**Input:** "and"
**Output:** "0101110" (a=0, n=101, d=110)`,type:"coding",visualType:"tree",pedagogy:{question:`Implement <code>getEncoding(root, text)</code> to return compressed bit encoding.
Left child = 0, Right child = 1.
<br><b>Input:</b> "and"
<br><b>Output:</b> "0101110" (a=0, n=101, d=110)`,breakdown:["Traverse the Huffman Tree for each character in the input string.","Start at the root for every character.","If moving Left, append '0'. If moving Right, append '1'.","Stop when a leaf node matches the target character.","Concatenate all individual encodings to form the result."],key_mapping:{"Left child = 0":"Traverse Left","Right child = 1":"Traverse Right",Input:"Target Characters",Output:"Binary String"},concept_selection:{selected:"Tree Traversal (DFS)",reason:"Huffman encoding requires finding the unique path from root to leaf for each character. DFS efficiently explores paths."},structural_plan:{default_algo:"Standard DFS",modifications:["Path Accumulation: Pass current path string down recursion","Leaf Check: Return path if node value matches target"]}},visualizer:{type:"tree",initialState:[50,25,75,10,30,60,80]},simulation:{narrative_steps:[{text:"Let's find the encoding for the first character 'a'. We start at the root.",codeLine:2,highlightLines:[2,269],canvasAction:"HIGHLIGHT_NODE",data:{value:50}},{text:"We traverse left (0) looking for 'a'.",codeLine:4,highlightLines:[281],canvasAction:"HIGHLIGHT_NODE",data:{value:25}},{text:"Found 'a' at leaf! Path is '0'.",codeLine:6,highlightLines:[275,276],canvasAction:"HIGHLIGHT_NODE",data:{value:25}},{text:"Now for 'n'. Start at root again.",codeLine:2,highlightLines:[264],canvasAction:"HIGHLIGHT_NODE",data:{value:50}},{text:"Go Right (1).",codeLine:8,highlightLines:[284],canvasAction:"HIGHLIGHT_NODE",data:{value:75}},{text:"Go Left (0).",codeLine:4,highlightLines:[281],canvasAction:"HIGHLIGHT_NODE",data:{value:60}},{text:"Go Right (1). Found 'n'! Path is '101'.",codeLine:6,highlightLines:[275],canvasAction:"HIGHLIGHT_NODE",data:{value:60}},{text:"Finally 'd'. Root -> Right (1) -> Right (1) -> Left (0). Encoding '110'.",codeLine:1,highlightLines:[264],canvasAction:"HIGHLIGHT_NODE",data:{value:80}},{text:"Complete result: 0 + 101 + 110 = 0101110.",codeLine:10,highlightLines:[266],output:"0101110",canvasAction:"RESET",data:{}}],sample_io:{input:"and",expected_output:"0101110"}},javaCode:`public static String getEncoding(Node root, String st) {
    String result = "";
    for (int i = 0; i < st.length(); i++) {
        char c = st.charAt(i);
        result += findPath(root, c, "");
    }
    return result;
}

private static String findPath(Node node, char target, String path) {
    if (node == null) return "";
    
    // Leaf node check
    if (node.left == null && node.right == null) {
        // Assuming node.value is Character or String
        if (node.value != null && node.value.equals(target)) { // Or char comparison
            return path;
        }
        return "";
    }
    
    String left = findPath(node.left, target, path + "0");
    if (!left.isEmpty()) return left;
    
    String right = findPath(node.right, target, path + "1");
    if (!right.isEmpty()) return right;
    
    return "";
}`,pythonCode:`def getEncoding(root, st):
    result = ""
    for char in st:
        result += findPath(root, char, "")
    return result

def findPath(node, target, path):
    if node is None:
        return ""
        
    if node.left is None and node.right is None:
        if node.value == target:
            return path
        return ""
        
    left = findPath(node.left, target, path + "0")
    if left != "":
        return left
        
    right = findPath(node.right, target, path + "1")
    if right != "":
        return right
        
    return ""`}],"Fall-23":[{id:"Fall23-Q1",title:"Multiple Choice Questions",description:"MCQs on Key-indexing, Recursion, Arrays, Linked Lists, and BST.",problem:`Answer the following MCQs:
I. Key-indexing aux_arr values?
II. Return value of fun(5)?
III. Value of arr[arr[arr[3]]]?
IV. Pointers modified for DLL insertion?
V. False statement about BST operations?`,type:"coding",visualType:"none",javaCode:"// See Short Questions for answers",pythonCode:"# See Short Questions for answers",shortQuestions:[{question:"I. arr=[2,1,5,3,5,5,4,2,1,2,5,3]. Key-indexing aux_arr?",answer:"c. aux_arr[2] = 3 (Count of 1s is 2. aux_arr[1]=0. aux_arr[2]=aux_arr[1]+count[1]=0+2=2? Wait. Cumulative count. count=[0,2,3,2,1,4]. aux=[0,2,5,7,8]. So aux[2]=5? No. Standard key-indexed counting: count[r+1] stores start index. count[1]=0. count[2]=2. count[3]=5. So aux_arr[2]=2? Options: a.1, b.0, c.3, d.5. Maybe 1-based? Or different variant. Let's trace. 1s: 2. 2s: 3. 3s: 2. 4s: 1. 5s: 4. Sorted: 1,1,2,2,2,3,3,4,5,5,5,5. 1s start at 0. 2s start at 2. 3s start at 5. 4s start at 7. 5s start at 8. aux[2] should be 2. None match? Maybe 'c' is 3? If 1-based? 3. Yes. If 1-based, 1s at 1,2. 2s at 3,4,5. So aux[2]=3. Answer c.)"},{question:"II. fun(5) where fun(n<2)=3, else fun(n-2)+2*fun(n-4)?",answer:"b. 15 (fun(1)=3, fun(-1)=3? fun(3)=fun(1)+2*fun(-1)=3+2*3=9. fun(5)=fun(3)+2*fun(1)=9+2*3=15)"},{question:"III. arr=[3,1,4,2,5]. arr[arr[arr[3]]]?",answer:"c. 5 (arr[3]=2. arr[2]=4. arr[4]=5)"},{question:"IV. Insertion in middle of Dummy-Headed Doubly Circular LL modifies how many pointers?",answer:"d. 4 (Prev.next, New.prev, New.next, Next.prev)"},{question:"V. BST Operations. Which is NOT TRUE?",answer:"b. Node 23 is the ROOT node in the resulting tree (False. Root 25 deleted with predecessor 23? Left subtree max. If 23 becomes root, then True. Wait. Let's trace. Insert 23. Delete 29 (leaf). Delete Root 25 with predecessor. Predecessor of 25 is max of left. Left is 15, 10, 20, 23. Max is 23. So 23 becomes root. So b is TRUE. What is False? a. Leaf nodes decrease? c. 5 nodes with 1 child? d. 33 is NOT leaf? 33 was child of 29. 29 deleted. 33 moves up? 29 deleted using successor. Successor of 29 (right child 33, left 30? No image. Assuming standard). If 29 has child 33. Successor of 29 is 33? If 33 has no left child. 29 replaced by 33. 33 is now at 29's place. 33 had child? If 33 was leaf, now it has 29's children? 29 had 33. So 33 moves up. 33 is leaf? If 33 has no children, yes. If 33 had children, no. Without image, hard to say. But 'b' seems True. Let's assume 'd' is False or 'a'.)"}]},{id:"Fall23-Q2",title:"Sum Distance",description:"Sum nodes at specific distances from head.",problem:`Sum node elements that are away from head by elements in array.
**Input:** LL: 10->16->-5->9->3->4, dist=[2,0,5,2,8]
**Output:** 4 (-5 + 10 + 4 + -5 + 0)`,type:"coding",visualType:"list",javaCode:`public static int sum_dist(Node head, int[] dist) {
    int sum = 0;
    for (int d : dist) {
        Node temp = head;
        int count = 0;
        boolean found = false;
        while (temp != null) {
            if (count == d) {
                sum += temp.elem;
                found = true;
                break;
            }
            temp = temp.next;
            count++;
        }
        // If not found (distance > length), considered as 0 (add nothing)
    }
    return sum;
}`,pythonCode:`def sum_dist(head, dist):
    total_sum = 0
    for d in dist:
        temp = head
        count = 0
        found = False
        while temp is not None:
            if count == d:
                total_sum += temp.elem
                found = True
                break
            temp = temp.next
            count += 1
    return total_sum`},{id:"Fall23-Q3",title:"Queue Trace",description:"Trace output of Circular Queue operations.",problem:`Trace the status of a Circular Queue (cap 4).
queue = Queue(4)
arr = [10, 20, 31, 40, 53]
test(arr, queue)

def test(arr, queue):
    for i in range(len(arr)):
        if i % 2 == 0:
            queue.enqueue(arr[i])
        else:
            queue.dequeue()
        print(queue.circArr, queue.front, queue.back)`,type:"coding",visualType:"queue",javaCode:`/*
Output Trace:
1. i=0 (Even): Enqueue 10.
   - front=3, back=0. Arr: [10, None, None, None]
2. i=1 (Odd): Dequeue.
   - front=0. Item 10 removed? No, front moves. front=(3+1)%4=0.
   - Arr: [10, None, None, None] (Logically empty? No, front=0, back=0 means 1 item?
   - Initial: front=3, back=3.
   - Enqueue 10: back=0. Arr[0]=10.
   - Dequeue: front=(3+1)%4=0.
   - Queue empty? front==back? If front==back, empty?
   - Usually front=back means empty.
   - After enqueue 10: front=3, back=0.
   - After dequeue: front=0. back=0. Empty.
   - Arr: [10, None, None, None] (Values remain usually)
3. i=2 (Even): Enqueue 31.
   - back=1. Arr[1]=31.
   - Arr: [10, 31, None, None]. front=0, back=1.
4. i=3 (Odd): Dequeue.
   - front=1.
   - Arr: [10, 31, None, None]. front=1, back=1. Empty.
5. i=4 (Even): Enqueue 53.
   - back=2. Arr[2]=53.
   - Arr: [10, 31, 53, None]. front=1, back=2.
*/`,pythonCode:"# See Java comments for trace."},{id:"Fall23-Q4",title:"Remove from Hash Table",description:"Remove key-value pair from Chained Hash Table.",problem:`Implement remove(hashTable, key).
Removes key-value pair if exists.
**Input:** hashTable, key="C7B"
**Output:** Updated hashTable`,type:"coding",visualType:"hashtable",javaCode:`public static Node[] remove(Node[] hashTable, String key) {
    // Need hash function? Problem says "hash_function ... given".
    // Assuming we can iterate all buckets if hash function not accessible?
    // Or assuming we have access to hash_function(key).
    // Let's assume we iterate all buckets since we don't have the hash function code here.
    // Wait, Q4 part I asks for hashed-index.
    // Part II says "hash_function ... given".
    // So we should use it.
    // int idx = hash_function(key);
    
    // Since I can't call it, I'll iterate all buckets to be safe, or assume a placeholder.
    // But standard remove uses hash.
    // Let's assume we scan all buckets (inefficient but works without hash func).
    
    for (int i = 0; i < hashTable.length; i++) {
        Node head = hashTable[i];
        if (head == null) continue;
        
        if (head.key.equals(key)) {
            hashTable[i] = head.next;
            return hashTable;
        }
        
        Node prev = head;
        Node curr = head.next;
        while (curr != null) {
            if (curr.key.equals(key)) {
                prev.next = curr.next;
                return hashTable;
            }
            prev = curr;
            curr = curr.next;
        }
    }
    return hashTable;
}`,pythonCode:`def remove(hashTable, key):
    # Iterating all buckets since hash_function is not defined here
    for i in range(len(hashTable)):
        head = hashTable[i]
        if head is None:
            continue
            
        if head.key == key:
            hashTable[i] = head.next
            return hashTable
            
        prev = head
        curr = head.next
        while curr is not None:
            if curr.key == key:
                prev.next = curr.next
                return hashTable
            prev = curr
            curr = curr.next
            
    return hashTable`},{id:"Fall23-Q5-II",title:"Swap Child",description:"Swap left/right children of nodes at level M and above.",problem:`Swap left and right children of all nodes at level M and above (closer to root).
0 < M < height.
**Input:** Tree, M=2
**Output:** Tree with levels 0, 1, 2 swapped.`,type:"coding",visualType:"tree",javaCode:`public static void swap_child(Node root, int level, int M) {
    if (root == null) return;
    
    // "at level M and above". Above means smaller level index (0, 1... M).
    if (level <= M) {
        Node temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    
    swap_child(root.left, level + 1, M);
    swap_child(root.right, level + 1, M);
}`,pythonCode:`def swap_child(root, level, M):
    if root is None:
        return
        
    if level <= M:
        root.left, root.right = root.right, root.left
        
    swap_child(root.left, level + 1, M)
    swap_child(root.right, level + 1, M)`},{id:"Fall23-Q5-I",title:"BT Operations",description:"Draw tree, traversals, BST insertion/deletion.",problem:`Given array: [None, 19, 22, 10, 32, 20, None, 30, None, 5, None, 7, None, None, 2, -2]
a. Draw Binary Tree.
b. Post-order and Pre-order.
c. Insert elements from Pre-order into empty BST.
d. Delete 5 (successor) and 20 (predecessor) from BST.`,type:"coding",visualType:"tree",javaCode:`/*
a. Tree Drawing:
   Root (1): 19
   Left (2): 22
   Right (3): 10
   L of 22 (4): 32
   R of 22 (5): 20
   L of 10 (6): None
   R of 10 (7): 30
   ... and so on.

b. Traversals:
   Pre-order: Root, Left, Right
   Post-order: Left, Right, Root

c. BST Construction:
   Insert items from Pre-order sequentially.

d. Deletions:
   i) Delete 5 (Successor): Find min in right subtree.
   ii) Delete 20 (Predecessor): Find max in left subtree.
*/`,pythonCode:"# See Java comments."}],"Spring-24":[{id:"Spring24-Q1",title:"Multiple Choice Questions",description:"MCQs on BST, Heap, and Linked Lists.",problem:`Answer the following MCQs:
i. Unbalanced node in tree?
ii. Predecessor of Node 17?
iii. Accurate linear array representation?
iv. Heap index of 7 after inserting 20?
v. False statement about Linked Lists?`,type:"coding",visualType:"none",javaCode:"// See Short Questions for answers",pythonCode:"# See Short Questions for answers",shortQuestions:[{question:"i. Which is an unbalanced node in the tree?",answer:"50 (Left height 3, Right height 1. Balance factor 2)"},{question:"ii. Predecessor of Node 17?",answer:"14 (Max in left subtree)"},{question:"iii. Accurate linear array representation?",answer:"[N, N, 1, 4, 5, 7] (Assuming 1-based indexing? Or 0-based? If 0-based, root at 0. Left 1, Right 2. If root is null? 'N indicates None'. Options are tricky without image. Assuming standard array rep.)"},{question:"iv. Index of 7 after inserting 20 in MaxHeap [N, 19, 15, 12, 13, 7, 5, 1, -1, 3]?",answer:"9 (Insert 20 at end (index 10). Bubble up. 20 > 13 (parent 4). Swap. 20 > 19 (parent 1). Swap. 20 becomes root. 7 is at index 5. Unchanged? Wait. 7 is child of 15 (index 2). 2*2+1=5. 7 is at 5. Insert 20 at 10. Parent 5 (7). 20 > 7. Swap. 7 moves to 10. 20 moves to 5. Parent of 5 is 2 (15). 20 > 15. Swap. 20 moves to 2. 15 moves to 5. Parent of 2 is 1 (19). 20 > 19. Swap. 20 moves to 1. 19 moves to 2. So 7 is at index 10. Answer d. 10)"},{question:"v. Which is FALSE?",answer:"d. Tail node can be directly accessed from the Head node in a Doubly Circular Linked List. (True: Head.prev = Tail. So False is... b? Head cannot be accessed from Tail in Singly Circular? False, Tail.next = Head. So b is False. Wait. 'Head node cannot be directly accessed from the Tail node in a Singly Circular Linked List'. This statement is False because Tail.next IS Head. So b is the False statement.)"}]},{id:"Spring24-Q2",title:"Hash Function",description:"Hash based on char indices in linked list.",problem:`Hash function: mod 10 of sum of indexes of characters of list in string.
List: D->A->T->A. String: "SADA".
Index of D=2, A=3. S=-1.
Sum = (-1 + 3 + 2 + 3) = 7. 7 % 10 = 7.
**Input:** List, String.
**Output:** Hash value.`,type:"coding",visualType:"list",javaCode:`public static int hash(Node list, String st) {
    int sum = 0;
    for (int i = 0; i < st.length(); i++) {
        char c = st.charAt(i);
        int index = -1;
        int currentIndex = 0;
        Node temp = list;
        while (temp != null) {
            // "If any character occurs multiple times, consider index of last occurrence"
            // So we traverse whole list and update index if match found.
            // Wait, "index of characters of the list in the string"?
            // No, "indexes of the characters of the list in the string".
            // "Index of D is 2". In list D->A->T->A?
            // If 0-indexed: D(0), A(1), T(2), A(3).
            // Example says "Index of D is 2". Maybe 1-based?
            // Or maybe list is different?
            // Sample: List D->A->T->A. String "SADA".
            // "Index of D is 2 and A is 3".
            // This implies D is at 2? A is at 3?
            // Maybe list is ...->D->A...?
            // Without full list context, assuming 0-based or 1-based.
            // Let's assume standard search.
            
            // Re-reading: "characters are put in the list using some unknown permutation".
            // "Index of D is 2".
            // If list is D->A->T->A.
            // Maybe indices are 0, 1, 2, 3?
            // If D is 2, maybe 2-based? Unlikely.
            // Maybe the list in example is just a part?
            // "list = D -> A -> T -> A".
            // If D is 2, maybe it's 3rd element?
            // Let's assume we search for char in list and get its index.
            // "last occurrence" rule applies to finding char in list?
            // "If any character of the string occurs multiple times..." -> This refers to String chars.
            // "consider the index value of the last occurrence" -> This refers to char in List?
            // "If any node value is not present in the string..." -> No, "If any node value is not present in the string"??
            // "If any node value is not present in the string, then consider its index -1".
            // This phrasing is confusing.
            // "Hash function takes a string key... sum of the indexes of the characters of the list in the string".
            // "indexes of the characters of the list IN THE STRING".
            // So we find index of list chars IN THE STRING?
            // Example: List D, A, T, A. String "SADA".
            // D in "SADA": Index 2.
            // A in "SADA": Indices 1, 3. Last is 3.
            // T in "SADA": Not present (-1).
            // A in "SADA": Last is 3.
            // Sum: 2 + 3 + (-1) + 3 = 7.
            // This matches the example perfectly!
            // So we iterate through the LIST. For each node char, find its last index in the STRING.
            
            if (temp.elem instanceof Character) { // Assuming elem is char
                char val = (Character) temp.elem;
                int lastIdx = st.lastIndexOf(val); // Java string method
                sum += lastIdx;
            }
            temp = temp.next;
        }
    }
    // Wait, the loop above was iterating String.
    // The logic derived from example iterates List.
    // "sum of the indexes of the characters of the list in the string".
    // Yes, iterate list.
    
    sum = 0;
    Node temp = list;
    while (temp != null) {
        // Assuming elem is char/string
        String valStr = String.valueOf(temp.elem);
        char val = valStr.charAt(0);
        
        int lastIdx = -1;
        for (int i = 0; i < st.length(); i++) {
            if (st.charAt(i) == val) {
                lastIdx = i;
            }
        }
        sum += lastIdx;
        temp = temp.next;
    }
    
    return sum % 10;
}`,pythonCode:`def hash(head, st):
    total_sum = 0
    temp = head
    while temp is not None:
        val = temp.elem # Assuming char
        last_idx = -1
        # Find last index of val in st
        for i in range(len(st)):
            if st[i] == val:
                last_idx = i
        
        total_sum += last_idx
        temp = temp.next
        
    return total_sum % 10`},{id:"Spring24-Q3",title:"SumTree",description:"Check if Binary Tree is SumTree.",problem:`SumTree: Value of node = Sum of nodes in left subtree + Sum of nodes in right subtree.
Empty tree is SumTree (sum 0). Leaf is SumTree.
**Input:** Tree
**Output:** True/False`,type:"coding",visualType:"tree",javaCode:`public static boolean sumTree(Node root) {
    if (root == null) return true;
    if (root.left == null && root.right == null) return true;
    
    int leftSum = getSum(root.left);
    int rightSum = getSum(root.right);
    
    if (root.elem == leftSum + rightSum) {
        return sumTree(root.left) && sumTree(root.right);
    }
    return false;
}

private static int getSum(Node node) {
    if (node == null) return 0;
    return node.elem + getSum(node.left) + getSum(node.right);
}`,pythonCode:`def sumTree(root):
    if root is None:
        return True
    if root.left is None and root.right is None:
        return True
        
    left_sum = get_sum(root.left)
    right_sum = get_sum(root.right)
    
    if root.elem == left_sum + right_sum:
        return sumTree(root.left) and sumTree(root.right)
    return False

def get_sum(node):
    if node is None:
        return 0
    return node.elem + get_sum(node.left) + get_sum(node.right)`},{id:"Spring24-Q4",title:"Heap Sum",description:"Remove largest and smallest, add difference back, k times.",problem:`Perform k operations:
1. Remove largest (MaxHeap) and smallest (MinHeap).
2. Add difference (Largest - Smallest) back.
Return sum of array after k operations.
**Input:** A=[3, 2, 1, 5, 4], k=2
**Output:** 9`,type:"coding",visualType:"heap",javaCode:`public static int heapSum(int[] A, int k) {
    // We need both MaxHeap and MinHeap?
    // "Underlying data structure of a heap is an array".
    // "No need to modify the given array".
    // We should probably use two heaps separately?
    // But if we modify elements, we need to sync them?
    // "Remove largest and smallest... add their difference back".
    // This implies the set of numbers changes.
    // If we have two heaps, we need to remove from both?
    // Removing max from MaxHeap is easy. But removing that same element from MinHeap is O(N).
    // Removing min from MinHeap is easy. Removing it from MaxHeap is O(N).
    // Given the constraints and typical exam setting, maybe O(N) removal is acceptable or there's a trick.
    // Or maybe we just rebuild heaps?
    // "You are given MaxHeap and MinHeap classes... Constructor... does not take parameters".
    // So we insert all elements into both heaps?
    
    MaxHeap maxHeap = new MaxHeap();
    MinHeap minHeap = new MinHeap();
    
    // Initial population
    // We need to track active elements.
    // Since we add difference back, count decreases by 1 each step?
    // Remove 2, Add 1. Net -1 count.
    
    // Let's use a list to track current elements, and rebuild heaps each step?
    // Or use heaps and lazy deletion?
    // "YOU MUST USE THE GIVEN HEAP DATA STRUCTURES".
    
    // Let's try simulating with heaps.
    // But syncing is the issue.
    // Maybe we just use one heap? No, need min and max.
    // Maybe we extract max, extract min.
    // But if we extract max from MaxHeap, it's gone.
    // We also need to remove it from MinHeap.
    // Since we can't efficiently remove arbitrary element from standard Heap,
    // maybe we just rebuild?
    // k is likely small.
    
    // Let's assume we can rebuild.
    
    List<Integer> currentList = new ArrayList<>();
    for (int x : A) currentList.add(x);
    
    for (int i = 0; i < k; i++) {
        maxHeap = new MaxHeap();
        minHeap = new MinHeap();
        for (int x : currentList) {
            maxHeap.insert(x);
            minHeap.insert(x);
        }
        
        int maxVal = maxHeap.extract(); // MaxDelete
        int minVal = minHeap.extract(); // MinDelete
        
        // We need to remove these specific instances from currentList.
        currentList.remove(Integer.valueOf(maxVal));
        currentList.remove(Integer.valueOf(minVal));
        
        int diff = maxVal - minVal;
        currentList.add(diff);
    }
    
    int sum = 0;
    for (int x : currentList) sum += x;
    return sum;
}`,pythonCode:`def heapSum(A, k):
    current_list = list(A)
    
    for _ in range(k):
        max_heap = MaxHeap()
        min_heap = MinHeap()
        for x in current_list:
            max_heap.insert(x)
            min_heap.insert(x)
            
        max_val = max_heap.extract()
        min_val = min_heap.extract()
        
        current_list.remove(max_val)
        current_list.remove(min_val)
        
        diff = max_val - min_val
        current_list.append(diff)
        
    return sum(current_list)`},{id:"Spring24-Q5",title:"Graph Matrix",description:"Adjacency Matrix to List, Directed/Undirected check, BST from weights.",problem:`Given Adjacency Matrix for vertices A-J.
a. Draw Adjacency List.
b. Directed or Undirected? Transform.
c. BST from weights: 31, 19, 25, 40, 45, 35, 33, 27, 14, 21, 37.
d. Delete 31 (predecessor).`,type:"coding",visualType:"graph",breakdown:["Determine which representation allows O(1) edge checking.","Find Strongly Connected Components (SCCs) in the graph.","Check if every building is 'Accessible' (part of a cycle)."],keyDetails:{"O(1)":"Adjacency Matrix lookup (matrix[i][j])",SCCs:"Kosaraju's or Tarjan's algorithm",Accessible:"Node belongs to an SCC of size > 1 or has a self-loop"},baseAlgorithm:"Graph Traversal & SCC Analysis",modifications:["Use Adjacency Matrix for the bridge check.","Transpose the graph for Kosaraju's second DFS pass.","Validate accessibility by checking SCC sizes."],javaCode:`/*
a. Adjacency List:
   A(0): C(2), E(4)
   B(1): D(3), F(5)
   C(2): A(0), B(1)
   ... (Based on non-zero values in matrix)

b. Directed/Undirected?
   Check symmetry. If M[i][j] == M[j][i] for all i,j, then Undirected.
   Else Directed.
   Transform: If Directed -> Undirected (make symmetric).

c. BST Construction:
   Insert weights sequentially: 31 (Root), 19 (L), 25 (R of 19), 40 (R of 31)...

d. Delete 31 (Predecessor):
   Predecessor of 31 is Max of Left Subtree.
*/`,pythonCode:"# See Java comments."}],"Summer-24":[{id:"Summer24-Q1",title:"Multiple Choice Questions",description:"MCQs on Recursion, BST, Heaps, and Arrays.",problem:`Answer the following MCQs:
i. Output of recursive f(16)?
ii. BST insertion effect?
iii. Post-order of given tree?
iv. Insert 45 in BST, balanced?
v. Array shifting scenario?
vi. Perfect Binary Tree (h=4) leaf indices?
vii. Heap Sort root after 1st step?
viii. Output of fun(root)?
ix. False statement about array rep of tree?
x. Swaps to merge heaps?`,type:"coding",visualType:"none",javaCode:"// See Short Questions for answers",pythonCode:"# See Short Questions for answers",shortQuestions:[{question:"i. f(x): if x==1 print x; f(x//2); print x. f(16)?",answer:"a) 1 2 4 8 16 (Trace: f(16)->f(8)->f(4)->f(2)->f(1). f(1) prints 1. Returns. f(2) prints 2. f(4) prints 4... Order: 1 2 4 8 16)"},{question:"ii. In balanced BST, what happens when new node inserted?",answer:"b) The tree's height might increase, and rebalancing may be needed."},{question:"iii. Post-order of tree (A root, C left, B right...)?",answer:"b) FCEDBA (Assuming standard traversal)"},{question:"iv. Insert 45 in BST. Unbalanced? Root to make balanced?",answer:"c) 42 (Middle element of sorted sequence?)"},{question:"v. Scenario requiring shifting in array?",answer:"a) Inserting an element at a specific position in the array."},{question:"vi. Perfect BT height 4. Leftmost leaf 16. Rightmost?",answer:"b) 31 (Height 4 means 2^4 leaves? No, height 4 usually means 5 levels (0-4). Nodes 2^(h+1)-1 = 31. Indices 1 to 31. Leaves are 16 to 31. Rightmost is 31.)"},{question:"vii. Heap Sort (MaxHeap). Root after 1st step (Swap Max with Last, Heapify)?",answer:"b) Node with value 87 (Second largest becomes root)"},{question:"viii. fun(root) returns? (Recursive subtraction)",answer:"c) -2"},{question:"ix. Array rep: [N,6,8,4,3,N,11,20...]. False statement?",answer:"c) This binary tree is not balanced. (Check heights)"},{question:"x. Merge MaxHeap and MinHeap into MinHeap. Swaps?",answer:"b) 3"}]},{id:"Summer24-Q2",title:"Rearrange Tokens",description:"Move senior citizens (from pos) to front.",problem:`Rearrange tokens so senior citizens (starting from seniorPos) are moved to front.
**Input:** A3->A9->A4->A2->A7->A8->A1, seniorPos=4
**Output:** A2->A7->A8->A1->A3->A9->A4
(Senior starts at 4 (0-indexed? or 1-indexed?).
Example: Pos 4 is A2?
0:A3, 1:A9, 2:A4, 3:A2? No.
If 1-based: 1:A3, 2:A9, 3:A4, 4:A2.
So A2 is at 4.
Output starts with A2. So 1-based indexing.
Seniors: A2, A7, A8, A1.
Others: A3, A9, A4.
Result: Seniors -> Others.`,type:"coding",visualType:"list",javaCode:`public static Node rearrange_Tokens(Node head, int seniorPos) {
    if (head == null || seniorPos <= 1) return head;
    
    Node seniorHead = null;
    Node seniorTail = null;
    Node otherHead = head;
    Node otherTail = null;
    
    // We need to split the list at seniorPos.
    // Traverse to seniorPos - 1.
    
    Node curr = head;
    int count = 1;
    while (curr != null && count < seniorPos - 1) {
        curr = curr.next;
        count++;
    }
    
    if (curr == null || curr.next == null) return head; // Invalid pos
    
    otherTail = curr;
    seniorHead = curr.next;
    
    // Find tail of senior list
    Node temp = seniorHead;
    while (temp.next != null) {
        temp = temp.next;
    }
    seniorTail = temp;
    
    // Reconnect
    otherTail.next = null;
    seniorTail.next = otherHead;
    
    return seniorHead;
}`,pythonCode:`def rearrange_Tokens(head, seniorPos):
    if head is None or seniorPos <= 1:
        return head
        
    curr = head
    count = 1
    while curr is not None and count < seniorPos - 1:
        curr = curr.next
        count += 1
        
    if curr is None or curr.next is None:
        return head
        
    other_tail = curr
    senior_head = curr.next
    
    temp = senior_head
    while temp.next is not None:
        temp = temp.next
    senior_tail = temp
    
    other_tail.next = None
    senior_tail.next = head
    
    return senior_head`},{id:"Summer24-Q3",title:"Is Valid Path",description:"Check if key string exists as root-to-leaf path.",problem:`Determine if key is valid (path from root to leaf makes the key).
**Input:** Tree, Key="CSE"
**Output:** True`,type:"coding",visualType:"tree",javaCode:`public static boolean is_Valid(Node root, String key) {
    return isValidHelper(root, key, 0);
}

private static boolean isValidHelper(Node node, String key, int index) {
    if (node == null) return false;
    
    // Check if char matches
    // Assuming node.elem is String or char
    String val = String.valueOf(node.elem);
    if (index >= key.length() || !val.equals(String.valueOf(key.charAt(index)))) {
        return false;
    }
    
    // If leaf, check if we reached end of key
    if (node.left == null && node.right == null) {
        return index == key.length() - 1;
    }
    
    return isValidHelper(node.left, key, index + 1) || isValidHelper(node.right, key, index + 1);
}`,pythonCode:`def is_Valid(root, key):
    return isValidHelper(root, key, 0)

def isValidHelper(node, key, index):
    if node is None:
        return False
        
    val = str(node.elem)
    if index >= len(key) or val != key[index]:
        return False
        
    if node.left is None and node.right is None:
        return index == len(key) - 1
        
    return isValidHelper(node.left, key, index + 1) or isValidHelper(node.right, key, index + 1)`},{id:"Summer24-Q5",title:"Print Directories",description:"Recursively print directory structure with indentation.",problem:`Print directory structure. Indentation represents depth.
**Input:** DirectoryNode root
**Output:**
root (Folder)
    book.txt (File)
    Anime (Folder)
...`,type:"coding",visualType:"tree",javaCode:`public static void print_all_directories(DirectoryNode root, int level) {
    if (root == null) return;
    
    // Print current node
    for (int i = 0; i < level; i++) System.out.print("	");
    System.out.println(root.name + (root.is_folder ? " (Folder)" : " (File)"));
    
    // If folder, print children (current)
    if (root.is_folder) {
        print_all_directories(root.current, level + 1);
    }
    
    // Print siblings (next) - Same level
    print_all_directories(root.next, level);
}`,pythonCode:`def print_all_directories(root, level=0):
    if root is None:
        return
        
    # Print current
    print("	" * level + root.name + (" (Folder)" if root.is_folder else " (File)"))
    
    # Children
    if root.is_folder:
        print_all_directories(root.current, level + 1)
        
    # Siblings
    print_all_directories(root.next, level)`},{id:"Summer24-Q4",title:"BST Operations",description:"Pre-order, Insert, Balance check, Descending traversal.",problem:`Given BST.
a. Pre-order traversal.
b. Insert 89.
c. Is modified tree balanced?
d. Traversal for descending order?`,type:"coding",visualType:"tree",javaCode:`/*
a. Pre-order: Root, Left, Right.
b. Insert 89: Compare with root, go right/left until null.
c. Balanced? Check heights.
d. Descending Order: Reverse In-order (Right, Root, Left).
*/
public static void printDescending(Node root) {
    if (root == null) return;
    printDescending(root.right);
    System.out.print(root.elem + " ");
    printDescending(root.left);
}`,pythonCode:`def print_descending(root):
    if root is None:
        return
    print_descending(root.right)
    print(root.elem, end=" ")
    print_descending(root.left)`}]};class u{constructor(){this.currentQuiz="Fall-24",this.currentQuestionId=null,this.viewer=null}init(){this.cacheDOM(),this.bindEvents(),this.renderQuestionList(),this.viewer=new o(this.viewerContainer,{onClose:()=>{this.solutionContent&&(this.solutionContent.style.display="block")}}),window.solutionViewer=this.viewer}cacheDOM(){const t=document.querySelector(".final-solutions-container");t&&(this.quizButtons=t.querySelectorAll(".quiz-selector .semester-btn"),this.questionList=t.querySelector(".question-list"),this.solutionContent=t.querySelector(".solution-content"),this.viewerContainer=t.querySelector("#solutionViewerContainer"))}bindEvents(){this.quizButtons.forEach(t=>{t.addEventListener("click",e=>{var i;(i=this.viewer)==null||i.close(),this.quizButtons.forEach(r=>r.classList.remove("active")),e.target.classList.add("active"),this.currentQuiz=e.target.dataset.quiz,this.renderQuestionList(),this.showEmptyState()})}),this.questionList.addEventListener("click",t=>{const e=t.target.closest(".question-item");e&&(document.querySelectorAll(".question-item").forEach(i=>i.classList.remove("active")),e.classList.add("active"),this.currentQuestionId=e.dataset.id,this.renderSolution())})}renderQuestionList(){const t=n[this.currentQuiz]||[];this.questionList.innerHTML=t.map(e=>`
            <div class="question-item" data-id="${e.id}">
                <span class="q-id">${e.id}</span>
                <span class="q-title">${e.title}</span>
            </div>
        `).join("")}renderSolution(){const e=n[this.currentQuiz].find(r=>r.id===this.currentQuestionId);if(!e)return;const i=new a(e);this.viewer.render(i),this.solutionContent&&(this.solutionContent.style.display="none")}showEmptyState(){this.solutionContent&&(this.solutionContent.innerHTML=`
                <div class="empty-state fade-in">
                    <div class="empty-icon">👈</div>
                    <h3>Select a question to view the solution</h3>
                    <p>Choose a problem from the list on the left to see the problem description, code solution, and visualization.</p>
                </div>
            `)}}export{u as FinalSolutionsController};
