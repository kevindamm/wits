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
