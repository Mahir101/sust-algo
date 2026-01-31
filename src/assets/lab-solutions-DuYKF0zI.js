import{S as r,D as s}from"./solution-viewer-CReZtHwQ.js";import"./main-DaT4__Z1.js";const o={"LabQuiz#1":[{id:"1-A",title:"Warehouse Box Distribution",description:"Find the maximum number of boxes in each row and their shelf position.",problem:`A company stores its products in a **2D grid-based warehouse**, where each cell represents a **shelf** containing a certain number of product boxes. The warehouse management system wants to analyze product distribution to determine **which shelf in each row holds the maximum number of boxes**.

You are tasked with implementing a function that takes a **2D array** (representing the warehouse grid) and **two dummy headed singly linked lists as parameters** and store the following data:
- The **first linked list** stores the **maximum number of boxes** found in each row.
- The **second linked list** stores the **position (column index, starting from 1)** of the shelf in that row that contains the maximum number of boxes.`,type:"coding",visualType:"matrix-linkedlist",pedagogy:{question:"Find max boxes in each row and their positions.",breakdown:["Iterate through each row of the warehouse matrix.","Track the maximum value and its column index (1-based).","Store max values in List 1 and positions in List 2.","Append new nodes to the tail of respective lists."],key_mapping:{"Matrix Row":"Warehouse Aisle","Max Value":"Most Boxes","Column Index":"Shelf Position"},concept_selection:{selected:"Matrix Traversal & Linked List Construction",reason:"Requires iterating 2D data and dynamically storing results without fixed-size arrays."},structural_plan:{default_algo:"Nested Loop Traversal",modifications:["Maintain two parallel linked lists"]}},visualizer:{type:"matrix-linkedlist",initialState:{matrix:[[5,12,3],[8,2,10],[4,4,4]],list1:[],list2:[]}},simulation:{narrative_steps:[{text:"Row 0: Max is 12 at Col 2.",canvasAction:"HIGHLIGHT_MATRIX_CELL",data:{row:0,col:1}},{text:"Append 12 to List 1, 2 to List 2.",canvasAction:"APPEND_LIST",data:{list:1,val:12}},{text:"Row 1: Max is 10 at Col 3.",canvasAction:"HIGHLIGHT_MATRIX_CELL",data:{row:1,col:2}}],sample_io:{input:"Matrix 3x3",expected_output:"L1: 12->10->4, L2: 2->3->1"}},javaCode:`public static void warehouseDataRow(int[][] matrix, Node list1, Node list2) {
    Node tail1 = list1; // Tail for list1 (max values)
    Node tail2 = list2; // Tail for list2 (positions)

    for (int i = 0; i < matrix.length; i++) {
        int maxVal = matrix[i][0];
        int maxPos = 1; // 1-based index

        for (int j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] > maxVal) {
                maxVal = matrix[i][j];
                maxPos = j + 1;
            }
        }

        // Append to list1
        Node newNode1 = new Node(maxVal, null);
        tail1.next = newNode1;
        tail1 = newNode1;

        // Append to list2
        Node newNode2 = new Node(maxPos, null);
        tail2.next = newNode2;
        tail2 = newNode2;
    }
}`,pythonCode:`def warehouseDataRow(matrix, list1, list2):
    tail1 = list1 # Tail for list1 (max values)
    tail2 = list2 # Tail for list2 (positions)

    for row in matrix:
        max_val = row[0]
        max_pos = 1 # 1-based index

        for j in range(1, len(row)):
            if row[j] > max_val:
                max_val = row[j]
                max_pos = j + 1
        
        # Append to list1
        new_node1 = Node(max_val, None)
        tail1.next = new_node1
        tail1 = new_node1

        # Append to list2
        new_node2 = Node(max_pos, None)
        tail2.next = new_node2
        tail2 = new_node2`,shortQuestions:[{question:"Which structure allows inserting a new element between existing elements?",options:["Array","Linked List","Stack","Queue"],answer:"Linked List"},{question:"In a singly linked list, each node contains:",options:["Only data","Data and address of next node","Data and two pointers","Only pointer"],answer:"Data and address of next node"},{question:"What is required to insert an element at the beginning of a linked list?",options:["New index space","Shifting all elements","Creating new node and updating head","Reversing the list"],answer:"Creating new node and updating head"},{question:"Which is true about arrays?",options:["Size can be changed at runtime","Size is fixed after declaration","Elements are stored randomly","Can only store integers"],answer:"Size is fixed after declaration"},{question:"In a doubly linked list, each node contains:",options:["One pointer","Two pointers","No pointers","Only data"],answer:"Two pointers"}]},{id:"1-B",title:"Build Even/Odd List",description:"Process pairs from L1 to access Matrix M and build L2.",problem:`You are given a 2D integer array **M** of size n × n and a singly linked list **L1**. Your task is to process L1 by forming adjacent pairs of nodes. For each consecutive pair (i, j), access the corresponding element in the matrix using the formula: **M[ i % n ][ j % n ]**.

You are also given a second singly linked list **L2** that initially contains only a dummy head node (dh). The retrieved matrix values should be inserted into L2 according to the following rules:
- **Even values**: Insert at the **front** of L2 (immediately after the dummy head).
- **Odd values**: Insert at the **back** of L2.

**Constraint**: Do not use additional arrays or built-in data structures.`,type:"coding",visualType:"matrix-linkedlist",pedagogy:{question:"Process pairs from L1 to access Matrix M and build L2.",breakdown:["Traverse L1 in pairs (curr, curr.next).","Use values as indices (i, j) for Matrix M.","Retrieve value V = M[i%n][j%n].","If V is even, insert at HEAD of L2. If odd, insert at TAIL."],key_mapping:{"L1 Pair":"Matrix Coordinates","Even Value":"Head Insert","Odd Value":"Tail Insert"},concept_selection:{selected:"Linked List/Matrix Interop",reason:"Combines sequential traversal with random access lookup."},structural_plan:{default_algo:"Two-Pointer Traversal",modifications:["Dynamic insertion at both ends"]}},visualizer:{type:"matrix-linkedlist",initialState:{matrix:[[1,2],[3,4]],list:[0,1,0]}},simulation:{narrative_steps:[{text:"Pair (0, 1) -> M[0][1] = 2 (Even). Insert Head.",canvasAction:"HIGHLIGHT_NODE",data:{value:2}},{text:"Pair (1, 0) -> M[1][0] = 3 (Odd). Insert Tail.",canvasAction:"HIGHLIGHT_NODE",data:{value:3}}],sample_io:{input:"L1: 0->1->0",expected_output:"L2: 2->3"}},javaCode:`public static Node buildEvenOddList(int[][] M, Node head1, Node head2, int n) {
    Node curr = head1;
    Node tail2 = head2; // Track tail of L2 for O(1) append

    while (curr != null && curr.next != null) {
        int i = curr.element;
        int j = curr.next.element;
        
        int val = M[i % n][j % n];
        Node newNode = new Node(val, null);

        if (val % 2 == 0) {
            // Even: Insert at front (after dummy head)
            newNode.next = head2.next;
            head2.next = newNode;
            
            // If list was empty, this new node is also the tail
            if (tail2 == head2) {
                tail2 = newNode;
            }
        } else {
            // Odd: Insert at back
            tail2.next = newNode;
            tail2 = newNode;
        }

        curr = curr.next; // Move to next node (overlapping pairs? Problem says "consecutive pair (i,j)", usually implies 1-2, 2-3. Sample shows 3->0, 0->2. So yes, overlapping.)
        // Wait, sample explanation: (3,0), (0,2), (2,4)... Yes, overlapping.
    }
    return head2;
}`,pythonCode:`def buildEvenOddList(M, head1, head2, n):
    curr = head1
    tail2 = head2 # Track tail of L2

    while curr is not None and curr.next is not None:
        i = curr.element
        j = curr.next.element
        
        val = M[i % n][j % n]
        new_node = Node(val, None)

        if val % 2 == 0:
            # Even: Insert at front (after dummy head)
            new_node.next = head2.next
            head2.next = new_node
            
            # If list was empty, update tail
            if tail2 == head2:
                tail2 = new_node
        else:
            # Odd: Insert at back
            tail2.next = new_node
            tail2 = new_node
            
        curr = curr.next # Move to next node for overlapping pairs
        
    return head2`,shortQuestions:[{question:"Output of pseudo-code for Circular Doubly LL (1<->3<->5<->6<->2)?",options:["2, 6, 3, 1, 6","2, 6, 5, 3, 1","1, 3, 5, 6, 2","Error"],answer:"2, 6, 3, 1, 6"},{question:"Fix error in column-wise sum code:",options:["Outer loop should vary columns, inner rows. sum += matrix[i][j]","Outer loop rows, inner columns","Use 1-based indexing","Initialize sum inside inner loop"],answer:"Outer loop should vary columns, inner rows. sum += matrix[i][j]"},{question:"Time complexity of accessing M[i][j] in n x m array?",options:["O(1)","O(n)","O(m)","O(n*m)"],answer:"O(1)"},{question:"Condition for secondary diagonal elements in n x n matrix?",options:["i == j","i + j == n - 1","i + j == n","i > j"],answer:"i + j == n - 1"},{question:"Result of 'newNode.next = curr.next; curr.next = newNode;'?",options:["Inserts newNode after curr","Inserts newNode before curr","Deletes curr","Reverses list"],answer:"Inserts newNode after curr"}]},{id:"1-C",title:"Reverse Clip",description:"Reverse a specific portion of a linked list from index m to n.",problem:`You want to apply a "Reverse Clip" effect only on the section of the video that starts at frame **m** and ends at frame **n** (1-indexed). Everything before frame m and after frame n must remain exactly as it is.

**Input**: Head of singly linked list, m, n.
**Output**: Head of the modified list.`,type:"coding",visualType:"linkedlist",pedagogy:{question:"Reverse a sub-segment of a Linked List (m to n).",breakdown:["Traverse to node m-1 (prev).","Reverse nodes from m to n.","Reconnect the reversed segment to prev and the rest of the list.","Use 1-pass approach for efficiency."],key_mapping:{"m, n":"Start/End Indices",prev:"Anchor node before reversal",curr:"Current node being moved"},concept_selection:{selected:"In-place Reversal",reason:"Avoids extra space; modifies pointers directly."},structural_plan:{default_algo:"Iterative Link Reversal",modifications:["Bounded by n-m steps"]}},visualizer:{type:"linkedlist",initialState:[1,2,3,4,5]},simulation:{narrative_steps:[{text:"Move to index m-1 (Node 1).",canvasAction:"HIGHLIGHT_NODE",data:{index:0}},{text:"Reverse 2, 3, 4.",canvasAction:"REVERSE_SEGMENT",data:{start:1,end:3}}],sample_io:{input:"1->2->3->4->5, m=2, n=4",expected_output:"1->4->3->2->5"}},javaCode:`public static Node reverseClip(Node head, int m, int n) {
    if (head == null || m == n) return head;

    Node dummy = new Node(0, head);
    Node prev = dummy;

    // Move prev to node before m
    for (int i = 1; i < m; i++) {
        prev = prev.next;
    }

    // Start reversing
    Node curr = prev.next;
    Node nextNode = null;
    Node subHead = curr; // Will become the tail of the reversed part

    // Reverse n - m nodes
    // Standard logic: move 'curr' forward, move 'temp' to front
    // Actually, simpler logic:
    // prev points to node BEFORE m.
    // curr points to m.
    // We want to move (n-m) nodes to be after prev.
    
    for (int i = 0; i < n - m; i++) {
        nextNode = curr.next;
        curr.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;
}`,pythonCode:`def reverseClip(head, m, n):
    if head is None or m == n:
        return head
        
    dummy = Node(0, head)
    prev = dummy
    
    # Move prev to node before m
    for i in range(1, m):
        prev = prev.next
        
    # Start reversing
    curr = prev.next
    
    # Reverse n - m nodes
    for i in range(n - m):
        next_node = curr.next
        curr.next = next_node.next
        next_node.next = prev.next
        prev.next = next_node
        
    return dummy.next`,shortQuestions:[{question:"Why is random access not possible in a linked list?",options:["Elements not in contiguous memory","Nodes accessed sequentially","No indexing support","Uses more memory"],answer:"Elements not in contiguous memory"},{question:"What happens if you forget to update the next pointer while deleting?",options:["List adjusts automatically","Memory leak / lost nodes","Program runs correctly","List reverses"],answer:"Memory leak / lost nodes"},{question:"Main advantage of a dummy (sentinel) node?",options:["Simplifies edge cases (head insert/delete)","Saves memory","Makes list circular","Increases speed"],answer:"Simplifies edge cases (head insert/delete)"},{question:"Time complexity of accessing matrix[i][j]?",options:["O(n)","O(log n)","O(1)","O(i+j)"],answer:"O(1)"},{question:"Why is boundary checking important for 2D arrays?",options:["Improve sorting","Prevent invalid memory access","Reduce size","Rearrange elements"],answer:"Prevent invalid memory access"}]},{id:"1-D",title:"Award FastPass",description:"Find the middle node of a linked list.",problem:`Write a function **awardFastPass(head)** that **returns the middle node** of the linked list.
- If the number of guests is **odd**, return the unique middle node.
- If the number of guests is **even**, return the second of the two middle nodes.
- Uses **O(N)** time and **O(1)** extra space.`,type:"coding",visualType:"linkedlist",pedagogy:{question:"Find the middle node of a linked list.",breakdown:["Use two pointers: slow and fast.","Slow moves 1 step, Fast moves 2 steps.","When Fast is null or reaches end, Slow is at middle.","If even, Slow is at 2nd middle node."],key_mapping:{"Slow Pointer":"Middle Candidate","Fast Pointer":"Boundary Checker"},concept_selection:{selected:"Tortoise and Hare Algorithm",reason:"Finds middle in O(N) with O(1) space, avoiding two passes."},structural_plan:{default_algo:"Two-Pointer",modifications:[]}},visualizer:{type:"linkedlist",initialState:[10,20,30,40,50]},simulation:{narrative_steps:[{text:"Slow at 10, Fast at 10.",canvasAction:"HIGHLIGHT_NODE",data:{index:0}},{text:"Slow -> 20, Fast -> 50.",canvasAction:"HIGHLIGHT_NODE",data:{index:1}},{text:"Fast reached end. Middle is 30.",canvasAction:"HIGHLIGHT_NODE",data:{index:2}}],sample_io:{input:"10->20->30->40->50",expected_output:"30"}},javaCode:`public static Node awardFastPass(Node head) {
    if (head == null) return null;
    
    Node slow = head;
    Node fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}`,pythonCode:`def awardFastPass(head):
    if head is None:
        return None
        
    slow = head
    fast = head
    
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        
    return slow`,shortQuestions:[{question:"When should we use an array over a linked list?",options:["Frequent insertions/deletions","Dynamic memory","Fast random access and fixed size","Unknown number of elements"],answer:"Fast random access and fixed size"},{question:"Why can't we access the middle element of a linked list directly?",options:["Contiguous memory","Random storage requiring traversal","Index-based access","Implemented as array"],answer:"Random storage requiring traversal"},{question:"How can you detect a loop in a linked list?",options:["Counting nodes","Check if last node points to first (Circular)","Printing elements","Check if empty"],answer:"Check if last node points to first (Circular)"},{question:"Time complexity of traversing an entire linked list?",options:["O(1)","O(log n)","O(n)","O(n^2)"],answer:"O(n)"},{question:"Where does the next pointer in a dummy headed circular linked list point to?",options:["Last node","None","Dummy head itself","Random node"],answer:"Dummy head itself"}]},{id:"1-E",title:"Min Element to Middle",description:"Move the minimum element to the middle of a doubly linked list.",problem:`You are given a dummy headed doubly linked list containing an **odd number of nodes**. Write a function that will place the node with **minimum value at the middle** of the linked list. The relative order of other elements will remain unchanged.

**Constraints**: Do not change node values, do not use auxiliary data structures.`,type:"coding",visualType:"linkedlist",pedagogy:{question:"Move minimum element to the middle of a DLL.",breakdown:["Find the minimum element and count nodes.","Unlink the minimum node without breaking list.","Traverse to the middle position (count/2).","Insert minimum node at middle."],key_mapping:{"Min Node":"Target to Move","Count/2":"Middle Index"},concept_selection:{selected:"Doubly Linked List Manipulation",reason:"Requires efficient deletion and insertion with prev/next pointers."},structural_plan:{default_algo:"Find-Delete-Insert",modifications:["Handle odd node count logic"]}},visualizer:{type:"linkedlist",initialState:[5,4,1,8,6,3,2]},simulation:{narrative_steps:[{text:"Found min '1'. Unlink it.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}},{text:"Traverse to middle.",canvasAction:"HIGHLIGHT_NODE",data:{index:3}},{text:"Insert '1' at middle.",canvasAction:"INSERT_NODE",data:{value:1,index:3}}],sample_io:{input:"5,4,1,8,6,3,2",expected_output:"5,4,8,1,6,3,2 (approx)"}},javaCode:`public static void minToMiddle(Node head) {
    Node curr = head.next;
    Node minNode = curr;
    int count = 0;

    // Find min node and count nodes
    while (curr != null) {
        if (curr.element < minNode.element) {
            minNode = curr;
        }
        curr = curr.next;
        count++;
    }

    // Unlink minNode
    minNode.prev.next = minNode.next;
    if (minNode.next != null) {
        minNode.next.prev = minNode.prev;
    }

    // Find middle position
    // If 5 nodes, middle is 3rd (index 2 if 0-based).
    // We need to insert AFTER the (count/2)th node?
    // Example: 1 2 3 4 5. Middle is 3.
    // Count = 5. Middle index = 2 (0, 1, 2).
    // Traverse to node at index count/2.
    
    int mid = count / 2;
    Node temp = head.next;
    for (int i = 0; i < mid; i++) {
        temp = temp.next;
    }
    
    // Insert minNode after temp (Wait, "at the middle". If 1 2 3 4 5, middle is 3.
    // If we insert after 2 (index 1), it becomes 1 2 min 3 4 5.
    // The problem says "place... at the middle".
    // Sample: 5 4 3 8 6 1 2 -> 5 4 3 1 8 6 2.
    // Original: 7 nodes. Middle is 4th node (index 3).
    // Sample Output has 1 at index 3 (0-based).
    // So we need to insert it such that it becomes the (count/2)th node (0-indexed)?
    // Or simply, we find the middle of the REMAINING list?
    // The problem implies the final list has min at middle.
    // Since count is odd, there is a unique middle.
    // Let's assume we insert it at index count/2.
    
    // Re-traverse to find insertion point.
    // Note: minNode is already removed, so list size is count-1.
    // We want minNode to be at index count/2 in the FINAL list.
    // So we traverse count/2 nodes in the CURRENT list (size count-1) and insert BEFORE?
    // Or traverse count/2 nodes and insert AFTER?
    // Let's trace sample. 7 nodes. Mid index = 3.
    // We want minNode at index 3.
    // Current list has 6 nodes. Indices 0, 1, 2, 3, 4, 5.
    // If we insert BEFORE index 3, it takes index 3.
    // So traverse to node at index 3?
    
    // Reset temp
    temp = head.next;
    for(int i=0; i<mid; i++){
        temp = temp.next;
    }
    
    // Insert BEFORE temp?
    // Wait, if we traverse 'mid' times, we are at index 'mid'.
    // If we insert BEFORE temp, the new node becomes index 'mid'.
    // Yes.
    
    Node prevNode = temp.prev;
    
    prevNode.next = minNode;
    minNode.prev = prevNode;
    
    minNode.next = temp;
    temp.prev = minNode;
}`,pythonCode:`def minToMiddle(head):
    curr = head.next
    min_node = curr
    count = 0
    
    # Find min node and count
    while curr is not None:
        if curr.element < min_node.element:
            min_node = curr
        curr = curr.next
        count += 1
        
    # Unlink min_node
    min_node.prev.next = min_node.next
    if min_node.next is not None:
        min_node.next.prev = min_node.prev
        
    # Find insertion point
    mid = count // 2
    temp = head.next
    for i in range(mid):
        temp = temp.next
        
    # Insert before temp
    prev_node = temp.prev
    
    prev_node.next = min_node
    min_node.prev = prev_node
    
    min_node.next = temp
    temp.prev = min_node`,shortQuestions:[{question:"Given dummy headed doubly LL (odd nodes). Move min value to middle. Relative order unchanged.",answer:"Algorithm: Find min, remove it, traverse to count/2, insert it."},{question:"Position of 45th element (0-based) in 7x15 array (column-major)?",options:["Row 3, Col 6","Row 6, Col 3","Row 2, Col 5","Row 5, Col 2"],answer:"Row 3, Col 6"},{question:"In n x n array, how many elements satisfy row index <= column index?",options:["n^2","n(n+1)/2","n(n-1)/2","n"],answer:"n(n+1)/2"},{question:"Time complexity of insert tail m times to dummy-headed doubly circular LL (n elements)?",options:["O(1)","O(m)","O(n)","O(m*n)"],answer:"O(m)"},{question:"Time complexity of finding tail of singly circular linked list?",options:["O(1)","O(log n)","O(n)","O(n^2)"],answer:"O(n)"}]},{id:"1-F",title:"Autonomous Mapping",description:"Traverse matrix diagonally and build a doubly linked list.",problem:`Traverse an **n × n matrix** starting from the **top-right corner**, moving **downward row by row (diagonally?)** to the bottom-left corner.
Wait, the problem text says: "Start from the top-right corner and move downward row by row (diagonally) to the bottom-left corner."
This is ambiguous. "Downward row by row" usually means (0,n-1), (1,n-1)...
But "(diagonally)" suggests secondary diagonal?
Let's look at the context. "Autonomous mapping... records energy readings...".
Usually "row by row" means standard traversal.
But "top-right ... to bottom-left".
If it means the secondary diagonal (i+j = n-1), then it's just one diagonal.
If it means traversing the whole matrix, maybe it means traversing columns from right to left?
Or maybe it means traversing the secondary diagonal ONLY?
"Returns the head of a ... list".
"If rows and columns are even...".
Let's assume it means traversing the **Secondary Diagonal**.
"Start from top-right... move downward... to bottom-left".
Top-right is (0, n-1). Bottom-left is (n-1, 0).
This defines the secondary diagonal.
So we traverse (0, n-1), (1, n-2), ..., (n-1, 0).

Rule:
- If n is even: add even elements to DLL in reverse order.
- Else (n is odd): add odd elements in reverse order.`,type:"coding",visualType:"matrix-linkedlist",pedagogy:{question:"Traverse matrix secondary diagonal and build DLL.",breakdown:["Identify Secondary Diagonal: indices (i, n-1-i).","Condition: Even size -> pick even elements (reverse).","Odd size -> pick odd elements (reverse).","Insert selected elements at HEAD of DLL."],key_mapping:{"Secondary Diagonal":"Top-Right to Bottom-Left","Reverse Order":"Insert at Head"},concept_selection:{selected:"Matrix Diagonal Traversal",reason:"Specific path requirement (Secondary Diagonal)."},structural_plan:{default_algo:"Single Loop (0 to n)",modifications:["Check size parity","Head insertion for reverse"]}},visualizer:{type:"matrix-linkedlist",initialState:{matrix:[[1,2,3],[4,5,6],[7,8,9]],list:[]}},simulation:{narrative_steps:[{text:"Size is Odd (3). Pick Odds.",canvasAction:"HIGHLIGHT_MATRIX_CELL",data:{row:0,col:0}},{text:"Diag (0,2)=3 (Odd). Insert Head.",canvasAction:"HIGHLIGHT_MATRIX_CELL",data:{row:0,col:2}},{text:"Diag (1,1)=5 (Odd). Insert Head.",canvasAction:"HIGHLIGHT_MATRIX_CELL",data:{row:1,col:1}}],sample_io:{input:"3x3 Matrix",expected_output:"DLL: 7->5->3"}},javaCode:`public static Node autonomousMapping(int[][] matrix) {
    int n = matrix.length;
    Node dummy = new Node(0, null, null); // Doubly linked list dummy
    // Assuming Node(val, next, prev)
    
    boolean isEvenSize = (n % 2 == 0);
    
    // Traverse secondary diagonal
    for (int i = 0; i < n; i++) {
        int j = n - 1 - i;
        int val = matrix[i][j];
        
        boolean shouldAdd = false;
        if (isEvenSize) {
            if (val % 2 == 0) shouldAdd = true;
        } else {
            if (val % 2 != 0) shouldAdd = true;
        }
        
        if (shouldAdd) {
            // Add in reverse order -> Insert after dummy head
            Node newNode = new Node(val, null, null);
            
            newNode.next = dummy.next;
            if (dummy.next != null) {
                dummy.next.prev = newNode;
            }
            dummy.next = newNode;
            newNode.prev = dummy;
        }
    }
    
    return dummy; // Return dummy or head? "returns the head of a dummy-headed..." -> return dummy.
}`,pythonCode:`def autonomous_mapping(matrix):
    n = len(matrix)
    dummy = Node(0, None, None) # Doubly linked list
    
    is_even_size = (n % 2 == 0)
    
    # Traverse secondary diagonal
    for i in range(n):
        j = n - 1 - i
        val = matrix[i][j]
        
        should_add = False
        if is_even_size:
            if val % 2 == 0: should_add = True
        else:
            if val % 2 != 0: should_add = True
            
        if should_add:
            # Add in reverse order -> Insert after dummy head
            new_node = Node(val, None, None)
            
            new_node.next = dummy.next
            if dummy.next is not None:
                dummy.next.prev = new_node
            dummy.next = new_node
            new_node.prev = dummy
            
    return dummy`,shortQuestions:[{question:"Valid row/col for 311st value in 3rd row (0-indexed)?",answer:"Example: Cols=100, Row=3, Col=10"},{question:"In a dummy headed circular linked list, what does the next pointer of the last node point to?",options:["First node","Dummy Head","Null","Second node"],answer:"Dummy Head"},{question:"Nodes to traverse to reverse Singly Linked List?",options:["n","n/2","n-1","1"],answer:"n"},{question:"Which is NOT an advantage of array?",options:["Fixed size","Random Access","Easy traversal","Cache friendliness"],answer:"Fixed size"},{question:"Which is NOT applicable for singly linked list?",options:["One direction traversal","Random access","Insertion at any place","Dynamic size"],answer:"Random access"}]}],"LabQuiz#2":[{id:"2-A",title:"Max Treasure Path",description:"Find the root-to-leaf path that forms the maximum number.",problem:`In a fantasy adventure game, a treasure map is represented as a binary tree where each node contains a positive digit (0--9). Starting from the root, each root-to-leaf path forms a treasure value by concatenating its digits.

Write a function **maxTressurePath(root)** that finds the root-to-leaf path forming the maximum number and returns that value.`,type:"coding",visualType:"tree",pedagogy:{question:"Find root-to-leaf path forming max number.",breakdown:["Perform DFS from root to leaves.","Build path string by appending current node digit.","At leaf, compare path string numerically.","Return the larger path numeric value."],key_mapping:{"Path String":"Treasure Value",DFS:"Exploration Strategy"},concept_selection:{selected:"DFS (Preorder)",reason:"Need to construct full paths before comparing."},structural_plan:{default_algo:"Recursive DFS",modifications:["String concatenation","Big integer comparison"]}},visualizer:{type:"tree",initialState:[5,3,8,1,4,7,9]},simulation:{narrative_steps:[{text:"Start at Root 5.",canvasAction:"HIGHLIGHT_NODE",data:{value:5}},{text:"Go Left: 5->3->1.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}},{text:"Go Right: 5->8->9 (Matches Max).",canvasAction:"HIGHLIGHT_NODE",data:{value:9}}],sample_io:{input:"Tree",expected_output:"589"}},javaCode:`public static int maxTreasurePath(TreeNode root) {
    return Integer.parseInt(dfs(root, ""));
}

private static String dfs(TreeNode node, String currentPath) {
    if (node == null) return "";
    
    currentPath += node.element;
    
    if (node.left == null && node.right == null) {
        return currentPath;
    }
    
    String leftPath = (node.left != null) ? dfs(node.left, currentPath) : "-1";
    String rightPath = (node.right != null) ? dfs(node.right, currentPath) : "-1";
    
    // Compare strings numerically
    if (leftPath.equals("-1")) return rightPath;
    if (rightPath.equals("-1")) return leftPath;
    
    if (Long.parseLong(leftPath) > Long.parseLong(rightPath)) {
        return leftPath;
    } else {
        return rightPath;
    }
}`,pythonCode:`def maxTreasurePath(root):
    return int(dfs(root, ""))

def dfs(node, current_path):
    if node is None:
        return ""
        
    current_path += str(node.element)
    
    if node.left is None and node.right is None:
        return current_path
        
    left_path = dfs(node.left, current_path) if node.left else "-1"
    right_path = dfs(node.right, current_path) if node.right else "-1"
    
    if left_path == "-1": return right_path
    if right_path == "-1": return left_path
    
    if int(left_path) > int(right_path):
        return left_path
    else:
        return right_path`,shortQuestions:[{question:"Height of BST with Pre-Order [4, 2, 1, 3, 6, 5, 7]?",answer:"2"},{question:"In-Order Successor of node N with two children?",options:["Largest in left subtree","Smallest in right subtree","Right child","Parent"],answer:"Smallest in right subtree"},{question:"Searching for 65 in BST (root 50). Which node could be visited?",options:["30","40","45","70"],answer:"70"},{question:"Can a tree where node = sum of children satisfy BST property?",answer:"No (e.g., Root 10, Left 3, Right 7. 10 is not < 7)."},{question:"printRange(root, Low, High). If root.elem < Low, which subtree to recurse?",answer:"Right subtree only"}]},{id:"2-B",title:"Faulty Sensors",description:"Count sensors where difference with children exceeds threshold D.",problem:`A sensor network is arranged as a **binary tree**. A sensor is considered **faulty** if the **absolute difference** between its reading and **either** of its children's readings is **greater than a given threshold -- D**.

Write a recursive function **faulty(root, D)** that returns the **total number of faulty sensors**.`,type:"coding",visualType:"tree",pedagogy:{question:"Count sensors with large difference from children.",breakdown:["Recursively check each node.","Condition: abs(node - child) > D.","If True for LEFT or RIGHT child, mark as faulty.","Sum faulty status + result of subtrees."],key_mapping:{"Difference > D":"Fault Condition","Recursive Sum":"Total Faulty Count"},concept_selection:{selected:"Tree Traversal (Postorder/Inorder)",reason:"Need to process each node and combine results."},structural_plan:{default_algo:"Recursive Traversal",modifications:["Local check logic"]}},visualizer:{type:"tree",initialState:[10,5,15,2,8,12,18]},simulation:{narrative_steps:[{text:"Check Node 10 vs 5 (Diff=5). If D=3, Faulty.",canvasAction:"HIGHLIGHT_NODE",data:{value:10}},{text:"Check Node 5 vs 2 (Diff=3). Not Faulty.",canvasAction:"RESET"}],sample_io:{input:"Tree, D=3",expected_output:"Count"}},javaCode:`public static int faulty(TreeNode root, int D) {
    if (root == null) return 0;
    
    int isFaulty = 0;
    boolean faultyCondition = false;
    
    if (root.left != null) {
        if (Math.abs(root.element - root.left.element) > D) {
            faultyCondition = true;
        }
    }
    
    if (root.right != null) {
        if (Math.abs(root.element - root.right.element) > D) {
            faultyCondition = true;
        }
    }
    
    if (faultyCondition) {
        isFaulty = 1;
    }
    
    return isFaulty + faulty(root.left, D) + faulty(root.right, D);
}`,pythonCode:`def faulty(root, D):
    if root is None:
        return 0
        
    is_faulty = 0
    faulty_condition = False
    
    if root.left is not None:
        if abs(root.element - root.left.element) > D:
            faulty_condition = True
            
    if root.right is not None:
        if abs(root.element - root.right.element) > D:
            faulty_condition = True
            
    if faulty_condition:
        is_faulty = 1
        
    return is_faulty + faulty(root.left, D) + faulty(root.right, D)`,shortQuestions:[{question:"BST Ops: Insert 50...45. Delete 70 (successor). Insert 65. Result?",answer:"70 replaced by 80. 65 inserted as right child of 60."},{question:"Time complexity of searching in balanced BST?",options:["O(1)","O(log n)","O(n)","O(n log n)"],answer:"O(log n)"},{question:"Property allowing faster searching in BST?",options:["At most two children","Level by level storage","Left < Root < Right","Leaves at same level"],answer:"Left < Root < Right"},{question:"Max nodes in binary tree of height 3?",answer:"15"}]},{id:"2-C",title:"Sum Subtree Max",description:"Sum nodes where max(left) - max(right) < node.value.",problem:`Implement **sum_subtree_max(root)**.
1. Find max value in left subtree.
2. Find max value in right subtree.
3. Calculate sum of all nodes satisfying: **max(left) - max(right) < node value**.`,type:"coding",visualType:"tree",pedagogy:{question:"Sum nodes satisfying max(left) - max(right) < value.",breakdown:["Compute Max of Left Subtree.","Compute Max of Right Subtree.","Check Condition: MaxL - MaxR < NodeVal.","If True, add NodeVal to total sum.","Recurse."],key_mapping:{"Max(Subtree)":"Helper Function","Sum Calculation":"Main Logic"},concept_selection:{selected:"Tree Recursion with Helper",reason:"Need properties of subtrees to decide on current node."},structural_plan:{default_algo:"DFS with Post-processing",modifications:["getMax logic"]}},visualizer:{type:"tree",initialState:[20,10,30,5,15]},simulation:{narrative_steps:[{text:"Node 10: MaxL=5, MaxR=15. 5-15 = -10 < 10. Add 10.",canvasAction:"HIGHLIGHT_NODE",data:{value:10}}],sample_io:{input:"Tree",expected_output:"Sum"}},javaCode:`public static int sumSubtreeMax(TreeNode root) {
    if (root == null) return 0;
    
    int maxLeft = getMax(root.left);
    int maxRight = getMax(root.right);
    
    int sum = 0;
    // Use Integer.MIN_VALUE for empty subtrees as per hint
    // Hint says: "You may use Integer.MIN_VALUE... as initial minimum value"
    // If subtree is null, what is max? Usually -infinity.
    
    if (maxLeft - maxRight < root.element) {
        sum += root.element;
    }
    
    return sum + sumSubtreeMax(root.left) + sumSubtreeMax(root.right);
}

private static int getMax(TreeNode node) {
    if (node == null) return Integer.MIN_VALUE;
    
    int max = node.element;
    int leftMax = getMax(node.left);
    int rightMax = getMax(node.right);
    
    if (leftMax > max) max = leftMax;
    if (rightMax > max) max = rightMax;
    
    return max;
}`,pythonCode:`def sum_subtree_max(root):
    if root is None:
        return 0
        
    max_left = get_max(root.left)
    max_right = get_max(root.right)
    
    total_sum = 0
    
    if max_left - max_right < root.element:
        total_sum += root.element
        
    return total_sum + sum_subtree_max(root.left) + sum_subtree_max(root.right)

def get_max(node):
    if node is None:
        return float('-inf')
        
    max_val = node.element
    left_max = get_max(node.left)
    right_max = get_max(node.right)
    
    if left_max > max_val: max_val = left_max
    if right_max > max_val: max_val = right_max
    
    return max_val`,shortQuestions:[{question:"True statement about BST/Trees?",options:["Worst-case height O(log n)","Complete tree has 0 or 2 children","Search always O(log n)","Unbalanced BST search O(n)"],answer:"Unbalanced BST search O(n)"},{question:"In 1-based array, which indices are leaf nodes?",options:["i > floor(n/2)","i >= n/2","i >= floor(n/2) - 1","i <= floor(n/2)"],answer:"i > floor(n/2)"},{question:"Pair of traversals to uniquely reconstruct tree?",options:["Pre & Post","In & Pre","Pre only","Post only"],answer:"In & Pre"}]},{id:"2-D",title:"Find Closest Value",description:"Find the value in BST closest to target K.",problem:`Write a function **findClosest(root, K)** that returns the value of the node whose absolute difference with K is minimum. If multiple values have the same minimum difference, return the **smaller value**.
**Constraint**: O(H) time.`,type:"coding",visualType:"tree",pedagogy:{question:"Find BST value closest to K.",breakdown:["Traverse BST from root.","Track node with minimum Absolute Difference |Node - K|.","If K < Node, go Left; else go Right.","If Difference matches, pick smaller value."],key_mapping:{"Absolute Difference":"Closeness Metric","BST Property":"Direction Decision"},concept_selection:{selected:"BST Search Variant",reason:"Leverages sorted property to achieve O(H) time."},structural_plan:{default_algo:"Iterative Search",modifications:["Maintain 'closest' variable"]}},visualizer:{type:"tree",initialState:[10,5,15,2,5,13,22]},simulation:{narrative_steps:[{text:"Target K=12. Start at 10 (Diff=2). Closest=10.",canvasAction:"HIGHLIGHT_NODE",data:{value:10}},{text:"12 > 10, Go Right to 15 (Diff=3). Closest still 10.",canvasAction:"HIGHLIGHT_NODE",data:{value:15}}],sample_io:{input:"Tree, K=12",expected_output:"13"}},javaCode:`public static int findClosest(TreeNode root, int K) {
    int closest = root.element;
    TreeNode curr = root;
    
    while (curr != null) {
        if (Math.abs(curr.element - K) < Math.abs(closest - K)) {
            closest = curr.element;
        } else if (Math.abs(curr.element - K) == Math.abs(closest - K)) {
            if (curr.element < closest) {
                closest = curr.element;
            }
        }
        
        if (K < curr.element) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return closest;
}`,pythonCode:`def findClosest(root, K):
    closest = root.element
    curr = root
    
    while curr is not None:
        if abs(curr.element - K) < abs(closest - K):
            closest = curr.element
        elif abs(curr.element - K) == abs(closest - K):
            if curr.element < closest:
                closest = curr.element
                
        if K < curr.element:
            curr = curr.left
        else:
            curr = curr.right
            
    return closest`,shortQuestions:[{question:"Minimum height of BST with 13 nodes?",options:["3","4","6","7"],answer:"3"},{question:"Max comparisons to search in BST with 127 nodes?",answer:"127 (Worst case), 7 (Best/Balanced)"},{question:"Path to 35 in [null, 40, 30, 50, 15, 35, 45, 60]?",answer:"40 -> 30 -> 35"},{question:"True/False: Full binary tree must be complete?",answer:"False"},{question:"True/False: Same Preorder and Postorder => Identical trees?",answer:"False"},{question:"Delete 10 from [null, 15, 10, 20, 8, 12, 25]. Replacement?",options:["8","null","25","12"],answer:"12"},{question:"Largest value in diagram (A->C->G)?",answer:"G"}]},{id:"2-E",title:"Avoid Middle",description:"Print Left Boundary and Leaf Nodes.",problem:"Print nodes on the **left boundary** to reach the bottom-left corner, then continue across the **leaf nodes** from left to right.",type:"coding",visualType:"tree",pedagogy:{question:"Print Left Boundary and Leaf Nodes.",breakdown:["Part 1: Print Left Boundary (Root -> Left Child...) excluding leaf.","Part 2: Print all Leaf Nodes (Recursively).","Combine sequences."],key_mapping:{"Left Boundary":"Outer Edge",Leaves:"Bottom Layer"},concept_selection:{selected:"Hybrid Traversal",reason:"Requires two distinct traversal patterns."},structural_plan:{default_algo:"Iterative + Recursive",modifications:["Stop boundary before leaf"]}},visualizer:{type:"tree",initialState:[1,2,3,4,5,6,7]},simulation:{narrative_steps:[{text:"Left Boundary: 1, 2.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}},{text:"Leaves: 4, 5, 6, 7.",canvasAction:"HIGHLIGHT_NODE",data:{value:4}}],sample_io:{input:"1->2,3->4,5,6,7",expected_output:"1 2 4 5 6 7"}},javaCode:`public void avoidMiddle(TreeNode root) {
    if (root == null) return;
    
    // Print Left Boundary (excluding leaf)
    TreeNode curr = root;
    while (curr != null) {
        if (curr.left == null && curr.right == null) break; // Stop at leaf
        System.out.print(curr.element + " ");
        
        if (curr.left != null) curr = curr.left;
        else curr = curr.right;
    }
    
    // Print Leaves
    printLeaves(root);
}

private void printLeaves(TreeNode node) {
    if (node == null) return;
    if (node.left == null && node.right == null) {
        System.out.print(node.element + " ");
        return;
    }
    printLeaves(node.left);
    printLeaves(node.right);
}`,pythonCode:`def avoidMiddle(root):
    if root is None:
        return
        
    # Print Left Boundary (excluding leaf)
    curr = root
    while curr is not None:
        if curr.left is None and curr.right is None:
            break # Stop at leaf
        print(curr.element, end=" ")
        
        if curr.left is not None:
            curr = curr.left
        else:
            curr = curr.right
            
    # Print Leaves
    printLeaves(root)

def printLeaves(node):
    if node is None:
        return
    if node.left is None and node.right is None:
        print(node.element, end=" ")
        return
    printLeaves(node.left)
    printLeaves(node.right)`,shortQuestions:[{question:"Binary tree where every internal node has exactly two children?",options:["Complete","Full","Perfect","Balanced"],answer:"Full"},{question:"Nodes in perfect binary tree of height h?",options:["2h - 1","2^(h+1) - 1","2^h - 1","h^2 - 1"],answer:"2^(h+1) - 1"},{question:"Traversal to create a copy of a tree?",options:["Inorder","Preorder","Postorder","Level order"],answer:"Preorder"},{question:"Which traversal uses a queue?",options:["Preorder","Inorder","Postorder","Level order"],answer:"Level order"},{question:"Given Pre: 30 20 10 25 40 35 50. Find Postorder.",answer:"10 25 20 35 50 40 30"},{question:"Time complexity of deleting leaf node in BST?",answer:"O(h)"}]},{id:"2-F",title:"Equal Sum Path",description:"Find path where Sum(Even Levels) == Sum(Odd Levels).",problem:"Find the first root-to-leaf path where the sum of difficulty levels at **even levels** equals the sum of difficulty levels at **odd levels**. Return path as string.",type:"coding",visualType:"tree",pedagogy:{question:"Find path where Sum(Even Levels) == Sum(Odd Levels).",breakdown:["DFS tracking current level (0-based) and sums.","Level % 2 == 0 -> Add to EvenSum.","Level % 2 != 0 -> Add to OddSum.","At Leaf: Check if EvenSum == OddSum. Return path."],key_mapping:{"Level Parity":"Alternating Sums","Path Success":"Condition Match"},concept_selection:{selected:"DFS with State Tracking",reason:"Need path history and cumulative sums."},structural_plan:{default_algo:"Recursive DFS",modifications:["Pass sums as arguments"]}},visualizer:{type:"tree",initialState:[5,1,4,3,2]},simulation:{narrative_steps:[{text:"Root 5 (Level 0). Even=5.",canvasAction:"HIGHLIGHT_NODE",data:{value:5}},{text:"Child 1 (Level 1). Odd=1.",canvasAction:"HIGHLIGHT_NODE",data:{value:1}}],sample_io:{input:"Tree",expected_output:"Path String"}},javaCode:`public static String findEqualSumPath(TreeNode root) {
    return dfs(root, 0, 0, 0, "");
}

private static String dfs(TreeNode node, int level, int evenSum, int oddSum, String path) {
    if (node == null) return "";
    
    if (level % 2 == 0) evenSum += node.element;
    else oddSum += node.element;
    
    String newPath = path.isEmpty() ? "" + node.element : path + "->" + node.element;
    
    if (node.left == null && node.right == null) {
        if (evenSum == oddSum) return newPath;
        return "";
    }
    
    String leftRes = dfs(node.left, level + 1, evenSum, oddSum, newPath);
    if (!leftRes.isEmpty()) return leftRes;
    
    return dfs(node.right, level + 1, evenSum, oddSum, newPath);
}`,pythonCode:`def find_equal_sum_path(root):
    return dfs(root, 0, 0, 0, "")

def dfs(node, level, even_sum, odd_sum, path):
    if node is None:
        return ""
        
    if level % 2 == 0:
        even_sum += node.element
    else:
        odd_sum += node.element
        
    new_path = str(node.element) if path == "" else path + "->" + str(node.element)
    
    if node.left is None and node.right is None:
        if even_sum == odd_sum:
            return new_path
        return ""
        
    left_res = dfs(node.left, level + 1, even_sum, odd_sum, new_path)
    if left_res != "":
        return left_res
        
    return dfs(node.right, level + 1, even_sum, odd_sum, new_path)`,shortQuestions:[{question:"Max height of BST with 20 nodes?",answer:"19"},{question:"Sum of nodes at level 2 in [null, 50, 30, 70, 20, 40, 60, 80, 30, 12]?",answer:"200"},{question:"Inorder traversal of tree in Q2?",answer:"30, 20, 12, 30, 40, 50, 60, 70, 80"},{question:"True/False: Searching might check all nodes?",answer:"True"},{question:"True/False: Complete binary tree must be balanced?",answer:"True"},{question:"Given Pre: A B D E C F, In: D B E A F C. Find Postorder.",answer:"D E B F C A"}]}],"LabQuiz#3":[{id:"3-A",title:"Top K Frequent Letters",description:"Find the k most frequent letters using a Max Heap.",problem:`In a game, a player collects a string of letters. Write a function **topKFreqLetters(S, K)** that finds the **k** most frequent letters.
**Constraint**: < O(n^2). Use only one integer frequency array and a Max Heap.`,type:"coding",visualType:"heap",javaCode:`public static void topKFreqLetters(char[] S, int K) {
    int[] freq = new int[26];
    for (char c : S) {
        freq[c - 'a']++;
    }
    
    MaxHeap heap = new MaxHeap(26);
    
    // Insert all present characters into heap
    // Assuming MaxHeap stores objects with (char, frequency) or just frequency?
    // Problem says "Print the frequencies".
    // "Suppose Max Heap class is already given... insert, removeMax".
    // We'll assume we can insert Node(char, freq) or just freq.
    // "Print the frequencies of the k most frequent letters".
    // So we just need to sort frequencies.
    
    for (int f : freq) {
        if (f > 0) {
            heap.insert(f);
        }
    }
    
    for (int i = 0; i < K; i++) {
        System.out.println(heap.removeMax());
    }
}`,pythonCode:`def topKFreqLetters(S, K):
    freq = [0] * 26
    for c in S:
        freq[ord(c) - ord('a')] += 1
        
    heap = MaxHeap(26)
    
    for f in freq:
        if f > 0:
            heap.insert(f)
            
    for i in range(K):
        print(heap.removeMax())`,shortQuestions:[{question:"Which traversal of BST results in descending order?",options:["Inorder (Left-Root-Right)","Preorder","Reverse Inorder (Right-Root-Left)","Postorder"],answer:"Reverse Inorder (Right-Root-Left)"},{question:"BST from [50, 15, 62, 5, 20, 58, 91, 3, 8, 37, 60, 24]. Diff between left/right subtree sizes?",answer:"3 (Left=7, Right=4)"},{question:"Height of the above BST?",answer:"4"}]},{id:"3-B",title:"Package Delivery",description:"Implement removeMin() for a Priority Queue based on Distance and Weight.",problem:`Implement **removeMin()** and **heapify(index)** for a MinHeap storing packages.
Priority:
1. **Distance**: Shorter distance = higher priority.
2. **Weight**: If distance same, lighter weight = higher priority.`,type:"coding",visualType:"heap",javaCode:`public int[] removeMin() {
    if (size == 0) return null;
    
    int[] min = {Distance[0], Weight[0]};
    
    // Move last element to root
    Distance[0] = Distance[size - 1];
    Weight[0] = Weight[size - 1];
    size--;
    
    heapify(0);
    
    return min;
}

private void heapify(int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    // Compare with Left Child
    if (left < size) {
        boolean leftSmaller = false;
        if (Distance[left] < Distance[smallest]) {
            leftSmaller = true;
        } else if (Distance[left] == Distance[smallest] && Weight[left] < Weight[smallest]) {
            leftSmaller = true;
        }
        
        if (leftSmaller) smallest = left;
    }
    
    // Compare with Right Child
    if (right < size) {
        boolean rightSmaller = false;
        if (Distance[right] < Distance[smallest]) {
            rightSmaller = true;
        } else if (Distance[right] == Distance[smallest] && Weight[right] < Weight[smallest]) {
            rightSmaller = true;
        }
        
        if (rightSmaller) smallest = right;
    }
    
    if (smallest != i) {
        // Swap
        int tempD = Distance[i];
        Distance[i] = Distance[smallest];
        Distance[smallest] = tempD;
        
        int tempW = Weight[i];
        Weight[i] = Weight[smallest];
        Weight[smallest] = tempW;
        
        heapify(smallest);
    }
}`,pythonCode:`def removeMin(self):
    if self.size == 0:
        return None
        
    min_pkg = [self.distance[0], self.weight[0]]
    
    # Move last to root
    self.distance[0] = self.distance[self.size - 1]
    self.weight[0] = self.weight[self.size - 1]
    self.size -= 1
    
    self.heapify(0)
    
    return min_pkg

def heapify(self, i):
    smallest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    # Compare Left
    if left < self.size:
        left_smaller = False
        if self.distance[left] < self.distance[smallest]:
            left_smaller = True
        elif self.distance[left] == self.distance[smallest] and self.weight[left] < self.weight[smallest]:
            left_smaller = True
            
        if left_smaller: smallest = left
        
    # Compare Right
    if right < self.size:
        right_smaller = False
        if self.distance[right] < self.distance[smallest]:
            right_smaller = True
        elif self.distance[right] == self.distance[smallest] and self.weight[right] < self.weight[smallest]:
            right_smaller = True
            
        if right_smaller: smallest = right
        
    if smallest != i:
        # Swap
        self.distance[i], self.distance[smallest] = self.distance[smallest], self.distance[i]
        self.weight[i], self.weight[smallest] = self.weight[smallest], self.weight[i]
        
        self.heapify(smallest)`,shortQuestions:[{question:"Level-order array [55, 40, 50, 3, 45, 35]. Is it a Min-Heap?",answer:"No (55 > 40)"},{question:"Is it a valid BST?",answer:"No (50 is in right subtree but < 55)"}]},{id:"3-C",title:"Separate Even/Odd",description:"Process numbers: Even (MaxHeap), Odd (MinHeap).",problem:`Write a function **separateEvenOdd(arr)** that prints:
- All **even** numbers in **descending order** (MaxHeap).
- All **odd** numbers in **ascending order** (MinHeap).
If no even/odd numbers exist, print **EMPTY**.`,type:"coding",visualType:"heap",javaCode:`public static void separateEvenOdd(int[] arr) {
    MaxHeap evenHeap = new MaxHeap(arr.length);
    MinHeap oddHeap = new MinHeap(arr.length);
    
    boolean hasEven = false;
    boolean hasOdd = false;
    
    for (int num : arr) {
        if (num % 2 == 0) {
            evenHeap.insert(num);
            hasEven = true;
        } else {
            oddHeap.insert(num);
            hasOdd = true;
        }
    }
    
    // Print Evens
    if (!hasEven) {
        System.out.println("EMPTY");
    } else {
        while (!evenHeap.isEmpty()) {
            System.out.print(evenHeap.extract() + " ");
        }
        System.out.println();
    }
    
    // Print Odds
    if (!hasOdd) {
        System.out.println("EMPTY");
    } else {
        while (!oddHeap.isEmpty()) {
            System.out.print(oddHeap.extract() + " ");
        }
        System.out.println();
    }
}`,pythonCode:`def separateEvenOdd(arr):
    even_heap = MaxHeap(len(arr))
    odd_heap = MinHeap(len(arr))
    
    has_even = False
    has_odd = False
    
    for num in arr:
        if num % 2 == 0:
            even_heap.insert(num)
            has_even = True
        else:
            odd_heap.insert(num)
            has_odd = True
            
    # Print Evens
    if not has_even:
        print("EMPTY")
    else:
        while not even_heap.isEmpty():
            print(even_heap.extract(), end=" ")
        print()
        
    # Print Odds
    if not has_odd:
        print("EMPTY")
    else:
        while not odd_heap.isEmpty():
            print(odd_heap.extract(), end=" ")
        print()`,shortQuestions:[{question:"In Heap Array (1-based), children of node at index 6?",options:["12 and 13","6 and 7","3 and 12","5 and 6"],answer:"12 and 13"},{question:"Which situation breaks complete binary tree property?",options:["Inserting at last","Deleting root","Skipping an index","Heapifying"],answer:"Skipping an index"},{question:"Where do you put a new element first in Heap Array?",options:["At the very end","Middle","Root","Left child of root"],answer:"At the very end"},{question:"BST from [45, 30, 60, 20, 35, 55, 75]. Path to 75?",answer:"45 -> 60 -> 75"},{question:"Max Heap [null, 100, 70, 60, 30, 50]. Result after deleting root?",answer:"[null, 70, 50, 60, 30]"}]},{id:"3-D",title:"Max Occupied Room",description:"Find room with max total meeting duration using MaxHeap.",problem:`Determine the classroom that has the **maximum total occupied time** by using a **MAX HEAP**.
If multiple classrooms have the same maximum occupied time, return the **smallest classroom number**.`,type:"coding",visualType:"heap",javaCode:`public int maxOccupiedRoom(int n, int[][] meetings, MaxHeap heap) {
    int[] roomDuration = new int[n];
    
    // Calculate total duration for each room
    for (int[] meeting : meetings) {
        int start = meeting[0];
        int end = meeting[1];
        int room = meeting[2];
        roomDuration[room] += (end - start);
    }
    
    // Insert into MaxHeap
    // Node(time, room)
    // Priority: Higher time, then smaller room
    for (int i = 0; i < n; i++) {
        heap.insert(new Node(roomDuration[i], i));
    }
    
    // Extract max
    Node maxNode = heap.delete();
    return maxNode.room;
}`,pythonCode:`def maxOccupiedRoom(n, meetings, heap):
    room_duration = [0] * n
    
    # Calculate total duration
    for meeting in meetings:
        start, end, room = meeting
        room_duration[room] += (end - start)
        
    # Insert into MaxHeap
    for i in range(n):
        heap.insert(Node(room_duration[i], i))
        
    # Extract max
    max_node = heap.delete()
    return max_node.room`,shortQuestions:[{question:"Min Heap [null, 2, 5, 3, 8, 10]. Result after deleting min?",answer:"[null, 3, 5, 10, 8]"},{question:"Convert BST keys {5, 9, 10, 50, 55, 60, 100} to Balanced BST array (1-based).",answer:"[null, 50, 9, 60, 5, 10, 55, 100]"},{question:"Which property is guaranteed after replacing root and sinking in Max Heap?",answer:"Heap Order Property"}]},{id:"3-E",title:"Solar Battery Injector",description:"Balance grid by injecting energy into lowest battery.",problem:"Always apply the energy from an injector to the battery that currently has the **lowest energy level**. Implement using a Min-Heap.",type:"coding",visualType:"heap",javaCode:`public static int[] balanceGrid(int[] batteries, int[] injectors) {
    MinHeap heap = new MinHeap(batteries.length);
    
    // Initial heap construction
    for (int b : batteries) {
        heap.insert(b);
    }
    
    // Process injectors
    for (int energy : injectors) {
        int minVal = heap.extractMin();
        minVal += energy;
        heap.insert(minVal);
    }
    
    // Return heap array (assuming heap.getArray() exists or we extract all)
    // Problem says "return the array representation of the heap".
    // Usually heap is backed by array.
    return heap.getArray(); 
}`,pythonCode:`def balance_grid(batteries, injectors):
    heap = MinHeap(len(batteries))
    
    for b in batteries:
        heap.insert(b)
        
    for energy in injectors:
        min_val = heap.extractMin()
        min_val += energy
        heap.insert(min_val)
        
    return heap.get_array()`,shortQuestions:[{question:"BST traversal for ascending order?",options:["Preorder","Postorder","Level order","Inorder"],answer:"Inorder"},{question:"Parent of node at index i (0-based) in Min Heap?",options:["2i","2i+1","(i-1)/2","(i+1)/2"],answer:"(i-1)/2"},{question:"Edges in BST with 13 nodes?",answer:"12"},{question:"Postorder of BST from [45, 20, 60, 10, 30, 50, 70]?",answer:"10 30 20 50 70 60 45"},{question:"Max Heap [50, 30, 40, 20, 10, 35]. Delete Max, then Insert 45. Result?",answer:"[45, 30, 40, 20, 10, 35]"}]},{id:"3-F",title:"Min Value String",description:"Remove k characters to minimize sum of squared frequencies.",problem:`Remove **k** characters from string **s** such that the sum of squared frequencies is minimized.
**Hint**: Use a MinHeap to store **negative frequencies** (to simulate MaxHeap behavior) because we want to reduce the largest frequencies.`,type:"coding",visualType:"heap",javaCode:`public static int minValue(String s, int k) {
    int[] freq = new int[26];
    for (char c : s.toCharArray()) {
        freq[c - 'a']++;
    }
    
    MinHeap heap = new MinHeap(26);
    
    // Insert negative frequencies to simulate MaxHeap
    for (int f : freq) {
        if (f > 0) heap.insert(-f);
    }
    
    // Remove k characters
    for (int i = 0; i < k; i++) {
        if (heap.isEmpty()) break;
        int val = heap.extractMin(); // e.g., -5
        val++; // Reduce magnitude: -5 -> -4
        if (val < 0) heap.insert(val);
    }
    
    // Calculate sum of squares
    int sum = 0;
    while (!heap.isEmpty()) {
        int val = heap.extractMin();
        sum += val * val; // (-4)*(-4) = 16
    }
    
    return sum;
}`,pythonCode:`def minValue(s, k):
    freq = [0] * 26
    for c in s:
        freq[ord(c) - ord('a')] += 1
        
    heap = MinHeap(26)
    
    # Insert negative frequencies
    for f in freq:
        if f > 0:
            heap.insert(-f)
            
    # Remove k characters
    for i in range(k):
        if heap.isEmpty(): break
        val = heap.extractMin()
        val += 1
        if val < 0:
            heap.insert(val)
            
    # Calculate sum of squares
    total_sum = 0
    while not heap.isEmpty():
        val = heap.extractMin()
        total_sum += val * val
        
    return total_sum`,shortQuestions:[{question:"Array [Null, 45, 73, 20, 8, 2, 52, 12, 11, 78, 32, 25]. Parent of node 2 (index 5)?",answer:"73 (Index 2)"},{question:"Right child of node 12 (index 7)?",answer:"None (Index 15 out of bounds)"},{question:"Left child of node 20 (index 3)?",answer:"52 (Index 6)"},{question:"Min Heap [4, 7, 9, 10, 12, 11]. Delete Min, then Insert 3. Result?",answer:"[3, 10, 7, 11, 12, 9]"}]}]};class m{constructor(){this.currentQuiz="LabQuiz#1",this.currentQuestionId=null,this.currentLang="java",this.viewer=null}init(){this.cacheDOM(),this.bindEvents(),this.renderQuestionList(),this.viewer=new r(this.viewerContainer,{onClose:()=>{this.solutionContent&&(this.solutionContent.style.display="block")}}),window.solutionViewer=this.viewer}cacheDOM(){const e=document.querySelector(".lab-solutions-container");e&&(this.quizButtons=e.querySelectorAll(".quiz-selector button"),this.questionList=e.querySelector(".question-list"),this.solutionContent=e.querySelector(".solution-content"),this.viewerContainer=e.querySelector("#solutionViewerContainer"))}bindEvents(){this.quizButtons.forEach(e=>{e.addEventListener("click",t=>{var i;this.quizButtons.forEach(a=>a.classList.remove("active"));const n=t.target.closest("button");n&&(n.classList.add("active"),(i=this.viewer)==null||i.close(),this.currentQuiz=n.dataset.quiz,this.renderQuestionList(),this.showEmptyState())})}),this.questionList.addEventListener("click",e=>{const t=e.target.closest(".question-item");t&&(document.querySelectorAll(".question-item").forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.currentQuestionId=t.dataset.id,this.renderSolution())})}renderQuestionList(){const e=o[this.currentQuiz]||[];if(e.length===0){this.questionList.innerHTML='<div style="padding:1rem; text-align:center; color:var(--text-muted)">No questions found.</div>';return}this.questionList.innerHTML=e.map(t=>`
            <div class="question-item" data-id="${t.id}">
                <span class="q-id">${t.id}</span>
                <span class="q-title">${t.title}</span>
            </div>
        `).join("")}renderSolution(){const t=o[this.currentQuiz].find(i=>i.id===this.currentQuestionId);if(!t)return;const n=new s(t);this.viewer.render(n),this.solutionContent&&(this.solutionContent.style.display="none")}showEmptyState(){this.solutionContent&&(this.solutionContent.innerHTML=`
                <div class="empty-state fade-in">
                    <div class="empty-icon">👈</div>
                    <h3>Select a question to view the solution</h3>
                    <p>Choose a problem from the list on the left to see the problem description, code solution, and visualization.</p>
                </div>
            `)}}export{m as LabSolutionsController};
