module colors {
  
  export class Color {
    constructor(
      public r: number,
      public g: number,
      public b: number) {}
                
    static scale(k: number, c: Color) {
      return new Color(k * c.r, k * c.g, k * c.b);
    }
    
    static plus(c1: Color, c2: Color) {
      return new Color(c1.r + c2.r, c1.g + c2.g, c1.b + c2.b);
    }
    
    static times(c1: Color, c2: Color) {
      return new Color(c1.r * c2.r, c1.g * c2.g, c1.b * c2.b);
    }
  }
  
  export class ColorRGBA extends Color {
    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a: number) {
      super(r, g, b);
    }
    
    static scale(k: number, c: ColorRGBA) {
      return new ColorRGBA(k * c.r, k * c.g, k * c.b, k * c.a);
    }
  }
  
  var WHITE = new Color(255, 255, 255);  // #FFFFFF
  var BLACK = new Color(  0,   0,   0);  // #000000
  
  var GREY = [
      new Color(250, 250, 250),  // [0] #FAFAFA
      new Color(245, 245, 245),  // [1] #F5F5F5
      new Color(238, 238, 238),  // [2] #EEEEEE
      new Color(224, 224, 224),  // [3] #E0E0E0
      new Color(189, 189, 189),  // [4] #BDBDBD
      new Color(158, 158, 158),  // [5] #9E9E9E
      new Color(117, 117, 117),  // [6] #757575
      new Color( 97,  97,  97),  // [7] #616161
      new Color( 66,  66,  66),  // [8] #424242
      new Color( 33,  33,  33),  // [9] #212121
  ];

  var RED = [
      new Color(255, 235, 238),  // [0] #FFEBEE
      new Color(255, 205, 210),  // [1] #FFCDD2
      new Color(239, 154, 154),  // [2] #EF9A9A
      new Color(229, 115, 115),  // [3] #E57373
      new Color(239,  83,  80),  // [4] #EF5350
      new Color(244,  67,  54),  // [5] #F44336
      new Color(229,  57,  53),  // [6] #E53935
      new Color(211,  47,  47),  // [7] #D32F2F
      new Color(198,  40,  40),  // [8] #C62828
      new Color(183,  28,  28),  // [9] #B71C1C
  ];

  var ORANGE = [
      new Color(255, 243, 224),  // [0] #FFF3E0
      new Color(255, 224, 178),  // [1] #FFE0B2
      new Color(255, 204, 128),  // [2] #FFCC80
      new Color(255, 183,  77),  // [3] #FFB74D
      new Color(255, 167,  38),  // [4] #FFA726
      new Color(255, 152,   0),  // [5] #FF9800
      new Color(251, 140,   0),  // [6] #FB8C00
      new Color(245, 124,   0),  // [7] #F57C00
      new Color(239, 108,   0),  // [8] #EF6C00
      new Color(230,  81,   0),  // [9] #E65100
  ];

  var YELLOW = [
      new Color(255, 253, 231),  // [0] #FFFDE7
      new Color(255, 249, 196),  // [1] #FFF9C4
      new Color(255, 245, 157),  // [2] #FFF59D
      new Color(255, 241, 118),  // [3] #FFF176
      new Color(255, 238,  88),  // [4] #FFEE58
      new Color(255, 235,  59),  // [5] #FFEB3B
      new Color(253, 216,  53),  // [6] #FDD835
      new Color(251, 192,  45),  // [7] #FBC02D
      new Color(249, 168,  37),  // [8] #F9A825
      new Color(245, 127,  23),  // [9] #F57F17
  ];
 
  var GREEN = [
      new Color(232, 245, 233),  // [0] #E8F5E9
      new Color(200, 230, 201),  // [1] #C8E6C9
      new Color(165, 214, 167),  // [2] #A5D6A7
      new Color(129, 199, 132),  // [3] #81C784
      new Color(102, 187, 106),  // [4] #66BB6A
      new Color( 76, 175,  80),  // [5] #4CAF50
      new Color( 67, 160,  71),  // [6] #43A047
      new Color( 56, 142,  60),  // [7] #388E3C
      new Color( 46, 125,  50),  // [8] #2E7D32
      new Color( 27,  94,  32),  // [9] #1B5E20
  ];
 
  var BLUE = [
      new Color(227, 242, 253),  // [0] #E3F2FD
      new Color(187, 222, 251),  // [1] #BBDEFB
      new Color(144, 202, 249),  // [2] #90CAF9
      new Color(100, 181, 246),  // [3] #64B5F6
      new Color( 66, 165, 245),  // [4] #42A5F5
      new Color( 33, 150, 243),  // [5] #2196F3
      new Color( 30, 136, 229),  // [6] #1E88E5
      new Color( 25, 118, 210),  // [7] #1976D2
      new Color( 21, 101, 192),  // [8] #1565C0
      new Color( 13,  71, 161),  // [9] #0D47A1
  ];

  var INDIGO = [
      new Color(232, 234, 246),  // [0] #E8EAF6
      new Color(197, 202, 233),  // [1] #C5CAE9
      new Color(159, 168, 218),  // [2] #9FA8DA
      new Color(121, 134, 203),  // [3] #7986CB
      new Color( 92, 107, 192),  // [4] #5C6BC0
      new Color( 63,  81, 181),  // [5] #3F51B5
      new Color( 57,  73, 171),  // [6] #3949AB
      new Color( 48,  63, 159),  // [7] #303F9F
      new Color( 40,  53, 147),  // [8] #283593
      new Color( 26,  35, 126),  // [9] #1A237E
  ];

  var PURPLE = [
      new Color(243, 229, 245),  // [0] #F3E5F5
      new Color(225, 190, 231),  // [1] #E1BEE7
      new Color(206, 147, 216),  // [2] #CE93D8
      new Color(186, 104, 200),  // [3] #BA68C8
      new Color(171,  71, 188),  // [4] #AB47BC
      new Color(156,  39, 176),  // [5] #9C27B0
      new Color(142,  36, 170),  // [6] #8E24AA
      new Color(123,  31, 162),  // [7] #7B1FA2
      new Color(106,  27, 154),  // [8] #6A1B9A
      new Color( 74,  20, 140),  // [9] #4A148C
  ];
  
  var BROWN = [
      new Color(239, 235, 233),  // [0] #EFEBE9
      new Color(215, 204, 200),  // [1] #D7CCC8
      new Color(188, 170, 164),  // [2] #BCAAA4
      new Color(161, 136, 127),  // [3] #A1887F
      new Color(141, 110,  99),  // [4] #8D6E63
      new Color(121,  85,  72),  // [5] #795548
      new Color(109,  76,  65),  // [6] #6D4C41
      new Color( 93,  64,  55),  // [7] #5D4037
      new Color( 78,  52,  46),  // [8] #4E342E
      new Color( 62,  39,  35),  // [9] #3E2723
  ];
  
}  // module colors
