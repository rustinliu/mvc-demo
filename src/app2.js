import $ from "jquery";
import "./app2.css";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
$tabBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget);
    $li.addClass("selectd").siblings().removeClass("selectd");
    const index = $li.index();
    console.log(index);
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
