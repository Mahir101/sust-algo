import{S as s,D as l}from"./solution-viewer-CReZtHwQ.js";import"./main-DaT4__Z1.js";const o={"Fall-24":[{id:"Fall24-Q1",title:"Recurrence Analysis",description:"Analyze time complexity of recursive function.",problem:`Consider the following code:
Function F(n):
  If (n == 1) Return True;
  Else:
    X = F(n/2);
    Y = F(n/2);
    Z = F(n/2);
    U = A(n);

Function A(n):
  For i := n to 1; i--:
    Return True;

i. Write recurrence relation for F(n).
ii. Solve for Big-O complexity.`,type:"theory",visualType:"recurrence-tree",breakdown:["Identify what F(n) does: calls itself 3 times with n/2","Identify what A(n) does: simple loop from n to 1, O(n) work","Combine: T(n) = 3T(n/2) + O(n)","Recognize this as Master Theorem Case 1"],keyDetails:{"F calls itself 3 times":"a = 3 (number of subproblems)","Each call is F(n/2)":"b = 2 (input size reduction)","A(n) is O(n)":"f(n) = n (work outside recursion)","log_b(a) = log_2(3) ≈ 1.585":"Compare with f(n) = n^1"},baseAlgorithm:"Master Theorem",modifications:["No algorithm modification - this is pure analysis","Apply Case 1: f(n) = O(n^{log_b(a) - ε})","Since 1 < 1.585, we have T(n) = Θ(n^{log_2(3)})"],narrativeSteps:[{time:0,text:"Let's break down the recurrence step by step...",codeLine:null,action:"intro"},{time:3,text:"F(n) makes THREE recursive calls to F(n/2)",codeLine:4,action:"highlight"},{time:6,text:"A(n) runs a simple loop from n to 1 — that's O(n) work",codeLine:8,action:"highlight"},{time:9,text:"So our recurrence is: T(n) = 3T(n/2) + O(n)",codeLine:null,action:"formula"},{time:12,text:"Using Master Theorem: a=3, b=2, f(n)=n",codeLine:null,action:"analysis"},{time:15,text:"log₂(3) ≈ 1.585 > 1, so Case 1 applies",codeLine:null,action:"conclusion"},{time:18,text:"Final Answer: T(n) = Θ(n^{1.585})",codeLine:null,action:"result"}],expectedOutput:"T(n) = Θ(n^{log₂(3)}) = Θ(n^{1.585})",keyTakeaways:["Count recursive calls to find 'a' in Master Theorem","Input reduction factor gives you 'b'","Work done outside recursion is f(n)","Compare log_b(a) with exponent of f(n) to pick the right case"],javaCode:`/*
i. Recurrence Relation:
   F(n) calls F(n/2) three times.
   A(n) runs a loop from n to 1, so it takes O(n) time.
   T(n) = 3T(n/2) + O(n)

ii. Complexity Analysis (Master Theorem):
   T(n) = aT(n/b) + f(n)
   a = 3, b = 2, f(n) = n
   log_b(a) = log_2(3) ≈ 1.585
   f(n) = n^1 = n^c where c = 1
   Since c < log_b(a) (1 < 1.585), Case 1 applies.
   T(n) = Θ(n^{log_b(a)}) = Θ(n^{log_2(3)}) ≈ Θ(n^{1.585})
*/`,pythonCode:"# See Java comments for analysis."},{id:"Fall24-Q2",title:"Peak Element",description:"Find peak element in array in < O(N) time.",problem:`Find a peak element (greater than neighbors) in an array.
Array has exactly one peak.
Target complexity: < O(N).`,type:"coding",visualType:"binary-search",breakdown:["A peak is greater than both its neighbors","Linear scan would be O(N) - we need better","Binary search can help: if mid < mid+1, peak is on right; else left","This gives us O(log N) complexity"],keyDetails:{"Peak > neighbors":"Local maximum property","Binary search on value trend":"Compare arr[mid] with arr[mid+1]","Converge when left == right":"That's our peak"},baseAlgorithm:"Binary Search",modifications:["Instead of searching for a target value, search for a property","Direction is determined by comparing arr[mid] with arr[mid+1]","No target to match - we converge to the peak naturally"],narrativeSteps:[{time:0,text:"We need to find a peak faster than O(N)...",codeLine:null,action:"intro"},{time:3,text:"Binary Search! But what property do we search for?",codeLine:null,action:"question"},{time:6,text:"Key insight: if arr[mid] < arr[mid+1], peak must be on the right",codeLine:6,action:"highlight"},{time:9,text:"Otherwise, peak is on the left (or mid itself)",codeLine:8,action:"highlight"},{time:12,text:"When left == right, we've found our peak!",codeLine:12,action:"conclusion"}],javaCode:`public static int findPeak(int[] arr) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] > arr[mid + 1]) {
            // Peak is in left half (including mid)
            right = mid;
        } else {
            // Peak is in right half (excluding mid)
            left = mid + 1;
        }
    }
    return arr[left]; // or left (index)
}`,pythonCode:`def find_peak(arr):
    left, right = 0, len(arr) - 1
    
    while left < right:
        mid = left + (right - left) // 2
        
        if arr[mid] > arr[mid + 1]:
            right = mid
        else:
            left = mid + 1
            
    return arr[left]`},{id:"Fall24-Q3",title:"Warehouse Sort",description:"Stable sort for packages by deadline.",problem:`Sort packages by delivery deadline (ascending).
Must be Stable (preserve order of package_id for same deadline).
Time Complexity: O(n log n).
Algorithm: Merge Sort.`,type:"theory",visualizer:{type:"merge-sort",initialState:{algo:"merge",data:[45,12,8,33,21,5,99,2]}},expectedOutput:"[2, 5, 8, 12, 21, 33, 45, 99]",breakdown:["We need O(n log n) - rules out O(n²) sorts","Must be STABLE - rules out Quick Sort, Heap Sort","Merge Sort is O(n log n) and stable ✓","Stability means equal elements keep their relative order"],keyDetails:{"O(n log n) required":"Merge Sort, Quick Sort, Heap Sort qualify","Stable required":"Only Merge Sort is stable among O(n log n) sorts","Why stability matters":"Same deadline packages keep original order"},baseAlgorithm:"Merge Sort",modifications:["Use <= instead of < in merge comparison for stability","When deadlines are equal, the one from left array comes first"],narrativeSteps:[{time:0,text:"We need O(n log n) AND stability...",codeLine:null,action:"intro"},{time:3,text:"Quick Sort? O(n log n) but NOT stable ❌",codeLine:null,action:"analysis"},{time:6,text:"Heap Sort? O(n log n) but NOT stable ❌",codeLine:null,action:"analysis"},{time:9,text:"Merge Sort? O(n log n) AND stable ✓",codeLine:null,action:"conclusion"},{time:12,text:"What if we used Quick Sort? It might swap equal elements!",codeLine:null,action:"whatif",ghostState:{data:[5,2,8,12,21,33,45,99],highlightIndices:[1,2]}},{time:15,text:"The <= comparison in merge preserves order of equals",codeLine:6,action:"highlight"},{time:18,text:"Final Sorted Output: [2, 5, 8, 12, 21, 33, 45, 99]",codeLine:null,action:"result",output:"[2, 5, 8, 12, 21, 33, 45, 99]"}],javaCode:`/*
Algorithm: Merge Sort
Reason:
1. It has O(n log n) time complexity in all cases.
2. It is a Stable sort (crucial for preserving package_id order).

Pseudocode:
MergeSort(arr):
    If length of arr <= 1 return arr
    mid = length / 2
    left = MergeSort(arr[0...mid])
    right = MergeSort(arr[mid...end])
    return Merge(left, right)

Merge(left, right):
    result = []
    While left and right not empty:
        If left[0].deadline <= right[0].deadline:  // <= for stability
            Append left[0] to result
            Remove left[0]
        Else:
            Append right[0] to result
            Remove right[0]
    Append remaining of left/right
    Return result
*/`,pythonCode:"# See Java comments."},{id:"Fall24-Q4",title:"Max Subarray Sum",description:"Find max consecutive performance streak.",problem:`Find maximum subarray sum using Divide & Conquer.
Input: [1, 4, 3, -5, 5, 6, 1, -4]`,type:"coding",visualType:"divide-conquer",breakdown:["Divide array into left and right halves","Max subarray is entirely in left, entirely in right, OR crosses the middle","Recursively solve left and right","For crossing case: extend from mid to left and mid+1 to right"],keyDetails:{"Base case":"Single element is its own max subarray",Divide:"Split at mid = (left + right) / 2",Conquer:"Recursively find max in left and right halves",Combine:"Compare leftMax, rightMax, and crossMax"},baseAlgorithm:"Divide and Conquer",modifications:["The crossing sum is computed in O(n) by extending from mid","Left extension: go from mid towards left, track max sum","Right extension: go from mid+1 towards right, track max sum","Crossing max = left extension + right extension"],narrativeSteps:[{time:0,text:"We'll use Divide & Conquer to find max subarray...",codeLine:null,action:"intro"},{time:3,text:"Split array into left [1,4,3,-5] and right [5,6,1,-4]",codeLine:4,action:"divide"},{time:6,text:"Recursively find max subarray in each half",codeLine:6,action:"conquer"},{time:9,text:"But what if max subarray CROSSES the middle?",codeLine:null,action:"question"},{time:12,text:"Extend from mid to left, then mid+1 to right",codeLine:10,action:"highlight"},{time:15,text:"Crossing sum = leftExtension + rightExtension",codeLine:14,action:"combine"},{time:18,text:"Answer = max(leftMax, rightMax, crossMax)",codeLine:16,action:"result"}],javaCode:`public static int maxSubArray(int[] nums) {
    return maxSubArrayHelper(nums, 0, nums.length - 1);
}

private static int maxSubArrayHelper(int[] nums, int left, int right) {
    if (left == right) return nums[left];
    
    int mid = left + (right - left) / 2;
    
    int leftMax = maxSubArrayHelper(nums, left, mid);
    int rightMax = maxSubArrayHelper(nums, mid + 1, right);
    int crossMax = maxCrossingSum(nums, left, mid, right);
    
    return Math.max(Math.max(leftMax, rightMax), crossMax);
}

private static int maxCrossingSum(int[] nums, int left, int mid, int right) {
    int leftSum = Integer.MIN_VALUE;
    int sum = 0;
    for (int i = mid; i >= left; i--) {
        sum += nums[i];
        if (sum > leftSum) leftSum = sum;
    }
    
    int rightSum = Integer.MIN_VALUE;
    sum = 0;
    for (int i = mid + 1; i <= right; i++) {
        sum += nums[i];
        if (sum > rightSum) rightSum = sum;
    }
    
    return leftSum + rightSum;
}`,pythonCode:`def max_sub_array(nums):
    def helper(left, right):
        if left == right:
            return nums[left]
            
        mid = (left + right) // 2
        
        left_max = helper(left, mid)
        right_max = helper(mid + 1, right)
        cross_max = cross_sum(left, mid, right)
        
        return max(left_max, right_max, cross_max)
        
    def cross_sum(left, mid, right):
        left_sum = float('-inf')
        curr_sum = 0
        for i in range(mid, left - 1, -1):
            curr_sum += nums[i]
            left_sum = max(left_sum, curr_sum)
            
        right_sum = float('-inf')
        curr_sum = 0
        for i in range(mid + 1, right + 1):
            curr_sum += nums[i]
            right_sum = max(right_sum, curr_sum)
            
        return left_sum + right_sum
        
    return helper(0, len(nums) - 1)`}],"Spring-24":[{id:"Spring24-Q1",title:"Asymptotic Analysis",description:"Order functions by growth rate and solve recurrence.",problem:`a. Sort functions by growth rate:
   f1(n) = log(n!), f2(n) = n^(4/3), f3(n) = n + 10^n, f4(n) = 17^13, f5(n) = n log n, f6(n) = n log_n(n^2).
b. Time complexity of nested loop:
   for i in range(1, n):
     j = 1
     while j < i*i:
       j = j + 1
c. Solve Recurrence: T(n) = 8T(n/4) + n*sqrt(n).`,type:"theory",visualType:"none",breakdown:["Part a: Compare asymptotic growth rates","Part b: Analyze nested loop iteration counts","Part c: Apply Master Theorem to recurrence"],keyDetails:{"log(n!) ≈ n log n":"Stirling's approximation","17^13 = constant":"O(1) - doesn't grow with n","n + 10^n dominated by 10^n":"Exponential dominates polynomial","Inner loop runs i² times":"Total = Σi² = O(n³)"},baseAlgorithm:"Master Theorem / Summation Analysis",modifications:[],narrativeSteps:[{time:0,text:"Let's tackle each part systematically...",codeLine:null,action:"intro"},{time:4,text:"Part a: Constants < Polynomial < n log n < Exponential",codeLine:null,action:"analysis"},{time:8,text:"Part b: Inner loop runs i² times, outer runs n times",codeLine:null,action:"analysis"},{time:12,text:"Part c: a=8, b=4, f(n)=n^1.5, log₄8 = 1.5",codeLine:null,action:"analysis"}],javaCode:`/*
a. Growth Rate Sorting:
   f4(n) = 17^13 (Constant) -> O(1)
   f6(n) = n * log_n(n^2) = n * 2 = 2n -> O(n)
   f1(n) = log(n!) ≈ n log n -> O(n log n)
   f5(n) = n log n -> O(n log n)
   f2(n) = n^(4/3) ≈ n^1.33 -> O(n^1.33)
   f3(n) = n + 10^n -> O(10^n) (Exponential)
   
   Order: f4 < f6 < f1 ≈ f5 < f2 < f3

b. Loop Analysis:
   Outer loop: i from 1 to n.
   Inner loop: j from 1 to i*i. Runs i² times.
   Total = Sum(i²) for i=1 to n ≈ n³/3.
   Complexity: O(n³).

c. Recurrence T(n) = 8T(n/4) + n*sqrt(n):
   n*sqrt(n) = n^(1.5).
   a=8, b=4. log_b(a) = log_4(8) = 1.5.
   f(n) = n^1.5.
   Since f(n) = Θ(n^{log_b(a)}), Case 2 applies.
   T(n) = Θ(n^{1.5} log n) = Θ(n*sqrt(n) * log n).
*/`,pythonCode:"# See Java comments."},{id:"Spring24-Q2",title:"Karatsuba & QuickSort",description:"Explain Karatsuba and Quick Sort worst case.",problem:`a. Explain Karatsuba's Fast Multiplication (N-digit to three N/2-digit).
b. Worst case time complexity of Quick Sort? Illustrate with array if last element is pivot.`,type:"theory",visualType:"none",breakdown:["Karatsuba reduces 4 multiplications to 3 using algebra","Quick Sort O(n²) when pivot is always min or max","This happens when array is already sorted"],keyDetails:{"XY = AC·10^N + (AD+BC)·10^(N/2) + BD":"Standard formula needs 4 mults","(A+B)(C+D) - AC - BD = AD+BC":"Clever trick to get AD+BC with 1 mult","Quick Sort degrades on sorted input":"Each partition leaves one empty side"},baseAlgorithm:"Karatsuba Multiplication / Quick Sort",modifications:[],narrativeSteps:[{time:0,text:"Karatsuba is clever algebra to reduce multiplications...",codeLine:null,action:"intro"},{time:5,text:"Instead of 4 multiplications, we only need 3",codeLine:null,action:"analysis"},{time:10,text:"Quick Sort worst case: O(n²) on sorted arrays",codeLine:null,action:"warning"}],javaCode:`/*
a. Karatsuba Algorithm:
   To multiply two N-digit numbers X and Y:
   X = A*10^(N/2) + B
   Y = C*10^(N/2) + D
   XY = AC*10^N + (AD+BC)*10^(N/2) + BD
   Compute:
   1. AC
   2. BD
   3. (A+B)(C+D) = AC + AD + BC + BD
   4. AD + BC = (3) - (1) - (2)
   Requires 3 multiplications of size N/2 instead of 4.
   T(n) = 3T(n/2) + O(n) -> O(n^log2(3)) ≈ O(n^1.585).

b. Quick Sort Worst Case:
   O(n^2).
   Occurs when pivot is always smallest or largest element.
   Example (Last element pivot): [1, 2, 3, 4, 5]
   Pivot 5: Partitions into [1, 2, 3, 4] and [].
   Pivot 4: Partitions into [1, 2, 3] and [].
   ...
   Recursion depth n. Total work n + (n-1) + ... + 1 = O(n^2).
*/`,pythonCode:"# See Java comments."},{id:"Spring24-Q3",title:"Bitonic Search",description:"Find peak/valley index in bitonic array.",problem:`Array increases then decreases (or vice versa). Find the turning point index i.
Input: [9, 12, 15, 2, 4, 5, 7, 8]`,type:"coding",visualType:"binary-search",breakdown:["Array has two sorted halves with a 'drop' point","First half values > all second half values","Binary search to find the drop point","Compare mid with last element to determine direction"],keyDetails:{"arr[0] > arr[N-1]":"First half is 'large', second half is 'small'","arr[mid] > arr[N-1]":"Mid is in large half, go right","arr[mid] < arr[N-1]":"Mid is in small half, go left","Drop detected when arr[mid] < arr[mid-1]":"Found the split point"},baseAlgorithm:"Binary Search",modifications:["Compare with arr[N-1] instead of a target","Look for the 'drop' point where arr[i-1] > arr[i]"],narrativeSteps:[{time:0,text:"This array has a 'drop' point where values suddenly decrease...",codeLine:null,action:"intro"},{time:4,text:"We can find it with binary search in O(log N)",codeLine:null,action:"analysis"},{time:8,text:"Compare arr[mid] with arr[N-1] to decide direction",codeLine:9,action:"highlight"},{time:12,text:"The drop point is where arr[mid] < arr[mid-1]",codeLine:6,action:"conclusion"}],javaCode:`public static int findSplitPoint(int[] arr) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        // Check if mid is the start of second half
        if (mid > 0 && arr[mid] < arr[mid - 1]) {
            return mid;
        }
        
        // Compare with last element
        if (arr[mid] > arr[arr.length - 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 0;
}`,pythonCode:`def find_split_point(arr):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if mid > 0 and arr[mid] < arr[mid - 1]:
            return mid
            
        if arr[mid] > arr[-1]:
            left = mid + 1
        else:
            right = mid - 1
            
    return 0`},{id:"Spring24-Q4",title:"File Navigator",description:"Graph adjacency list and BFS simulation.",problem:`File structure encoded in graph.
Find file location (path).
i. Adjacency List.
ii. Algorithm? BFS (Shortest Path in unweighted graph).
iii. Simulation.`,type:"theory",visualType:"graph",breakdown:["File system is a tree/graph structure","Need to find shortest path from root to target","BFS gives shortest path in unweighted graph","Track parent pointers to reconstruct path"],keyDetails:{"Adjacency List":"Space-efficient O(V+E) representation",BFS:"Explores level by level, finds shortest path","Parent pointers":"Needed to reconstruct the path back to root"},baseAlgorithm:"BFS (Breadth-First Search)",modifications:["Track parent of each node while exploring","Once target found, backtrack using parents"],narrativeSteps:[{time:0,text:"File system is a graph - folders are nodes, paths are edges",codeLine:null,action:"intro"},{time:4,text:"BFS finds shortest path to our target file",codeLine:null,action:"analysis"},{time:8,text:"Each level of BFS = one folder deeper",codeLine:null,action:"highlight"},{time:12,text:"Keep parent pointers to trace the path back",codeLine:null,action:"conclusion"}],javaCode:`/*
i. Adjacency List:
   Drive: [Work, other file]
   Work: [Tasklist]
   Tasklist: [task1.txt]
   other file: [Media]
   Media: [Cinema]
   Cinema: [Horror Movies]

ii. Algorithm: BFS (Breadth-First Search)
   Reason: Finds the shortest path in an unweighted graph.

iii. Simulation (Find "Horror Movies"):
   Queue: [Drive]
   Pop Drive. Neighbors: Work, other file.
   Queue: [Work, other file]
   Pop Work. Neighbor: Tasklist.
   Queue: [other file, Tasklist]
   Pop other file. Neighbor: Media.
   Queue: [Tasklist, Media]
   ...
   Eventually find "Horror Movies".
*/`,pythonCode:"# See Java comments."}],"Summer-24":[{id:"Summer24-Q1",title:"Recurrence Analysis",description:"Analyze code snippet for recurrence and complexity.",problem:`Analyze func(n):
if n<=1 return 1
else:
  loop 3 times: a += func(n/2)
  b = func2(n)
  return a + b

func2(n):
  loop k=n to 1 step -4:
    loop m=0 to n step 2:
      c += k+m
  return c

i. Recurrence relation for func.
ii. Time complexity.`,type:"theory",visualType:"recurrence-tree",breakdown:["func calls itself 3 times with n/2","func2 has nested loops: outer O(n/4), inner O(n/2)","func2 total = O(n²)","Recurrence: T(n) = 3T(n/2) + O(n²)"],keyDetails:{"3 recursive calls":"a = 3","Each call with n/2":"b = 2","func2 is O(n²)":"f(n) = n²","log_2(3) ≈ 1.585 < 2":"Case 3 of Master Theorem"},baseAlgorithm:"Master Theorem",modifications:[],narrativeSteps:[{time:0,text:"Let's analyze the recurrence step by step...",codeLine:null,action:"intro"},{time:4,text:"func makes 3 calls to func(n/2)",codeLine:4,action:"highlight"},{time:8,text:"func2 has O(n²) complexity from nested loops",codeLine:9,action:"highlight"},{time:12,text:"T(n) = 3T(n/2) + O(n²) → Master Theorem Case 3",codeLine:null,action:"conclusion"}],javaCode:`/*
i. Recurrence Relation:
   func(n) calls func(n/2) 3 times.
   func2(n) complexity:
     Outer loop runs n/4 times -> O(n).
     Inner loop runs n/2 times -> O(n).
     Total func2(n) = O(n²).
   
   T(n) = 3T(n/2) + O(n²).

ii. Time Complexity (Master Theorem):
   a = 3, b = 2, f(n) = n².
   log_b(a) = log_2(3) ≈ 1.585.
   f(n) = n².
   Since f(n) = Ω(n^{log_b(a) + ε}) (2 > 1.585), Case 3 applies.
   T(n) = Θ(f(n)) = Θ(n²).
*/`,pythonCode:"# See Java comments."},{id:"Summer24-Q2",title:"Asymptotic Comparison",description:"Compare functions using Big-O and Omega.",problem:`Identify if f(n) = O(g(n)) or f(n) = Ω(g(n)).
1. f(n) = n², g(n) = n²
2. f(n) = (n+n)(30n), g(n) = n²`,type:"theory",visualType:"none",breakdown:["f = O(g) means f grows at most as fast as g","f = Ω(g) means f grows at least as fast as g","When both hold, f = Θ(g)"],keyDetails:{"n² vs n²":"Same growth rate, both O and Ω apply","(2n)(30n) = 60n²":"Same as n², both apply"},baseAlgorithm:"Asymptotic Analysis",modifications:[],narrativeSteps:[],javaCode:`/*
1. f(n) = n², g(n) = n².
   f(n) = O(g(n)) AND f(n) = Ω(g(n)).
   Both are Θ(n²).

2. f(n) = (2n)(30n) = 60n². g(n) = n².
   f(n) = O(g(n)) AND f(n) = Ω(g(n)).
   Both are Θ(n²).
*/`,pythonCode:"# See Java comments."},{id:"Summer24-Q3",title:"Integer Square Root",description:"Find integer square root in O(log N).",problem:`Find integer square root of key without sqrt().
Friend's approach: Linear Search O(n).
Proposed: O(log N).
i. Friend's solution (Linear).
ii. Proposed solution (Binary Search).`,type:"coding",visualType:"binary-search",breakdown:["Linear search: try 1, 2, 3... until i² > key","Binary search: search in range [1, key]","If mid² < key, answer might be mid, search right","If mid² > key, search left"],keyDetails:{"Linear is O(√n)":"Loops until i² exceeds key","Binary is O(log n)":"Halves search space each iteration"},baseAlgorithm:"Binary Search",modifications:["Track 'ans' when mid² ≤ key","Return ans when loop ends"],narrativeSteps:[{time:0,text:"Linear search is O(√n), but we can do O(log n)!",codeLine:null,action:"intro"},{time:4,text:"Binary search in range [1, key]",codeLine:3,action:"highlight"},{time:8,text:"If mid² ≤ key, mid might be the answer",codeLine:8,action:"highlight"},{time:12,text:"Continue searching for a larger valid answer",codeLine:10,action:"conclusion"}],javaCode:`/*
i. Linear Search (Friend's):
   Iterate i from 1 to key.
   If i*i <= key, result = i.
   Else break.
   Time: O(sqrt(key)).

ii. Binary Search (Proposed):
*/
public static int sqrtBinarySearch(int key) {
    if (key == 0 || key == 1) return key;
    
    int low = 1, high = key;
    int ans = 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if ((long)mid * mid == key) {
            return mid;
        }
        
        if ((long)mid * mid < key) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}`,pythonCode:`def sqrt_binary_search(key):
    if key == 0 or key == 1:
        return key
        
    low, high = 1, key
    ans = 1
    
    while low <= high:
        mid = low + (high - low) // 2
        
        if mid * mid == key:
            return mid
            
        if mid * mid < key:
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
            
    return ans`},{id:"Summer24-Q4",title:"Max Subarray Sum",description:"Taylor Swift songs (Kadane's Algorithm).",problem:`Maximize audience interest (consecutive segment).
Scores: [-3, 7, 12, -8, -2, 83, -7, 4].
i. Find segment and max score.
ii. Time complexity (O(n log n) or better).`,type:"coding",visualType:"array",breakdown:["Kadane's Algorithm: O(n) solution","Track current sum and global max","Reset current if it becomes negative","Segment: [7, 12, -8, -2, 83] = 92"],keyDetails:{"Current sum":"Add current element, reset to 0 if negative","Global max":"Update whenever current > global","Tracking indices":"Remember start/end when updating global max"},baseAlgorithm:"Kadane's Algorithm",modifications:["Track start index when resetting current sum","Track end index when updating global max"],narrativeSteps:[{time:0,text:"Kadane's Algorithm finds max subarray in O(n)!",codeLine:null,action:"intro"},{time:4,text:"Keep a running sum, update global max as we go",codeLine:5,action:"highlight"},{time:8,text:"[-3]: curr=-3, skip. [7]: start fresh with 7",codeLine:8,action:"trace"},{time:12,text:"Max segment is [7,12,-8,-2,83] = 92",codeLine:null,action:"result"}],javaCode:`/*
Kadane's Algorithm (O(n)):
   Current Max = arr[0], Global Max = arr[0].
   
   Trace:
   [-3]: curr=-3, max=-3
   [7]: curr=max(7, -3+7)=7. max=7.
   [12]: curr=19. max=19.
   [-8]: curr=11. max=19.
   [-2]: curr=9. max=19.
   [83]: curr=92. max=92.
   [-7]: curr=85. max=92.
   [4]: curr=89. max=92.
   
   Segment: [7, 12, -8, -2, 83] = 92

Complexity: O(n).
*/`,pythonCode:"# See Java comments."},{id:"Summer24-Q5",title:"Bangladesh Map Graph",description:"Graph representation and connectivity.",problem:`Map of 8 divisions with highways.
i. Graph representation (Adj List).
ii. Additional highways for full connectivity (Complete Graph?).
iii. Bipartite Check (2 groups A and B).
iv. Odd Cycle detection.`,type:"theory",visualType:"graph",breakdown:["Adjacency List: O(V+E) space, efficient for sparse graphs","Complete graph K8 needs 28 edges total","Bipartite check: 2-color using BFS/DFS","Odd cycle exists iff graph is NOT bipartite"],keyDetails:{"K8 edges":"n(n-1)/2 = 8*7/2 = 28","Existing = 9":"Need 19 more for complete graph","2-coloring":"If any edge connects same color, not bipartite"},baseAlgorithm:"BFS/DFS for Bipartite Check",modifications:[],narrativeSteps:[{time:0,text:"Graph problems on maps!",codeLine:null,action:"intro"},{time:4,text:"K8 needs 28 edges, we have 9, need 19 more",codeLine:null,action:"analysis"},{time:8,text:"Bipartite check: try 2-coloring the graph",codeLine:null,action:"highlight"},{time:12,text:"Not bipartite ⟺ Has odd cycle",codeLine:null,action:"conclusion"}],javaCode:`/*
i. Adjacency List (Space O(V+E)).

ii. For "every division directly connected with each other":
    Need Complete Graph K8.
    Total Edges = 8*7/2 = 28.
    Existing = 9.
    Additional = 19.

iii. Bipartite Check (BFS/DFS 2-coloring):
    Color node 1 Red. Neighbors Blue.
    If neighbor already Red, then NOT Bipartite.
    Else continue.
    
iv. Odd Cycle:
    A graph has an odd cycle IFF it is NOT Bipartite.
*/`,pythonCode:"# See Java comments."}]};class h{constructor(){this.currentQuiz="Fall-24",this.currentQuestionId=null,this.viewer=null,this.init()}init(){if(this.cacheDOM(),!this.container){console.error("[AlgorithmsMidtermController] Container not found");return}this.bindEvents(),this.renderQuestionList(),this.showQuestionListView(),this.viewerContainer=this.container.querySelector("#solutionViewerContainer"),this.viewer=new s(this.viewerContainer),window.solutionViewer=this.viewer}cacheDOM(){this.container=document.querySelector(".algo-midterm-solutions-container"),this.container&&(this.quizButtons=this.container.querySelectorAll(".quiz-selector .semester-btn"),this.questionListView=this.container.querySelector("#questionListView"),this.questionList=this.container.querySelector("#questionList"),this.viewerContainer=this.container.querySelector("#solutionViewerContainer"),this.backToListBtn=this.container.querySelector("#backToListBtn"))}bindEvents(){var t,e;this.quizButtons.forEach(i=>{i.addEventListener("click",n=>{var r;(r=this.viewer)==null||r.close(),this.quizButtons.forEach(a=>a.classList.remove("active")),n.target.classList.add("active"),this.currentQuiz=n.target.dataset.quiz,this.renderQuestionList(),this.showQuestionListView()})}),(t=this.questionList)==null||t.addEventListener("click",i=>{const n=i.target.closest(".question-item");n&&(this.currentQuestionId=n.dataset.id,this.renderSolution())}),(e=this.backToListBtn)==null||e.addEventListener("click",()=>{this.showQuestionListView()})}showQuestionListView(){var t,e,i;(t=this.viewer)==null||t.close(),(e=this.questionListView)==null||e.classList.remove("hidden"),(i=this.viewerContainer)==null||i.classList.add("hidden"),this.currentQuestionId=null}renderQuestionList(){if(!this.questionList)return;const t=o[this.currentQuiz]||[];if(t.length===0){this.questionList.innerHTML=`
                <div class="no-questions">
                    <span>📭</span> No questions available for this semester
                </div>
            `;return}this.questionList.innerHTML=t.map(e=>`
            <div class="question-item" data-id="${e.id}">
                <span class="q-id">${e.id}</span>
                <span class="q-title">${e.title}</span>
                <span class="q-type">${e.type}</span>
                <span class="q-arrow">→</span>
            </div>
        `).join("")}renderSolution(){var n,r;const t=o[this.currentQuiz],e=t==null?void 0:t.find(a=>a.id===this.currentQuestionId);if(!e)return;(n=this.questionListView)==null||n.classList.add("hidden"),(r=this.viewerContainer)==null||r.classList.remove("hidden");const i=new l(e);this.viewer.render(i)}}export{h as AlgorithmsMidtermController};
