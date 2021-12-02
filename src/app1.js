import $ from "jquery";
import "./app1.css";

const eventBus = $({});
console.log(eventBus);
//数据都放到m
const m = {
    data: {
        n: parseInt(localStorage.getItem("n")),
    },
    creat() {},
    delete() {},
    updata(data) {
        Object.assign(m.data, data);
        eventBus.trigger("mupdated");
        localStorage.setItem("n", m.data.n);
    },
};
//视图相关都放到v
const v = {
    container: null,
    html: `            <div >
<div>
    <span id="number">{{n}}</span>
    <div class="output"></div>
</div>
<div>
    <button id="add1">+1</button>
    <button id="minus1">-1</button>
    <button id="mul2">*2</button>
    <button id="divide2">/2</button>
</div>
</div>`,
    init(container) {
        v.container = $(container);
    },
    render(n) {
        if (v.container.children.length !== 0) v.container.empty();
        $(v.html.replace("{{n}}", n)).appendTo(v.container);
    },
};

const c = {
    init(container) {
        v.init(container);
        v.render(m.data.n);
        c.autoBindEvents();
        eventBus.on("mupdated", () => {
            v.render(m.data.n);
        });
    },
    events: {
        "click #add1": "add",
        "click #minus1": "minus",
        "click #mul2": "mul",
        "click #divide2": "div",
    },
    add() {
        m.updata({ n: m.data.n + 1 });
    },
    minus() {
        m.updata({ n: m.data.n - 1 });
    },
    mul() {
        m.updata({ n: m.data.n * 2 });
    },
    div() {
        m.updata({ n: m.data.n / 2 });
    },
    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]];
            const spaceIndex = key.indexOf(" ");
            const part1 = key.slice(0, spaceIndex);
            const part2 = key.slice(spaceIndex + 1);
            v.container.on(part1, part2, value);
        }
    },
};
//第一次渲染HTML

export default c;
