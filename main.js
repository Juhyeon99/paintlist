class todo {
  constructor(num) {
    this.todoBox = document.createElement("div"); // 투두리스트 div 박스 생성
    this.todoBox.className = "todoBox";
    this.todoBox.innerHTML = "<h2>To - Do List</h2>";


    this.inputBox = document.createElement("input"); //input생성
    this.inputBox.id = String(num) + "_inputBox"; //input id = num + "_inputBox" 로 생성 (여러개 생성하고 구별하기 위해 숫자와 _를 넣어줌)
    this.inputBox.className = "inputBox"; //css스타일을 위해 class이름 설정

    this.addButton = document.createElement("button"); //button 생성
    this.addButton.id = String(num) + "_addButton"; //button id = num + "_addButton"로 설정
    this.addButton.innerHTML = "<a>+</a>"; // 버튼안에 글자 설정
    this.addButton.className = "addButton"; //css스타일을 위해 class이름 설정

    this.listBox = document.createElement("div"); //div생성
    this.listBox.id = String(num) + "_listBox"; //div id = "id_listBox"로 설정
    this.addButton.className = "listBox"; //css스타일을 위해 class이름 설정

    if (Number(num) !== 0) {
      this.todoBox.style.display = "none"; // 여러개가 한꺼번에 출력된것을 보여주지 않기위해 none처리
    }

    this.todoBox.appendChild(this.inputBox); //todoBox의 자식으로 설정
    this.todoBox.appendChild(this.addButton);
    this.todoBox.appendChild(this.listBox);
  }

  getTodoBox() { //출력시켜주기위해 리턴을해줌
    return this.todoBox; 
  }
  getInputBox() {
    return this.inputBox;
  }
  getAddButton() {
    return this.addButton;
  }

  getListBox() {
    return this.listBox;
  }
}

class paint {
  constructor(num) {
    this.paintBox = document.createElement("div");
    this.paintBox.className = "paintBox"

    this.canvas = document.createElement("canvas");
    this.canvas.id = String(num) + "_canvas";
    this.canvas.className = "canvasBox";
    this.canvas.width = "444";
    this.canvas.height = "702";

    this.toolBox = document.createElement("div");
    this.toolBox.id = String(num) + "_toolBox";
    this.toolBox.className = "toolBox";

    this.colorPicker = document.createElement("input");
    this.colorPicker.id = String(num) + "_colorPicker";
    this.colorPicker.type = "color";
    this.colorPicker.className = "Picker";

    this.penRange = document.createElement("input");
    this.penRange.id = String(num) + "_penRange";
    this.penRange.className = "penRange";
    this.penRange.type = "range";
    this.penRange.min = "1";
    this.penRange.max = "20";
    this.penRange.step = "1";
    this.penRange.value = "10";

    this.back = document.createElement("button");
    this.back.id = String(num) + "_back";
    this.back.className = "back";

    this.bin = document.createElement("button");
    this.bin.id = String(num) + "_bin";
    this.bin.className = "bin";

    this.download = document.createElement("button");
    this.download.id = String(num) + "_download";
    this.download.className = "download";
    
    if (Number(num) !== 0) {
      this.paintBox.style.display = "none";
    }

    this.paintBox.appendChild(this.canvas); //paintBox의 자식설정 (캔버스,툴박스)
    this.paintBox.appendChild(this.toolBox);
    this.toolBox.appendChild(this.colorPicker); //toolBox의 자식설정 (컬러피커,굵기,여러기능들)
    this.toolBox.appendChild(this.penRange);
    this.toolBox.appendChild(this.back);
    this.toolBox.appendChild(this.bin);
    this.toolBox.appendChild(this.download);
  }
  getPaintBox() { //출력시켜주기위해 리턴을 해줌
    return this.paintBox;
  }
  getCanvas() {
    return this.canvas;
  }
  getToolBox() {
    return this.toolBox;
  }
  getColorPicker() {
    return this.colorPicker;
  }
  getPenRange() {
    return this.penRange;
  }
  getBack() {
    return this.back;
  }
  getBin() {
    return this.bin;
  }
  getDownload() {
    return this.download;
  }
}

