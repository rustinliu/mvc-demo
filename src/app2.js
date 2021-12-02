import $ from "jquery";
import "./app2.css";
const html = `          
 <section id="app2">
<ul class="tab-bar">
    <li>1</li>
    <li>2</li>
</ul>
<ul class="tab-content">
    <li>内容1</li>
    <li>内容2</li>
</ul>
</section>
`;
const $element = $(html).appendTo($("body>.page"));
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const index = localStorage.getItem("app2-index") || 0;

$tabBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget);
    $li.addClass("selectd").siblings().removeClass("selectd");
    const index = $li.index();
    localStorage.setItem("app2-index", index);
    console.log(index);
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
});

$tabBar.children().eq(index).trigger("click");
