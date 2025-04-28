// 游戏关卡数据
export const levels = [
  {
    id: 1,
    name: "HTML/CSS 入门",
    language: "html",
    description: "从最基础的网页语言开始",
    icon: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    background: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    backgroundColor: "#2c3e50",
    timeLimit: 120,
    points: 100,
    layout: {
      rows: 3,
      columns: 4
    },
    pairs: [
      {
        type: "tag",
        value: "<div>",
        image: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "tag",
        value: "<p>",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "property",
        value: "color",
        image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "property",
        value: "margin",
        image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "value",
        value: "#ff0000",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "value",
        value: "20px",
        image: "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    ],
    knowledge: "HTML(超文本标记语言)和CSS(层叠样式表)是网页开发的基础。HTML提供网页结构，CSS负责样式和布局。"
  },
  {
    id: 2,
    name: "JavaScript 基础",
    language: "javascript",
    description: "学习交互式网页脚本语言",
    icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    background: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    backgroundColor: "#f0db4f",
    timeLimit: 100,
    points: 150,
    layout: {
      rows: 4,
      columns: 4
    },
    pairs: [
      {
        type: "keyword",
        value: "let",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "keyword",
        value: "const",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "function",
        value: "function()",
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "function",
        value: "=>",
        image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "method",
        value: "map()",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "method",
        value: "filter()",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "object",
        value: "{}",
        image: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "array",
        value: "[]",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    ],
    knowledge: "JavaScript是一种高级解释型编程语言，能够为网页添加交互性。它是网页三大核心技术之一(HTML、CSS和JavaScript)。"
  },
  {
    id: 3,
    name: "Python 探索",
    language: "python",
    description: "简洁易读的通用编程语言",
    icon: "https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    background: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    backgroundColor: "#306998",
    timeLimit: 90,
    points: 200,
    layout: {
      rows: 4,
      columns: 5
    },
    pairs: [
      {
        type: "keyword",
        value: "def",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "keyword",
        value: "import",
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "function",
        value: "print()",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "function",
        value: "range()",
        image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "method",
        value: "append()",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "method",
        value: "sort()",
        image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed3bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "data",
        value: "list",
        image: "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "data",
        value: "dict",
        image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "control",
        value: "if-else",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        type: "control",
        value: "for loop",
        image: "https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    ],
    knowledge: "Python是一种高级解释型编程语言，以简洁、易读的语法著称。它支持多种编程范式，广泛应用于Web开发、数据分析、人工智能等领域。"
  }
];