// todo에 todoBox의 구성요소들 넣기
const htmlTodoTag = document.getElementById("todo");
const dayNum = 7; //요일 배열의 크기를 설정해줌 0~6
const todos = []; // class로 찍어낸 객체들 저장

const todoBoxes = []; //  todo box dom객체들 (태그들 저장된 배열)
const inputBoxes = [];
const addButtons = [];
const listBoxes = [];

for (let i = 0; i < dayNum; i++) { // 각 요일(배열)을 클랙할때마다 구성요소들을 출력시킴
  todos[i] = new todo(i);
  todoBoxes[i] = todos[i].getTodoBox();
  inputBoxes[i] = todos[i].getInputBox();
  addButtons[i] = todos[i].getAddButton();
  listBoxes[i] = todos[i].getListBox();
  htmlTodoTag.appendChild(todoBoxes[i]);
}

//위와 동일 DOM객체
const htmlPaintTag = document.getElementById("paint");
const paints = [];

const paintBoxes = [];
const canvass = [];
const contexts = [];
const toolBoxes = [];
const colorPickers = [];
const penRanges = [];
const backs = [];
const bins = [];
const downloads = [];

for (let i = 0; i < dayNum; i++) { // 각 요일(배열)을 클랙할때마다 구성요소들을 출력시킴
  paints[i] = new paint(i);
  paintBoxes[i] = paints[i].getPaintBox();
  canvass[i] = paints[i].getCanvas();
  contexts[i] = canvass[i].getContext("2d", { willReadFrequently: true });
  contexts[i].fillStyle = "whitesmoke";
  contexts[i].fillRect(0, 0, canvass[i].width, canvass[i].height);
  toolBoxes[i] = paints[i].getToolBox();
  colorPickers[i] = paints[i].getColorPicker();
  penRanges[i] = paints[i].getPenRange();
  backs[i] = paints[i].getBack();
  bins[i] = paints[i].getBin();
  downloads[i] = paints[i].getDownload();
  htmlPaintTag.appendChild(paintBoxes[i]);
}

// 요일 td 셀들
const cells = document.getElementById("week").getElementsByTagName("td");
//console.log(cells);

Array.from(cells).forEach((cell) => cell.addEventListener("click", look)); //클릭할때마다 그 방만 보여주게 하기 위함

function look(event) {                                                     //위에 적용되는 함수
  const pageNum = Number(event.target.id.split("_")[0]);
  for (let i = 0; i < dayNum; i++) {
    todoBoxes[i].style.display = "none";
    paintBoxes[i].style.display = "none";
  }
  todoBoxes[pageNum].style.display = "block";
  paintBoxes[pageNum].style.display = "block";
}

Array.from(addButtons).forEach((addButton) =>
  addButton.addEventListener("click", addTodo)
);

// var addButton = document.getElementById("addButton");
// var inputBox = document.getElementById("inputBox");
// var list = document.getElementById("listBox");

///////////////////투두리스트기능////////////////////////

function addTodo(event) {
  const pageNum = Number(event.target.id.split("_")[0]);

  if (inputBoxes[pageNum].value.length>0) {
    const li = document.createElement("li");       //li를 생성
    li.innerHTML = inputBoxes[pageNum].value;      //li의 인풋박스 내용을 넣음
    li.innerHTML += "<button class='dv' type='button' style='float: right'>-</button>";   //리스트를 지우는 버튼 생성
    const list_del_btn = li.getElementsByTagName("button")[0]; // 변수와 태그네임 설정
    // console.log(list_del_btn);
    listBoxes[pageNum].appendChild(li); //li를 리스트 박스의 자식으로 설정
    inputBoxes[pageNum].value = "";     //입력되고 인풋박스 안의 입력된 내용을 지워줌

    list_del_btn.addEventListener("click", function (e) {  //리스트를 지우는 버튼의 이벤트
      const button_prt = e.target.parentElement;           //타겟 부모노드
      console.log(button_prt);
      listBoxes[pageNum].removeChild(button_prt);          //자식 지우기
    });

    li.addEventListener("click", function () {              //클릭시 리스트 밑줄 긋기
      li.style.textDecoration = "line-through";
    });

    li.addEventListener("dblclick", function () {           //더블 클릭시 취소
      li.style.textDecoration = "none";
    });    //인풋박스안에 내용이 비어 있을때     //내용을 입력해주세요 알림
  }
}

