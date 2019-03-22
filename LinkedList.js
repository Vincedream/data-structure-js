function LinkedList() {
    // Node 辅助类，表示要加入链表的项
    let Node = function(element) {
        this.element = element; // 当前的项
        this.next = null; // 只想下一个节点的项的指针
    };

    // 存储链表项的数量（内部/私有变量）
    let length = 0;

    // 第一个节点的引用
    let head = null;

    // 向链表尾部添加一个新的项
    this.append = function(element){
        // 由element创建的新项
        let node = new Node(element);
        // 临时当前项
        let current;
        // 假如head为null，则说明是空链表，则将新的元素赋值为element
        if(head === null) {
            head = node;
        } else {
            current = head;
            // 循环链表，查找到最后一项
            while(current.next) {
                current = current.next;
            }
            // 将最后一项的next复制为element
            current.next = node;
        }
        length++;
    };

    // 向链表的特定位置插入一个新的项
    this.insert = function(position, element){
        // 坚持越界值
        if (position >=0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;

            if(position === 0) {
                node.next = current;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    // 从链表移除一项 
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    // 从列表特定位置移除一项
    this.removeAt = function(position){
        // 检查越界值
        if(position > -1 && position < length) {
            // 当前节点
            let current = head;
            // 前一个节点
            let pervious;
            // 当前索引值
            let index = 0;

            if(position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    pervious = current;
                    current = current.next;
                }
                pervious.next = current.next;
            }
            length --;
            // 返回删除的节点
            return current.element;
        } else {
            return null;
        }
    };

    // 返回当前项在链表中的索引
    this.indexOf = function(element){
        let current = head;
        let index = 0;

        while(current) {
            if(element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };


    // 判断链表是否不包含任何元素
    this.isEmpty = function(){
        return length === 0;
    };

    // 返回链表中包含的元素个数
    this.size = function(){
        return length;
    };

    // 输出元素的值
    this.toString = function(){
        let current = head;
        string = '';
        while(current) {
            string += current.element + (current.next ? '->' : '');
            current = current.next;
        }
        return string;
    };

    // 获取第一个节点
    this.getHead = function() {
        return head;
    }
}


// test：

let list = new LinkedList();
list.append(19);
list.append(11);
list.insert(1, 221);
console.log(list.toString()); // 19->221->11
list.insert(2, 33221);
console.log(list.toString()) // 19->221->33221->11
list.remove(11)
console.log(list.toString()) // 19->221->33221
console.log(list.indexOf(19)); // 0
console.log(list.getHead()); 
// Node {
//     element: 19,
//     next: Node { element: 221, next: Node { element: 33221, next: null } } }