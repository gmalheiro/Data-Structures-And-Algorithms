namespace LinkedLists
{

    class LinkedListNode
    {
        public int Data { get; set; }
        public LinkedListNode Next { get; set; }

        public LinkedListNode(int data)
        {
            Data = data;
            Next = null;
        }
    }

    class LinkedList
    {
        int count;
        public LinkedListNode Head { get; set; }

        public LinkedList()
        {
            Head = null;
            count = 0;
        }

        public void AddNode(int data)
        {
            LinkedListNode node = new LinkedListNode(data);
            node.Next = Head;
            Head = node;
            //count++;
        }

        public void PrintList()
        {
            var runner = Head;
            while (runner != null)
            {
                Console.Write($" [{runner.Data}]");
                if (runner.Next != null)
                {
                    Console.Write(" -> ");
                }
                count++;
                runner = runner.Next;
            }
            //Console.WriteLine(count);
        }
    }

    public class Program
    {
        static void Main(string[] args)
        {
            var linkedList = new LinkedList();
            linkedList.AddNode(1);
            linkedList.AddNode(2);
            linkedList.AddNode(3);
            linkedList.AddNode(4);
            linkedList.AddNode(5);
            linkedList.AddNode(6);
            linkedList.AddNode(7);
            linkedList.AddNode(8); //O último é o head
            linkedList.PrintList();
        }
    }
}