////////////////////////그림판기능////////////////////////////////

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;
let restore_array = [];
let index = -1;

function start(event) {
  const pageNum = Number(event.target.id.split("_")[0]);
  is_drawing = true;
  contexts[pageNum].beginPath();
  contexts[pageNum].moveTo(event.target.offsetX, event.offsetY);
  event.preventDefault();

  // 이전것 저장해두기 // 이벤트가 마우스아웃이 아닐때 마우스가 안에 있을때 위치값 저장.
  if (event.type != "mouseout") {
    restore_array.push(
      contexts[pageNum].getImageData(
        0,
        0,
        canvass[pageNum].width,
        canvass[pageNum].height
      )
    );
    index += 1;
  }
  console.log(restore_array);
}

function draw(event) {
  const pageNum = Number(event.target.id.split("_")[0]);
  if (is_drawing) {
    contexts[pageNum].lineTo(
      event.clientX - canvass[pageNum].offsetLeft,
      event.clientY - canvass[pageNum].offsetTop
    );

    //console.log(event.clientX, event.clientY);
    //console.log(event.offsetX, event.offsetY);
    contexts[pageNum].strokeStyle = colorPickers[pageNum].value;
    contexts[pageNum].lineWidth = penRanges[pageNum].value;
    //console.log(contexts[pageNum].lineWidth);
    contexts[pageNum].lineCap = "round";
    contexts[pageNum].lineJoin = "round";
    contexts[pageNum].stroke();
  }
}

function stop(event) {
  const pageNum = Number(event.target.id.split("_")[0]);
  if (is_drawing) {
    contexts[pageNum].stroke();
    contexts[pageNum].closePath();
    is_drawing = false;
  }
  event.preventDefault();
}

for (let i = 0; i < dayNum; i++) {
  canvass[i].addEventListener("touchstart", start, false);
  canvass[i].addEventListener("touchmove", draw, false);
  canvass[i].addEventListener("mousedown", start, false);
  canvass[i].addEventListener("mousemove", draw, false);

  canvass[i].addEventListener("touchend", stop, false);
  canvass[i].addEventListener("mouseup", stop, false);
  canvass[i].addEventListener("mouseout", stop, false);
}

//뒤로가기

Array.from(backs).forEach((back) =>
  back.addEventListener("click", back_canvas)
);

function back_canvas(event) {
  const pageNum = Number(event.target.id.split("_")[0]);
  if (index <= 0) {
    clear_canvas(event);
  } else {
    restore_array.pop();
    index -= 1;
    contexts[pageNum].putImageData(restore_array[index], 0, 0);
  }
}

// 지우기

Array.from(bins).forEach((bin) => bin.addEventListener("click", clear_canvas));

function clear_canvas(event) {
  const pageNum = Number(event.target.id.split("_")[0]);
  contexts[pageNum].fillStyle = "whitesmoke";
  contexts[pageNum].clearRect(
    0,
    0,
    canvass[pageNum].width,
    canvass[pageNum].height
  );
  contexts[pageNum].fillRect(
    0,
    0,
    canvass[pageNum].width,
    canvass[pageNum].height
  );

  restore_array = [];
  index = -1;
}

// 저장하기
Array.from(downloads).forEach((download) =>
  download.addEventListener("click", save)
);

function save(event) {
  const pageNum = Number(event.target.id.split("_")[0]);
  canvass[pageNum].toBlob((blob) => {
    const a = document.createElement("a");
    document.body.append(a);
    a.download = "export{timestamp}.png";
    a.href = URL.createObjectURL(blob);
    a.click();
    a.remove();
  });
}